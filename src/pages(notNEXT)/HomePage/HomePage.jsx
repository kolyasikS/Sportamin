import React from 'react';
import Introduction from "@/pages(notNEXT)/HomePage/Introduction/Introduction";
import AboutUs from "@/pages(notNEXT)/HomePage/AboutUs/AboutUs";
import Categories from "@/pages(notNEXT)/HomePage/Categories/Categories";
import Achievements from "@/pages(notNEXT)/HomePage/Achievements/Achievements";
import Trainers from "@/pages(notNEXT)/HomePage/Trainers/Trainers";
import TopCourses from "@/pages(notNEXT)/HomePage/TopCourses/TopCourses";
import Calculator from "@/pages(notNEXT)/HomePage/Calculator/Calculator";
import Blog from "@/pages(notNEXT)/HomePage/Blog/Blog";
import Partners from "@/pages(notNEXT)/HomePage/Partners/Partners";

const HomePage = ({courses}) => {
    return (
        <main className={'space-y-2'}>
            <Introduction/>
            <AboutUs/>
            <Categories/>
            <Achievements/>
            <Trainers/>
            <TopCourses courses={courses}/>
            <Calculator/>
            <Blog/>
            <Partners/>
        </main>
    );
};

export default HomePage;