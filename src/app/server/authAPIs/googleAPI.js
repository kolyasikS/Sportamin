import {google} from "googleapis";

let web = {
    "client_id":"984029524984-o76k4a24i8krsj9h73gmot8tp6r42lri.apps.googleusercontent.com",
    "project_id":"sportamin",
    "auth_uri":"https://accounts.google.com/o/oauth2/auth",
    "token_uri":"https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
    "client_secret":"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",
    "redirect_uris":["http://localhost:3000/api/auth/signUp/google"],
    "javascript_origins":["http://localhost:3000"]
}
export const oauth2Client = new google.auth.OAuth2(
    web.client_id,
    web.client_secret,
    web.redirect_uris[0]
);