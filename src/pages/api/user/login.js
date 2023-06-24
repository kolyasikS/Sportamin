import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import Cookies from 'cookies';
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'POST':
            const {email, auth} = req.body;
            const userData = await userService.login(email, auth);
            const cookies = new Cookies(req, res);
            console.log('cookies & userDAta', cookies, userData);
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

export default async (req, res) => await apiErrorMiddleware(req, res, handler);

