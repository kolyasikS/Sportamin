import React, {useEffect, useMemo, useState} from 'react';
import styles from './styles/Header.module.scss';
import {Avatar, Loading, MainLogo} from "@/shared/ui/Logos/api/Logos";
import TestImage from "../../../public/media/images/muhamed.jpg";
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
import {useSelector} from "react-redux";
import {authenticate} from "@/app/lib/controllers/authController";
import {useRouter} from "next/router";
import Link from "next/link";
import ProfileMenu from "@/widgets/Header/ProfileMenu";
import {bool} from "joi";
const Header = ({isLoading}) => {
    const isAuthState = useSelector(state => state.authReducer.isAuth);
    const [isAuth, setIsAuth] = useState(isAuthState);
    const router = useRouter();

    useEffect(() => {
        setIsAuth(isAuthState);
    }, [isAuthState]);
    return (
        <div className={styles.introHeader}>
            <MainLogo/>
            <nav className={styles.navHeader}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/trainers">Trainers</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
            </nav>
            <div className={styles.profile}>
                {isLoading
                    ? <Loading/>
                    : isAuth
                        ? <ProfileMenu/>
                        : <RBButton onclick={async () => await authenticate(router)}>Log in</RBButton>
                }
            </div>
        </div>
    );
};

export default Header;