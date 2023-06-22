import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import Cookies from 'cookies';
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";


async function handler(req, res) {

    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'GET':
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            const cookies = new Cookies(req, res);
            cookies.set('refreshToken', userData.refreshToken, {
                maxAge: 30*24*60*60*1000,
                httpOnly: true
            });
            res.json({...userData, refreshToken: {
                token: userData.refreshToken,
                maxAge: 30*24*60*60*1000
            }});
    }
}

export default (req, res) => apiErrorMiddleware(req, res, handler);

