import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import Cookies from 'cookies';
import {validateRegistration} from "@/app/server/validations/registrationValidation";
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'POST':
            const {email, password, clientId, avatar} = req.body;
            const cookies = new Cookies(req, res);
            cookies.set('credentials', '', {
                maxAge: 0
            });
            validateRegistration(email, password, clientId)//
            const userData = await userService.registration(email, password, avatar);
            cookies.set('refreshToken', userData.refreshToken, {
                maxAge: 30*24*60*60*1000,
                httpOnly: true
            });
            res.json(userData);
    }
}
export default (req, res) => apiErrorMiddleware(req, res, handler);


