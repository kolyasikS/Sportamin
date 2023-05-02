import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import userService from "@/app/server/services/user-service";
import test from "@/app/lib/test";
import {oauth2Client} from "@/app/server/authAPIs/googleAPI";
export default async function handler(req, res) {
  return withApiErrorMiddleware(req, res, async () => {
    const { method } = req;
    await dbConnect();
    switch (method) {
      case 'POST':
        const {} = req.body;
        test();
        res.status(200).json('');
        //const user = await userService.test(email);
        //const data = user[0].avatar;
        break;
      case 'GET':
          const scopes = [
              'https://www.googleapis.com/auth/contacts.readonly',
              'https://www.googleapis.com/auth/user.emails.read',
              'profile',
          ];
          const authorizationUrl = oauth2Client.generateAuthUrl({
              access_type: 'offline',
              scope: scopes,
              include_granted_scopes: true
          });

          await res.redirect(301, authorizati onUrl);
    }
  });
}