import React from 'react';
import IntroductionPage from "@/shared/ui/Titles/IntroductionPage/IntroductionPage";
import banner from '@assets/blogbanner.jpg';
import SearchTrainers from "@/pages(notNEXT)/TrainersPage/SearchTrainers";

const TrainersPage = () => {
    return (
        <main>
            <IntroductionPage bg={banner} title={'Trainers'} height={450}/>
            <SearchTrainers/>
        </main>
    );
};

export default TrainersPage;