import React, {useDeferredValue, useEffect, useRef, useState} from 'react';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import styles from './styles/FiltrationHeader.module.scss';
import filterImg from '@assets/filter.png';
import searchImg from '@assets/searchImage.png';
import cancelImg from '@assets/cancelImg.png';
import {sortOptions} from "@/app/Static Data/Filtration/Sorts";
import {useDispatch, useSelector} from "react-redux";
import {clearFilters, setRating} from "@/app/lib/store/actions/filterActions";
import {FiltrationDoubleTitleList} from "@/features/api/filtration";
const FiltrationHeader = ({setQuery, setSort, sortPath}) => {
    const nameRef = useRef();
    const surnameRef = useRef();
    const [isLoading, amountFilters] = useSelector(state =>
        [state.sessionReducer.isLoading, state.filterReducer.amountFilters]);
    const dispatch = useDispatch();
    //const nameDeferredQuery = useDeferredValue(nameQuery);
    //const surnameDeferredQuery = useDeferredValue(surnameQuery);
    const search = () => {
        if (isLoading) {
            return;
        }
        const name = nameRef.current.value || null;
        const surname = surnameRef.current.value || null;

        const query = {};
        if (name) {
            query.name = {$regex: nameRef.current.value, $options: 'i'};
        }
        if (surname) {
            query.surname = surnameRef.current.value;

        }
        setQuery(prev => {
            if (!name) {
                delete prev.name;
            }
            if (!surname) {
                delete prev.surname;
            }
            return {...prev, ...query};
        });
    }
    const clearFiltersClick = () => {
        if (!nameRef.current.value &&
        !surnameRef.current.value &&
        amountFilters === 1) {
            return;
        }
        nameRef.current.value = null;
        surnameRef.current.value = null;


        dispatch(clearFilters());
        dispatch(setRating(4.5));

        setQuery({});
    }
    return (
        <div className={styles.header} onKeyUp={(e) => {
            if (e.key === 'Enter') {
                search();
            }
        }}>
            <div className={styles.filterBlock}>
                <DarkBtnWithImg img={filterImg} widthImg={20}>Filter ({amountFilters})</DarkBtnWithImg>
                <FiltrationDoubleTitleList title={'Sort by'} options={sortOptions} sortPath={sortPath} setSort={setSort}/>
                <MainInput bgColor={'#0d1117'} color={'#c9d1d9'}
                           height={65} ref={nameRef}
                >
                    Name
                </MainInput>
                <MainInput bgColor={'#0d1117'} color={'#c9d1d9'}
                           height={65} ref={surnameRef}
                >
                    Surname
                </MainInput>
                <DarkBtnWithImg img={searchImg} widthImg={30} onClick={search}></DarkBtnWithImg>
            </div>
            <div className={`${styles.clearFilterBlock} ${isLoading ? styles.isLoading : ''}`}>
                <DarkBtnWithImg img={cancelImg} widthImg={20} onClick={clearFiltersClick}>Clear filters</DarkBtnWithImg>
            </div>
        </div>
    );
};

export default FiltrationHeader;