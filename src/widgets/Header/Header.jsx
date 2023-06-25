import React, {useEffect, useState} from 'react';
import styles from './styles/Header.module.scss';
import {Loading, MainLogo} from "@/shared/ui/Logos/api/Logos";
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {authenticate, registration} from "@/app/lib/controllers/authController";
import {useRouter} from "next/router";
import ProfileMenu from "@/widgets/Header/ProfileMenu";
import NavMenu from "@/widgets/Header/NavMenu";
import defaultAvatar from "@assets/profile/default_avatar.png";
const Header = ({isLoading, avatar}) => {
    const isAuthState = useSelector(state => state.authReducer.isAuth);
    const isFetching = useSelector(state => state.sessionReducer.isLoading);
    const [isAuth, setIsAuth] = useState(isAuthState);
    const router = useRouter();
    useEffect(() => {
        setIsAuth(isAuthState);
    }, [isAuthState]);

    const dispatch = useDispatch();

    return (
        <div className={styles.introHeader}>
            {isFetching && <div className={styles.fetching}></div>}
            <MainLogo/>
            <NavMenu/>
            <div className={styles.profile} onClick={() => {
                registration(dispatch, {
                    email: 'mykola.primachenko@gmail.com',
                    password: 'optimus33',
                })
            }}>
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