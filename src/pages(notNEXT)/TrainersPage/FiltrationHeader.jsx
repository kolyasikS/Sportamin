import React, {useEffect, useRef, useState} from 'react';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import styles from './styles/FiltrationHeader.module.scss';
import filterImg from '@assets/filter.png';
import cancelImg from '@assets/cancelImg.png';
import {sortOptions} from "@/app/Static Data/Filtration/Sorts";
import {useDispatch, useSelector} from "react-redux";
import {clearFilters, setRating} from "@/app/lib/store/actions/filterActions";
import {FiltrationDoubleTitleList} from "@/features/api/filtration";
import {AdaptiveFiltrationHeader} from "@/widgets/api/Searching";

const FiltrationHeader = ({setQuery, setSort, sortPath}) => {
    const nameRef = useRef();
    const surnameRef = useRef();
    const [isLoading, amountFilters] = useSelector(state =>
        [state.sessionReducer.isLoading, state.filterReducer.amountFilters]);
    const dispatch = useDispatch();
    const [isAdaptiveMenuOpen, setIsAdaptiveMenuOpen] = useState(false);
    useEffect(() => {
        if (isAdaptiveMenuOpen) {
            document.body.style.overflowY = 'hidden';
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
            document.documentElement.style.overflowY = 'auto';
        }
    }, [isAdaptiveMenuOpen])
    const search = () => {
        setIsAdaptiveMenuOpen(false);
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
            {isAdaptiveMenuOpen
                ? <div className={styles.blackout} onClick={() => {
                    setIsAdaptiveMenuOpen(false)
                }}></div>
                : null
            }
            <div className={styles.filterBlock}>
                <DarkBtnWithImg img={filterImg}
                                widthImg={20}
                                onClick={() => {
                                    setIsAdaptiveMenuOpen(true);
                                    document.body.style.overflowY = 'hidden';
                                    document.documentElement.style.overflowY = 'hidden';
                                }}
                >
                    Filter ({amountFilters})
                </DarkBtnWithImg>
                <FiltrationDoubleTitleList title={'Sort by'} options={sortOptions} sortPath={sortPath} setSort={setSort}/>
                <AdaptiveFiltrationHeader search={search}
                                          isOpen={isAdaptiveMenuOpen}
                >
                    <MainInput bgColor={'#161b22'} color={'#c9d1d9'}
                               height={65} ref={nameRef} width={'100%'}
                    >
                        Name
                    </MainInput>
                    <MainInput bgColor={'#161b22'} color={'#c9d1d9'}
                               height={65} ref={surnameRef} width={'100%'}
                    >
                        Surname
                    </MainInput>
                </AdaptiveFiltrationHeader>
            </div>
            <div className={`${styles.clearFilterBlock} ${isLoading ? styles.isLoading : ''}`}>
                <DarkBtnWithImg img={cancelImg} widthImg={20} onClick={clearFiltersClick}>Clear filters</DarkBtnWithImg>
            </div>
        </div>
    );
};

export default FiltrationHeader;