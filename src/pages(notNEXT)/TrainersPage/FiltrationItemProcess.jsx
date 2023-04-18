import React, {useEffect, useState} from 'react';
import styles from "@/widgets/Searching/Filtration/styles/FiltrationItem.module.scss";
import {ComboBox, RadioBox} from "@/shared/ui/Inputs/api/Inputs";
import {useDispatch, useSelector} from "react-redux";
import {addLanguage, removeLanguage, setRating} from "@/app/lib/store/actions/filterActions";

const FiltrationItemProcess = ({isInnerShowed, items, multiple, toggleActive, setActive}) => {
    const dispatch = useDispatch();
    const filterState = useSelector(state => state.filterReducer);

    return (
        isInnerShowed && <div className={styles.filtrationItemInner}>
            {items.map(item =>
                multiple
                    ? <ComboBox key={item.id} id={item.id} isActive={filterState.languages.includes(item.value)}
                                toggleActive={() => toggleActive(item.value, filterState, dispatch)}
                    >
                        <p>{item.title}</p>
                    </ComboBox>
                    : <RadioBox key={item.id} id={item.id} isActive={item.value === filterState.minRating}
                                setActive={() => setActive(item.value, dispatch)}
                    >
                        {item.children}
                        <p>{item.title}</p>
                    </RadioBox>
            )}
        </div>
    );
};

export default FiltrationItemProcess;