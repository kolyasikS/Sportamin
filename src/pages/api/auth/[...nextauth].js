import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from "@/app/server/DB/dbConnect";
import UserModel from "@/app/server/models/user-model";
import ApiError from "@/app/server/exceptions/api-error";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline',
        }),
    ],
    pages: {
        signIn: '/login',
        error: '/login',
    },
    session: {
        jwt: true,
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({account, profile}) {
            await dbConnect();
            let user = await UserModel.findOne({email: profile.email});
            if (user) {
                return true;
            } else {
                throw ApiError.BadRequest('User is not registered');
            }
        },
        async jwt({token, user, account, profile, isNewUser}) {
            if (profile) {
                token.clientId = profile.aud;
            }
            return token;
        },
        async session({session, token}) {
            return {...session, clientId: token?.clientId}
        },
        async redirect({url, baseUrl }) {
            return '/login';
        },
    },
}

export default NextAuth(authOptions);