import React, {useState} from 'react';
import styles from '../styles/Week.module.scss';
import generalStyles from '../styles/general.module.scss';
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";
import {v4} from "uuid";
import Day from "@/pages(notNEXT)/CreateCoursePage/Content/Day";
import NewProvideItem from "@/pages(notNEXT)/CreateCoursePage/NewProvideItem";
import Image from "next/image";
import {ArrowY} from "@/shared/ui/api/icons";
import NewItem from "@/pages(notNEXT)/CreateCoursePage/Content/NewItem";

const Week = ({number}) => {
    const [days, setDays] = useState([{id: v4(), number: 1}]);
    const [isWeekOpen, setIsWeekOpen] = useState(number === 1 ? true : false);
    const toggleWeek = () => {
        setIsWeekOpen(prev => !prev);
    }
    const addDay = () => {
        setDays(prev => [...prev, {id: v4(), number: days.length + 1}]);
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
                {days.map(item =>
                    <Day {...item} key={item.id}/>
                )}
                <NewItem title={'day'} setItems={addDay}/>

            </div>}

        </div>
    );
};

export default Week;