import UserModel from "@/app/server/models/user-model";
import bcrypt from 'bcrypt';
import {v4} from 'uuid';
import mailService from "@/app/server/services/mail-service";
import tokenService from "@/app/server/services/token-service";
import UserDto from "@/app/server/dtos/user-dto";
import ApiError from "@/app/server/exceptions/api-error";
import TokenModel from "@/app/server/models/token-model";
import {func} from "joi";
class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email});

        if (candidate) {
            //await UserModel.deleteOne({email});
            throw ApiError.BadRequest(`User already exists with ${email} address`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = v4();
        const user = await UserModel.create({email, password: hashPassword});
        await mailService.sendActivationMail(email, `${process.env.CLIENT_URL}/api/activate/${activationLink}`);

        return AuthData(user);
    }
    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink});
        if (!user) {
            throw ApiError.BadRequest('Invalid activation link');
        }
        user.isActivated = true;
        user.save();
    }
    async login(email, password) {
        const user = await UserModel.findOne({email});
        if (!user) {
            throw ApiError.BadRequest('Trainer is undefined');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('An incorrect password');
        }
        return AuthData(user);
    }
    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);
        return AuthData(user);
    }
    async getTrainers(query, sort) {
        const trainers = await UserModel.find({...query, "trainer.isTrainer": true}).sort(sort);
        return trainers;
    }
    async getTrainer(id) {
        const trainer = await UserModel.findOne({_id: id});
        return trainer;
    }
    async update(email, image) {
        await UserModel.updateOne({email}, {avatar: image});
    }

    async test(email) {
        return await UserModel.find({email});
    }
}
async function AuthData(user) {
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
        ...tokens,
        user: userDto
    };
}
export default new UserService();
