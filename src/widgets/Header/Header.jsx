import React from 'react';
import styles from './Header.module.scss';
import {Avatar, Loading, MainLogo} from "@/shared/ui/Logos/api/Logos";
import TestImage from "../../../public/media/images/muhamed.jpg";
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
import {useSelector} from "react-redux";
import {authenticate} from "@/app/lib/controllers/authController";
import {useRouter} from "next/router";
const Header = ({isLoading}) => {
    const state = useSelector(state => state.authReducer);
    const router = useRouter();
    return (
        <div className={styles.introHeader}>
            <MainLogo/>
            <nav className={styles.navHeader}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/trainers">Trainers</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/contact">Contact us</a></li>
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