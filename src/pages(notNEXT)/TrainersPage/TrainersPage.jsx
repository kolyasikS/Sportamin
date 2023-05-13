import React, {useEffect, useState} from 'react';
import IntroductionPage from "@/shared/ui/Titles/IntroductionPage/IntroductionPage";
import banner from '@assets/blogbanner.jpg';
import {getUsers} from "@/app/lib/controllers/userController";
import {filtrationItems} from "@/app/Static Data/Filtration/Filtration";
import {useSelector} from "react-redux";
import {SearchItems} from "@/widgets/api/Widgets";
import {SearchedTrainer} from "@/shared/ui/SearchItems/api/searchedItems";
import {getImageFromBase64} from "@/app/lib/features/image";
import FiltrationHeader from "@/pages(notNEXT)/TrainersPage/FiltrationHeader";

const TrainersPage = () => {
    const [query, setQuery] = useState({});
    const [sort, setSort] = useState({});
    const filterState = useSelector(state => state.filterReducer);
    const fetchTrainers = async (query, sort) => {
        query['trainer.isTrainer'] = true;
        return getUsers(query, sort);
    }
    const renderTrainerItem = (item) => {
        return <SearchedTrainer key={item._id} trainer={item.trainer} _id={item._id}
                         src={getImageFromBase64(item.avatar)} name={item.name} surname={item.surname}/>
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
            <SearchItems fetchItems={fetchTrainers} query={query} setQuery={setQuery}
                         filtrationItems={filtrationItems} sort={sort}
                         renderSearchedItem={renderTrainerItem}>
                <FiltrationHeader setQuery={setQuery} setSort={setSort}
                                  sortPath={'trainer.'}/>
            </SearchItems>
        </main>
    );
};

export default TrainersPage;