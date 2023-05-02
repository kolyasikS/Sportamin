import React from 'react';
import {SignUpPage} from "@/pages(notNEXT)/api/Components";
import {getCsrfToken, getProviders, getSession} from "next-auth/react";
import {login} from "@/app/lib/controllers/authController";
import cookie from 'cookie';

const SignUp = ({credentials}) => {
    return (
        <SignUpPage credentials={credentials}/>
    );
};
export async function getServerSideProps(context) {
    let cookies;
    if (context.req.headers.cookie) {
        cookies = cookie.parse(context.req.headers.cookie);
    }
    if (cookies?.credentials) {
        return {
            props: {
                credentials: JSON.parse(cookies.credentials)
            }
        }
    }
    return {
        props: {
        }
    }
}
export default SignUp;