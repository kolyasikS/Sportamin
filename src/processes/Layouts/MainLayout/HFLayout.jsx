import React, {useEffect, useState} from 'react';
import {Footer, Header} from "@/widgets/api/Widgets";
import {useRouter} from "next/router";
import hiddenPaths from "@/app/Static Data/HFLayoutPaths/HFLayoutPaths";
import User from "@/entities/User/User";
import {checkAuth} from "@/app/lib/controllers/authController";
import {useDispatch, useSelector} from "react-redux";

const HFLayout = ({children}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.user);
    const [isLoading, setIsLoading] = useState(true);

    const showLayout = !hiddenPaths.includes(router.pathname);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            if (user) {
                setIsLoading(false);
                return;
            }
            console.log(1)
            checkAuth(dispatch, () => setIsLoading(false)).then();
        } else {
            setIsLoading(false);
        }
    }, []);

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