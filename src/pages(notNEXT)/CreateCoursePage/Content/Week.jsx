import React, {useEffect, useState} from 'react';
import styles from '../styles/Week.module.scss';
import generalStyles from '../styles/general.module.scss';
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";
import {v4} from "uuid";
import Day from "@/pages(notNEXT)/CreateCoursePage/Content/Day";
import {ArrowY} from "@/shared/ui/api/icons";
import NewItem from "@/pages(notNEXT)/CreateCoursePage/Content/NewItem";

const Week = ({number, exercisesState, setExercisesState}) => {
    const [daysState, setDaysState] = useState([{id: v4(), week: number}]);
    const [isWeekOpen, setIsWeekOpen] = useState(number === 1 ? true : false);
    const toggleWeek = () => {
        setIsWeekOpen(prev => !prev);
    }
    const addDay = () => {
        setDaysState(prev => [...prev, {id: v4()}]);
    }

    return (
        <div className={styles.week}>
            <div className={styles.weekHeader} onClick={toggleWeek}>
                <h2 className={`${generalStyles.formItemTitle} ${styles.title}`}>
                    Week <span>{number}</span>
                </h2>
                <ArrowY isTrue={isWeekOpen}/>
            </div>
            {isWeekOpen && <div className={styles.weekInner}>
                {daysState.map((item, num) =>
                    <Day {...item} key={item.id}
                         exercisesState={exercisesState}
                         setExercisesState={setExercisesState}
                         week={number} number={num + 1}
                    />
                )}
                <NewItem title={'day'} setItems={addDay}/>

            </div>}

        </div>
    );
};

export default Week;