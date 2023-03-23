import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import Cookies from 'cookies';
import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import {validateRegistration} from "@/app/server/validations/registrationValidation";
import ApiError from "@/app/server/exceptions/api-error";
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'POST':
            const {email, password} = req.body;

            if (validateRegistration(email, password).error) {
                throw ApiError.BadRequest(`Invalid email or password`, [validateRegistration(email, password).error]);
            }

            const userData = await userService.registration(email, password);
            const cookies = new Cookies(req, res);
            cookies.set('refreshToken', userData.refreshToken, {
                maxAge: 30*24*60*60*1000,
                httpOnly: true
            });
            res.json(userData);
    }
}
export default (req, res) => apiErrorMiddleware(req, res, handler);


