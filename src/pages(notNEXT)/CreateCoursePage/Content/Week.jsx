import React, {useEffect, useState} from 'react';
import styles from '../styles/Week.module.scss';
import generalStyles from '../styles/general.module.scss';
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";
import {v4} from "uuid";
import Day from "@/pages(notNEXT)/CreateCoursePage/Content/Day";
import {ArrowY} from "@/shared/ui/api/icons";
import NewItem from "@/pages(notNEXT)/CreateCoursePage/Content/NewItem";
import Image from "next/image";
import cancel from '@assets/cancel2.png'
const Week = ({number, exercisesState, days,
                  setExercisesState, removeWeek, id}) => {
    const [daysState, setDaysState] = useState([{id: v4(), week: number}]);
    const [isWeekOpen, setIsWeekOpen] = useState(number === 1 ? true : false);
    const toggleWeek = () => {
        setIsWeekOpen(prev => !prev);
    }
    const addDay = () => {
        setDaysState(prev => [...prev, {id: v4()}]);
    }
    useEffect(() => {
        if (days) {
            setDaysState(days.map((item) => ({id: item._id, week: number})));
        }
    }, [days]);
    const removeDay = (id, dayNumArg) => {
        setDaysState(daysState.filter(day => day.id !== id));
        if (id && dayNumArg) {
            setExercisesState(
                exercisesState
                    .filter(exer => exer.day !== id)
                    .map(exer => {
                        return {
                            ...exer,
                            dayNum: dayNumArg < exer.dayNum
                                ? exer.dayNum - 1
                                : exer.dayNum
                        }
                    })
            );
        }
    }

    return (
        <div className={styles.week}>
            <div className={styles.weekHeader} onClick={toggleWeek}>
                <h2 className={`${generalStyles.formItemTitle} ${styles.title}`}>
                    Week <span>{number}</span>
                </h2>
                <div className={styles.features}>
                    <Image src={cancel} alt={''} width={23}
                           onClick={removeWeek}
                    />
                    <ArrowY isTrue={isWeekOpen}/>
                </div>
            </div>
            {isWeekOpen && <div className={styles.weekInner}>
                {daysState.map((item, num) =>
                    <Day {...item} key={item.id}
                         exercisesState={exercisesState}
                         setExercisesState={setExercisesState}
                         week={id} number={num + 1}
                         weekNum={number} exercises={days ? days[num].exercises : null}
                         removeDay={() => removeDay(item.id, num + 1)}
                    />
                )}
                <NewItem title={'day'} setItems={addDay}/>

            </div>}

        </div>
    );
};

export default Week;