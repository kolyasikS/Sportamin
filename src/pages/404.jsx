import React, {useEffect} from 'react';
import {HomePage} from "@/pages(notNEXT)/api/Components";
import {useRouter} from "next/router";

const Custom404 = () => {
    const route = useRouter();
    useEffect(() => {
        //route.push('/');
    }, []);
    return (
        <h1>The page is not found... Error 404</h1>
    );
};

export default Custom404;