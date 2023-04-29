import React, {useRef, useState} from 'react';
import styles from './styles/FormLogin.module.scss';
import {MainLogoInversion} from "@/shared/ui/Logos/api/Logos";
import {DarkBtnWithImg, OAuthLink, RBButton} from "@/shared/ui/Buttons/api/Buttons";
import github from '../../../public/media/images/github.png';
import google from '../../../public/media/images/google.png';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {login, sendActivationLink} from "@/app/lib/controllers/authController";
import {useRouter} from "next/router";
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import {WarningModalW} from "@/widgets/api/Modals";
const FormLogin = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const dispatch = useDispatch();
    const router = useRouter();
    const [warning, setWarning] = useState(null);
    const submitLogin = async () => {
        let email = emailRef.current.value;
        let password = passRef.current.value;
        await login(dispatch, email, password, async (err) => {
            if (err) {
                setWarning({
                    title: 'Authentication',
                    description: err.message
                })
            } else {
                await router.push('/');
            }
        })
    }
    const toSendActivationLink = async () => {
        let email = emailRef.current.value;
        setWarning(null);
        await sendActivationLink(email);
    }
    return (
        <div className={styles.formLogin}>
            <div className={styles.formLoginInner}>
                <MainLogoInversion/>
                <h1>Log in to Sportamin</h1>
                <div className={styles.OAuthLinks}>
                    <OAuthLink logo={google}>Continue with Google</OAuthLink>
                    <OAuthLink logo={github}>Continue with GitHub</OAuthLink>
                </div>
                <HorizontalSeparator>or</HorizontalSeparator>
                <div className={styles.spaceY}>
                    <MainInput width={-1} ref={emailRef} value={'o687801077@gmail.com'}>Email address</MainInput>
                    <MainInput width={-1} ref={passRef} value={'123456'}>Password</MainInput>
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
    );
};

export default FormLogin;