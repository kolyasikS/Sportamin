import dbConnect from "@/app/server/DB/dbConnect";
import url from 'url';
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import UserService from "@/app/server/services/user-service";
import {oauth2Client} from "@/app/server/authAPIs/googleAPI";
import Cookies from "cookies";
async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'GET':
            let q = url.parse(req.url, true).query;
            let { tokens } = await oauth2Client.getToken(q.code);
            let avatarUrl;
            oauth2Client.setCredentials(tokens);

            await fetch('https://people.googleapis.com/v1/people/me?personFields=photos', {
                headers: {
                    Authorization: `Bearer ${tokens.access_token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    avatarUrl = data.photos && data.photos.length > 0 ? data.photos[0].url : null;
                })
                .catch(error => console.error(error));

            let {email, aud: clientId} = await oauth2Client.getTokenInfo(tokens.access_token);

            const cookies = Cookies(req, res);
            cookies.set('credentials', JSON.stringify(
                {
                    email,
                    avatar: avatarUrl,
                    clientId
                }), {
                httpOnly: true
            });
            res.redirect(307, '/registration');
    }
}
export default (req, res) => apiErrorMiddleware(req, res, handler);
