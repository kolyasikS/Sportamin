import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import Cookies from 'cookies';
import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'POST':
            console.log(1);
            const {email, password} = req.body;
            const userData = await userService.login(email, password);

            const cookies = new Cookies(req, res);
            cookies.set('refreshToken', userData.refreshToken, {
                maxAge: 30*24*60*60*1000,
                httpOnly: true
            });
            res.json(userData);
    }
}

export default async (req, res) => await apiErrorMiddleware(req, res, handler);

