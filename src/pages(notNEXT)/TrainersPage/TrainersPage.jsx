import React, {useEffect, useState} from 'react';
import IntroductionPage from "@/shared/ui/Titles/IntroductionPage/IntroductionPage";
import banner from '@assets/blogbanner.jpg';
import {getTrainers} from "@/app/lib/controllers/userController";
import {filtrationItems} from "@/app/Static Data/Filtration/Filtration";
import {useSelector} from "react-redux";
import {SearchItems} from "@/widgets/api/Widgets";
import {SearchedTrainer} from "@/shared/ui/SearchItems/api/searchedItems";
import {getImageFromBase64} from "@/app/lib/features/image";

const TrainersPage = () => {
    const [query, setQuery] = useState({})
    const filterState = useSelector(state => state.filterReducer);
    const fetchTrainers = async (query, sort) => {
        return getTrainers(query, sort);
    }
    const renderTrainerItem = (item) => {
        return <SearchedTrainer key={item._id} trainer={item.trainer} _id={item._id}
                         src={getImageFromBase64(item.avatar.data)} name={item.name} surname={item.surname}/>
    }
    useEffect(() => {
        let languages = filterState.languages;
        let rating = filterState.minRating;

        let languagesMongoDB = null;
        if (languages.length) {
            languagesMongoDB = {'trainer.languages': {$all: languages}};
        }
        let ratingMongoDB = null;
        if (rating) {
            ratingMongoDB = {'trainer.rating': {$gte: rating}};
        }
        setQuery(prev => {
            if (!ratingMongoDB) {
                delete prev['trainer.rating'];
            }
            if (!languagesMongoDB) {
                delete prev['trainer.languages'];
            }
            return {...prev, ...ratingMongoDB, ...languagesMongoDB};
        });
    }, [filterState.minRating, filterState.languages.length])
    return (
        <main>
            <IntroductionPage bg={banner} title={'Trainers'} height={450}/>
            {/*<SearchTrainers/>*/}
            <SearchItems fetchItems={fetchTrainers} query={query} setQuery={setQuery}
                         sortPath={'trainer.'} filtrationItems={filtrationItems}
                         renderSearchedItem={renderTrainerItem}
            />
        </main>
    );
};

export default TrainersPage;