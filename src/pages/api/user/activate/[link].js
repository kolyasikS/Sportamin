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
                await userService.activate(activationLink);
                res.redirect(process.env.CLIENT_URL);
        }
    });
}
