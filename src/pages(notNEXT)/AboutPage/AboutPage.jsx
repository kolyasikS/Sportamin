import React from 'react';
import {Footer, Header} from "@/widgets/api/Widgets";
import Introduction from "@/pages(notNEXT)/AboutPage/Introduction";
import Features from "@/pages(notNEXT)/AboutPage/Features";
import FAQ from "@/pages(notNEXT)/AboutPage/FAQ";
import Founder from "@/pages(notNEXT)/AboutPage/Founder";

const AboutPage = () => {
    return (
        <main>
            <Introduction/>
            <Features/>
            <Founder/>
            <FAQ/>
        </main>
    );
};

export default AboutPage;