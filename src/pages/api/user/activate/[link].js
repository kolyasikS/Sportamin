import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import Cookies from 'cookies';
import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
export default async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        await dbConnect();
        switch (method) {
            case 'GET':
                const {activationLink} = req.query;
                let userData = await userService.activate(activationLink);
                const cookies = new Cookies(req, res);
                cookies.set('refreshToken', userData.refreshToken, {
                    maxAge: 30*24*60*60*1000,
                    httpOnly: true
                });
                res.redirect(process.env.CLIENT_URL);
        }
    });
}
