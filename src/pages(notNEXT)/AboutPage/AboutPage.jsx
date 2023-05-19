import React from 'react';
import Features from "@/pages(notNEXT)/AboutPage/Features";
import FAQ from "@/pages(notNEXT)/AboutPage/FAQ";
import Founder from "@/pages(notNEXT)/AboutPage/Founder";
import {IntroductionPage} from "@/shared/ui/Titles/api/Titles";
import bg from '@assets/blogbanner.jpg';

const AboutPage = () => {
    return (
        <main>
            <IntroductionPage bg={bg} title={'About'} titleSpan={'Us'} height={450}/>
            <Features/>
            <Founder/>
            <FAQ/>
        </main>
    );
};

export default AboutPage;