import React from 'react';
import {LoginPage} from "@/pages(notNEXT)/api/Components";
import {getProviders, signIn, getCsrfToken, getSession} from "next-auth/react";
import {login} from "@/app/lib/controllers/authController";

const Login = ({providers, csrfToken, session, error}) => {
    return (
        <LoginPage providers={providers}
                   csrfToken={csrfToken}
                   signIn={signIn} error={error}
                   sessionFromServer={session}
        />
    );
};
export async function getServerSideProps(context) {
    const session = await getSession(context);
    let providers = await getProviders();
    let csrfToken = await getCsrfToken();
    if (context.query.error) {
        return {
            props: {
                providers,
                csrfToken,
                session,
                error: context.query.error
            }
        }
    }
    if (session) {
        let response = await login(() => {}, session.user.email, {clientId: session.clientId});
        if (!response.errors) {
            context.res.setHeader('set-cookie', `refreshToken=${response.refreshToken.token}; HttpOnly; Max-Age=${response.refreshToken.maxAge}`);
            return {
                redirect: {
                    destination: '/',
                    fallback: false,
                }
            }
        }
    }
    return {
        props: {
            providers,
            csrfToken,
            session
        }
    }
}
export default Login;