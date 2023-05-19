import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import { RequestCookies, ResponseCookies } from '@edge-runtime/cookies'
import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import {validateRegistration} from "@/app/server/validations/registrationValidation";
import ApiError from "@/app/server/exceptions/api-error";
import Cookies from "cookies";
import stackMiddlewares from "@/app/server/middlewares/stackMiddlewares";
import withAuthMiddleware from "@/app/server/middlewares/authMiddleware";
import {func} from "joi";

async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'PUT':
            const {trainerId, userId, courseId} = req.body;
            const users = await userService.buyCourse(trainerId, userId, courseId);
            return res.json(users);
    }
}

export default async (req, res) => {
    const middlewares = [withAuthMiddleware];
    return withApiErrorMiddleware(req, res,
        handler,
        middlewares,
    );
};
