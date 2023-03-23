import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import { RequestCookies, ResponseCookies } from '@edge-runtime/cookies'
import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import {validateRegistration} from "@/app/server/validations/registrationValidation";
import ApiError from "@/app/server/exceptions/api-error";
import Cookies from "cookies";
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";

async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'POST':
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            const cookies = new Cookies(req, res);
            cookies.set('refreshToken', '', {
                maxAge: 0,
                httpOnly: true
            });
            return res.json(token);
    }
}

export default (req, res) => apiErrorMiddleware(req, res, handler);

