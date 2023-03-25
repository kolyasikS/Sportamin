import React from 'react';
import {Footer, Header} from "@/widgets/api/Widgets";
import {useRouter} from "next/router";
import hiddenPaths from "@/app/Static Data/HFLayoutPaths/HFLayoutPaths";

const HFLayout = ({children}) => {
    const router = useRouter();
    const showLayout = !hiddenPaths.includes(router.pathname);
    return (
        showLayout
        ? <>
            <Header/>
                {children}
            <Footer/>
        </>
        : children
    );
};

export default HFLayout;