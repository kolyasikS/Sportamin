import React, {useEffect, useState} from 'react';
import {Footer, Header} from "@/widgets/api/Widgets";
import {useRouter} from "next/router";
import hiddenPaths from "@/app/Static Data/HFLayoutPaths/HFLayoutPaths";
import {checkAuth, login} from "@/app/lib/controllers/authController";
import {useDispatch, useSelector} from "react-redux";
import {useSession} from "next-auth/react";

const HFLayout = ({children}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.authReducer);
    const [isLoading, setIsLoading] = useState(true);
    const {data: session} = useSession();

    const showLayout = !hiddenPaths.includes(router.pathname);
    useEffect(() => {
        if (auth.isSigningOut) {
            setIsLoading(true);
            return;
        }
        if (localStorage.getItem('token')) {
            if (auth.user || !showLayout) {
                setIsLoading(false);
                return;
            }
        }
        if (showLayout) {
            checkAuth(dispatch, () => setIsLoading(false)).then();
        }
    }, [session, auth.isSigningOut, showLayout]);

    return (
        showLayout
        ? <>
            <Header isLoading={isLoading}/>
                {children}
            <Footer/>
        </>
        : children
    );
};
export default HFLayout;