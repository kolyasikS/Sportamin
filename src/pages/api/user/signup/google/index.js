import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import {oauth2Client, scopes} from "@/app/server/authAPIs/googleAPI";
export default async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        await dbConnect();
        switch (method) {
            case 'GET':
                const authorizationUrl = oauth2Client.generateAuthUrl({
                    access_type: 'offline',
                    scope: scopes,
                    include_granted_scopes: true
                });
                await res.redirect(301, authorizationUrl);
        }
    });
}