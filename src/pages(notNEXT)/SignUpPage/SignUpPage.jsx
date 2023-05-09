import React, {useEffect, useRef} from 'react';
import styles from './styles/SignUpPage.module.scss';
import {useDispatch} from "react-redux";
import {registration} from "@/app/lib/controllers/authController";
import {MainLogoInversion} from "@/shared/ui/Logos/api/Logos";
import {OAuthLink, RBButton} from "@/shared/ui/Buttons/api/Buttons";
import googleImg from "@assets/google.png";
import github from "@assets/github.png";
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import Link from "next/link";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {useRouter} from "next/router";
import avatar from "@/shared/ui/Logos/Avatar/Avatar";
const SignUpPage = ({credentials}) => {
    const emailRef = useRef();
    const passRef = useRef();
    const dispatch = useDispatch();
    const router = useRouter();
    const submitRegistration = async () => {
        let email = emailRef.current.value;
        let password = passRef.current.value;
        const isSuccess = await registration(dispatch, {
            email,
            password
        });
        if (isSuccess) {
            await router.push('/');
        }
    }
    useEffect(() => {
        if (credentials) {
            registration(dispatch, credentials)
            .then(async () => {
                await router.push('/');
            })
        }
    }, [credentials])

    return (
        <main className={styles.main}>
            <div className={styles.formLogin}>
                <div className={styles.formLoginInner}>
                    <MainLogoInversion/>
                    <h1>Registration</h1>
                    <div className={styles.OAuthLinks}>
                        <OAuthLink logo={googleImg} onClick={() => router.push('api/user/signup/google/')}>Sign up with Google</OAuthLink>
                        <OAuthLink logo={github}>Sign up with GitHub</OAuthLink>
                    </div>
                    <HorizontalSeparator>or</HorizontalSeparator>
                    <p className={styles.privacy}>By registering, I accept the terms of the&nbsp;
                        <Link href={'#'}>Privacy Policy</Link>
                        &nbsp;and&nbsp;
                        <Link href={'#'}>User Agreement</Link>.
                    </p>
                    <div className={styles.spaceY}>
                        <MainInput width={-1} ref={emailRef}>Email address</MainInput>
                        <MainInput width={-1} ref={passRef} type={'password'}>Password</MainInput>
                        <RBButton width={-1} onclick={submitRegistration}>Continue</RBButton>
                    </div>
                    <p className={styles.signUp}>Do you have an account? <Link href="/login">Login</Link></p>
                </div>
            </div>
        </main>
    );
};

export default SignUpPage;