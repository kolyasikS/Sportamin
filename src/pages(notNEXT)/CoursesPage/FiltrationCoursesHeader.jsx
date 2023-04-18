import React, {useRef} from 'react';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import styles from './styles/FiltrationCoursesHeader.module.scss';
import filterImg from '@assets/filter.png';
import searchImg from '@assets/searchImage.png';
import cancelImg from '@assets/cancelImg.png';
import {coursesSortOptions} from "@/app/Static Data/Filtration/Sorts";
import {useDispatch, useSelector} from "react-redux";
import {clearFilters, setRating} from "@/app/lib/store/actions/filterActions";
import {FiltrationDoubleTitleList} from "@/features/api/filtration";
const FiltrationCoursesHeader = ({setQuery, setSort}) => {
    const titleRef = useRef();
    const [isLoading, amountFilters] = useSelector(state =>
        [state.sessionReducer.isLoading, state.filterReducer.amountFilters]);
    const dispatch = useDispatch();
    const search = () => {
        if (isLoading) {
            return;
        }
        const title = titleRef.current.value || null;

        const query = {};
        if (title) {
            query.title = {$regex: title, $options: 'i'};
        }
        setQuery(prev => {
            if (!title) {
                delete prev.title;
            }
            return {...prev, ...query};
        });
    }
    const clearFiltersClick = () => {
        if (!titleRef.current.value &&
        amountFilters === 1) {
            return;
        }
        titleRef.current.value = null;

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
                <FiltrationDoubleTitleList title={'Sort by'} options={coursesSortOptions}
                                           setSort={setSort}/>
                <MainInput bgColor={'#0d1117'} color={'#c9d1d9'}
                           height={65} ref={titleRef}
                >
                    Title
                </MainInput>
                <DarkBtnWithImg img={searchImg} widthImg={30} onClick={search}></DarkBtnWithImg>
            </div>
            <div className={`${styles.clearFilterBlock} ${isLoading ? styles.isLoading : ''}`}>
                <DarkBtnWithImg img={cancelImg} widthImg={20} onClick={clearFiltersClick}>Clear filters</DarkBtnWithImg>
            </div>
        </div>
    );
};

export default FiltrationCoursesHeader;