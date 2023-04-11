import React, {useEffect, useState} from 'react';
import styles from "@/widgets/Searching/Filtration/styles/FiltrationItem.module.scss";
import {ComboBox, RadioBox} from "@/shared/ui/Inputs/api/Inputs";
import RatingBar from "@/shared/ui/Rating/RatingBar/RatingBar";
import {useDispatch, useSelector} from "react-redux";
import {addLanguage, removeLanguage, setRating} from "@/app/lib/store/actions/filterActions";

const FiltrationItemProcess = ({isInnerShowed, items, multiple, isRated}) => {
    const dispatch = useDispatch();
    const filterState = useSelector(state => state.filterReducer);
    useEffect(() => {
    }, [filterState.languages.length, filterState.minRating])
    const toggleLanguages = (value) => {
        if (filterState.languages.includes(value)) {
            dispatch(removeLanguage(value));
        } else {
            dispatch(addLanguage(value));
        }
    }

    const setActiveRating = (value) => {
        dispatch(setRating(value));
    }


    return (
        isInnerShowed && <div className={styles.filtrationItemInner}>
            {items.map(item =>
                multiple
                    ? <ComboBox key={item.id} id={item.id} isActive={filterState.languages.includes(item.value)}
                                toggleActive={() => toggleLanguages(item.value)}
                    >
                        <p>{item.title}</p>
                    </ComboBox>
                    : <RadioBox key={item.id} id={item.id} isActive={item.value === filterState.minRating}
                                setActive={() => setActiveRating(item.value)}
                    >
                        {isRated && <RatingBar rating={item.value}/>}
                        <p>{item.title}</p>
                    </RadioBox>
            )}
        </div>
    );
};

export default FiltrationItemProcess;