import React, {useEffect, useState} from 'react';
import styles from './styles/Header.module.scss';
import {Loading, MainLogo} from "@/shared/ui/Logos/api/Logos";
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
import {useSelector} from "react-redux";
import {authenticate} from "@/app/lib/controllers/authController";
import {useRouter} from "next/router";
import ProfileMenu from "@/widgets/Header/ProfileMenu";

import NavMenu from "@/widgets/Header/NavMenu";
const Header = ({isLoading, avatar}) => {
    const isAuthState = useSelector(state => state.authReducer.isAuth);
    const user = useSelector(state => state.authReducer.user);
    const isFetching = useSelector(state => state.sessionReducer.isLoading);
    const [isAuth, setIsAuth] = useState(isAuthState);
    const router = useRouter();
    useEffect(() => {
        setIsAuth(isAuthState);
    }, [isAuthState]);
    return (
        <div className={styles.introHeader}>
            {isFetching && <div className={styles.fetching}></div>}
            <MainLogo/>
            <NavMenu/>
            <div className={styles.profile}>
                {isLoading || (isAuth && !avatar)
                    ? <Loading/>
                    : isAuth
                        ? <ProfileMenu avatar={avatar}/>
                        : <RBButton onclick={async () => await authenticate(router)}
                        >
                            Log in
                        </RBButton>
                }
            </div>
        </div>
    );
};

export default Header;