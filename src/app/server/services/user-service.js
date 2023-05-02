import UserModel from "@/app/server/models/user-model";
import bcrypt from 'bcrypt';
import {v4} from 'uuid';
import mailService from "@/app/server/services/mail-service";
import tokenService from "@/app/server/services/token-service";
import UserDto from "@/app/server/dtos/user-dto";
import ApiError from "@/app/server/exceptions/api-error";
import {ObjectId} from "mongodb";
import ValidError from "@/app/server/exceptions/valid-error";

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
        await user.save();

        return AuthData(user);
    }
    async login(email, auth) {
        const user = await UserModel.findOne({email});
        if (!user) {
            throw ApiError.BadRequest('User is not registered');
        }
        if (auth.password) {
            const isPassEquals = await bcrypt.compare(auth.password, user.password);
            if (!isPassEquals) {
                throw ApiError.BadRequest('An incorrect password');
            }
        } else {
            if (!auth.clientId || auth.clientId !== process.env.CLIENT_ID) {
                throw ApiError.BadRequest('An incorrect client id');
            }
        }
        if (!user.isActivated) {
            throw ApiError.BadRequest('Account is not activated');
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
    async getUsers(query, sort) {
        if (query && query.id) {
            query._id = new ObjectId(query.id);
            delete query.id;
        }
        const trainers = await UserModel.find({...query}).sort(sort);
        return trainers;
    }
    async getTrainer(id) {
        const trainer = await UserModel.findOne({_id: id});
        return trainer;
    }
    async update(query, updatedUser) {
        if (query && query.id) {
            query._id = new ObjectId(query.id);
            delete query.id;
        }
        if (updatedUser.avatar) {
            updatedUser.avatar = Buffer.from(updatedUser.avatar, 'base64');
        }
        if (updatedUser.password.current) {
            const isPassEquals = await bcrypt.compare(updatedUser.password.prev, updatedUser.password.current);
            if (!isPassEquals) {
                throw ValidError.MismatchedData('Password do not match!');
            } else {
                updatedUser.password = await bcrypt.hash(updatedUser.password.new, 3)
            }
        }
        await UserModel.updateOne(query, updatedUser);
    }
    async test(email) {
        return await UserModel.find({email});
    }
}
async function AuthData(user) {
    const userDto = new UserDto(user);
    const tokenUserData = {...userDto};
    delete tokenUserData.avatar;
    const tokens = tokenService.generateTokens({...tokenUserData});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
        ...tokens,
        user: userDto
    };
}
export default new UserService();
