import React, {useState} from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/Day.module.scss";
import generalStyles from '../styles/general.module.scss';
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";
import {ArrowY} from "@/shared/ui/api/icons";
import NewItem from "@/pages(notNEXT)/CreateCoursePage/Content/NewItem";
import {v4} from "uuid";
import Exercise from "@/pages(notNEXT)/CreateCoursePage/Content/Exercise";

const Day = ({number}) => {
    const [exercises, setExercises] = useState([]);
    const [isDayOpen, setIsDayOpen] = useState(number === 1 ? true : false);
    const toggleDay = () => {
        setIsDayOpen(prev => !prev);
    }
    const addExercise = () => {
        setExercises(prev => [...prev, {
            id: v4(),
            number: exercises.length + 1
        }]);
    }
    return (
        <div className={styles.day}>
            <div className={styles.dayHeader} onClick={toggleDay}>
                <h2 className={`${generalStyles.formItemTitle} ${styles.title}`}>
                    Day <span>{number}</span>
                </h2>
                <ArrowY isTrue={isDayOpen}/>
            </div>
            {isDayOpen && <div className={styles.dayInner}>
                {exercises.map(item =>
                    <Exercise {...item} key={item.id}/>
                )}
                <NewItem title={'exercise'} setItems={addExercise}/>
            </div>}
        </div>
    );
};

export default Day;