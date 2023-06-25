import React, {useEffect, useRef, useState} from 'react';
import styles from './styles/SignUpPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {registration} from "@/app/lib/controllers/authController";
import {MainLogoInversion} from "@/shared/ui/Logos/api/Logos";
import {OAuthLink, RBButton} from "@/shared/ui/Buttons/api/Buttons";
import googleImg from "@assets/google.png";
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import Link from "next/link";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {useRouter} from "next/router";
import {setIsSigningOut} from "@/app/lib/store/actions/authActions";
import {WarningModalW} from "@/widgets/api/Modals";
const SignUpPage = ({credentials}) => {
    const emailRef = useRef();
    const passRef = useRef();
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useSelector(state => state.authReducer);
    const [warning, setWarning] = useState(null);
    const submitRegistration = async () => {
        let email = emailRef.current.value;
        let password = passRef.current.value;
        const result = await registration(dispatch, {
            email,
            password,
            avatar: '.next/static/media/default_avatar.fff2e960.png'
        });
        if (!result.data) {
            setWarning({
                title: 'Activation',
                description: 'Please, activate your account with a link sent on your email',
                apply: async () => {
                    setWarning(null);
                    await router.push('/');
                },
                cancel: null,
            })
        } else if (result.status === 412) {
            setWarning({
                title: 'Incorrect password',
                description: 'Password can contain only Latin letters and 1 digit as minimum',
                apply: () => setWarning(null),
                cancel: () => setWarning(null)
            })
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
    useEffect(() => {
        if (auth.isSigningOut) {
            dispatch(setIsSigningOut(false));
        }
    }, [auth.isSigningOut])
    return (
        <main className={styles.main}>
            <div className={styles.formLogin}>
                <div className={styles.formLoginInner}>
                    <MainLogoInversion/>
                    <h1>Registration</h1>
                    <div className={styles.OAuthLinks}>
                        <OAuthLink logo={googleImg} onClick={() => router.push('api/user/signup/google/')}>Sign up with Google</OAuthLink>
                        {/*<OAuthLink logo={github}>Sign up with GitHub</OAuthLink>*/}
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
                {warning &&
                    <WarningModalW open={warning}
                                   apply={warning.apply}
                                   cancel={warning.cancel}
                                   title={warning.title} applyTitle={'OK'}
                                   description={warning.description}
                    >
                    </WarningModalW>
                }
            </div>
        </main>
    );
};

export default SignUpPage;