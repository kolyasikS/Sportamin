import React, {useEffect, useRef, useState} from 'react';
import styles from './styles/LoginPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {login, sendActivationLink} from "@/app/lib/controllers/authController";
import {MainLogoInversion} from "@/shared/ui/Logos/api/Logos";
import {OAuthLink, RBButton} from "@/shared/ui/Buttons/api/Buttons";
import google from "@assets/google.png";
import github from "@assets/github.png";
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import Link from "next/link";
import {WarningModalW} from "@/widgets/api/Modals";
import {useSession} from "next-auth/react";
import {setIsSigningOut} from "@/app/lib/store/actions/authActions";

const LoginPage = ({providers, csrfToken, sessionFromServer, error, signIn}) => {
    const emailRef = useRef();
    const passRef = useRef();
    const dispatch = useDispatch();
    const router = useRouter();
    const [warning, setWarning] = useState(null);
    const auth = useSelector(state => state.authReducer);
    const {data: session} = useSession();
    const submitLogin = async () => {
        let email = emailRef.current.value;
        let password = passRef.current.value;
        await login(dispatch, email, {password: password}, async (err) => {
            if (err) {
                setWarning({
                    title: 'Authentication',
                    description: err.message
                })
            } else {
                await router.push('/');
            }
        });
    }
    const toSendActivationLink = async () => {
        let email = emailRef.current.value;
        setWarning(null);
        await sendActivationLink(email);
    }
    const signInGoogle = async () => {
        await signIn(providers.google.id);
    }
    useEffect(() => {
        if (error) {
            setWarning({
                title: 'Authentication',
                description: error,
            })
        }
    }, [error]);
    useEffect(() => {
        if (auth.isSigningOut) {
            dispatch(setIsSigningOut(false));
        }
    }, [auth.isSigningOut])
    useEffect(() => {
        if ((sessionFromServer || session) && !error) {
            let clientId;
            let email;
            if (sessionFromServer) {
                clientId = sessionFromServer.clientId;
                email = sessionFromServer.user.email;
            } else if (session) {
                clientId = session.clientId;
                email = session.user.email;
            }
            login(dispatch, email, {clientId},async (err) => {
                if (err) {
                    setWarning({
                        title: 'Authentication',
                        description: err.message
                    })
                } else {
                    await router.push('/');
                }
            }).then();
        }
    }, [session]);
    return (
        <main className={styles.main}>
            <div className={styles.formLogin}>
                <div className={styles.formLoginInner}>
                    <MainLogoInversion/>
                    <h1>Log in to Sportamin</h1>
                    <div className={styles.OAuthLinks}>
                        <OAuthLink logo={google} onClick={signInGoogle}>Continue with Google</OAuthLink>
                        <OAuthLink logo={github}>Continue with GitHub</OAuthLink>
                    </div>
                    <HorizontalSeparator>or</HorizontalSeparator>
                    <div className={styles.spaceY}>
                        <MainInput width={-1} ref={emailRef} defaultValue={'o687801077@gmail.com'}>Email address</MainInput>
                        <MainInput width={-1} ref={passRef} defaultValue={'123456'}>Password</MainInput>
                        <RBButton width={-1} onclick={submitLogin}>Continue</RBButton>
                    </div>
                    <p className={styles.signUp}>Don&apos;t have an account? <Link href="/registration">Sign up</Link></p>
                    <p className={styles.privacy}>This site is protected by reCAPTCHA and the Google&nbsp;<br/>
                        <Link href={'#'}>Privacy Policy</Link>
                        &nbsp;and&nbsp;
                        <Link href={'#'}>Terms of Service</Link>
                        &nbsp;apply.</p>
                </div>
                {warning &&
                    <WarningModalW open={warning}
                                   apply={() => setWarning(null)}
                                   cancel={() => setWarning(null)}
                                   title={warning.title} applyTitle={'OK'}
                                   description={warning.description}
                    >
                        <div className={styles.warningBtn} height={45} onClick={toSendActivationLink}>Get link again</div>
                    </WarningModalW>
                }
            </div>
        </main>
    );
};

export default LoginPage;