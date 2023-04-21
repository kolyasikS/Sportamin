import React, {useDeferredValue, useEffect, useState} from 'react';
import styles from './styles/TrainersPage.module.scss';
import {filtrationItems} from "@/app/Static Data/Filtration/Filtration";
import {FiltrationHeader, FiltrationInner} from "@/widgets/api/Widgets";
import {getTrainers} from "@/app/lib/controllers/userController";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoading} from "@/app/lib/store/actions/sessionActions";
import TrainersItemsList from "@/pages(notNEXT)/TrainersPage/TrainersItemsList";
const SearchTrainers = () => {
    const [filteredTrainers, setFilteredTrainers] = useState([]);
    const deferredSearchedTrainers = useDeferredValue(filteredTrainers);
    const [query, setQuery] = useState({})
    const [sort, setSort] = useState({})
    const [isEmpty, setIsEmpty] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.sessionReducer.isLoading);

    const filterState = useSelector(state => state.filterReducer);

    const fetchTrainers = (query, sort) => {

        getTrainers(query, sort)
            .then(res => {
                if (!res || res.length === 0) {
                    setIsEmpty(true);
                } else {
                    setIsEmpty(false);
                }
                setFilteredTrainers(res);
            })
            .catch(e => console.log(e))
            .finally(() => {
                dispatch(setIsLoading(false));
            });
    }

    useEffect(() => {
        if (!Object.keys(sort).length) {
            return;
        }
        if (!isLoading) {
            dispatch(setIsLoading(true));
        } else {
            return;
        }
        fetchTrainers(query, sort);

    }, [query, sort]);
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
        <section className={styles.trainersSection}>
            <FiltrationHeader setQuery={setQuery} setSort={setSort}
                              sortPath={'trainer.'}/>
            <div className={styles.trainersSectionInner}>
                <FiltrationInner items={filtrationItems} isLoading={isLoading}/>
                <TrainersItemsList searchedTrainers={deferredSearchedTrainers}
                                   isEmpty={isEmpty}/>
            </div>
        </section>
    );
};

export default SearchTrainers;