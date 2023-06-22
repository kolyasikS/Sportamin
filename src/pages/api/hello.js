import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import {google} from "googleapis";
export default async function handler(req, res) {
  return withApiErrorMiddleware(req, res, async () => {
    const { method } = req;
    await dbConnect();
    switch (method) {
      case 'POST':
        res.status(200).json('');
        break;
      case 'GET':
        let web = {
          "client_id":"984029524984-o76k4a24i8krsj9h73gmot8tp6r42lri.apps.googleusercontent.com",
          "project_id":"sportamin",
          "auth_uri":"https://accounts.google.com/o/oauth2/auth",
          "token_uri":"https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
          "client_secret":"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",
          "redirect_uris":[`${process.env.API_URL}/api/auth/user/google/callback`],
          "javascript_origins":[`${process.env.API_URL}`]
        }
        // eslint-disable-next-line no-unused-vars
        const scopes = [
          'https://www.googleapis.com/auth/contacts.readonly',
          'https://www.googleapis.com/auth/user.emails.read',
          'profile',
        ];
        // eslint-disable-next-line no-unused-vars
        const oauth2Client = new google.auth.OAuth2(
            web.client_id,
            web.client_secret,
            web.redirect_uris[0]
        );
        break;
    }
  });
}