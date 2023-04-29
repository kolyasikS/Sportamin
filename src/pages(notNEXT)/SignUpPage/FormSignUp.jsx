import React, {useEffect, useRef, useState} from 'react';
import styles from './styles/FormSignUp.module.scss';
import {MainLogoInversion} from "@/shared/ui/Logos/api/Logos";
import {OAuthLink, RBButton} from "@/shared/ui/Buttons/api/Buttons";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth, login, registration} from "@/app/lib/controllers/authController";
import google from "@assets/google.png";
import github from "@assets/github.png";
import {HorizontalSeparator} from "@/shared/ui/api/separators";
const FormSignUp = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const dispatch = useDispatch();
    const submitRegistration = async () => {
        const isSuccess = await registration(dispatch, emailRef.current.value, passRef.current.value);
        if (isSuccess) {
            await router.push('/');
        }
    }

    return (
        <div className={styles.formLogin}>
            <div className={styles.formLoginInner}>
                <MainLogoInversion/>
                <h1>Registration</h1>
                <div className={styles.OAuthLinks}>
                    <OAuthLink logo={google}>Sign up with Google</OAuthLink>
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
    );
};

export default FormSignUp;