import React from 'react';
import styles from './Header.module.scss';
import {Avatar, Loading, MainLogo} from "@/shared/ui/Logos/api/Logos";
import TestImage from "../../../public/media/images/muhamed.jpg";
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
import {useSelector} from "react-redux";
import {authenticate} from "@/app/lib/controllers/authController";
import {useRouter} from "next/router";
import Link from "next/link";
const Header = ({isLoading}) => {
    const state = useSelector(state => state.authReducer);
    const router = useRouter();
    console.log(state);
    return (
        <div className={styles.introHeader}>
            <MainLogo/>
            <nav className={styles.navHeader}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/trainers/index">Trainers</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
            </nav>
            <div className={styles.profile}>
                {isLoading
                    ? <Loading/>
                    : state.user
                        ? <Avatar src={TestImage}/>
                        : <RBButton onclick={async () => await authenticate(router)}>Log in</RBButton>
                }
            </div>
        </div>
    );
};

export default Header;