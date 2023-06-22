import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import Cookies from 'cookies';
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import Cors from 'cors'
import runMiddleware from "@/app/server/cors/cors";

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
    origin: (origin, callback) => {
        // eslint-disable-next-line no-constant-condition
        if (true) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
})
async function handler(req, res) {
    await runMiddleware(req, res, cors);

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

