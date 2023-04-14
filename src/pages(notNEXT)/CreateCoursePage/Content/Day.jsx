import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/Day.module.scss";
import generalStyles from '../styles/general.module.scss';
import {ArrowY} from "@/shared/ui/api/icons";
import NewItem from "@/pages(notNEXT)/CreateCoursePage/Content/NewItem";
import {v4} from "uuid";
import Exercise from "@/pages(notNEXT)/CreateCoursePage/Content/Exercise";
import CreatingExerciseMenu from "@/pages(notNEXT)/CreateCoursePage/Content/CreatingExerciseMenu";
import BackgroundShadowContext from "@/app/lib/features/contexts/BGShadowContext";
import {useDispatch, useSelector} from "react-redux";
import {statuses} from "@/app/lib/store/constants/courseConstants";
import {setDays, setExercises} from "@/app/lib/store/actions/courseActions";

const Day = ({number, week, setExercisesState, exercisesState}) => {
    const [editingExercise, setEditingExercise] = useState(null);
    const [isDayOpen, setIsDayOpen] = useState(number === 1 ? true : false);
    const [isExerciseCreating, setIsExerciseCreating] = useState(false);
    const toggleBGShadow = useContext(BackgroundShadowContext);
    const toggleDay = () => {
        setIsDayOpen(prev => !prev);
    }
    const startCreatingExercise = () => {
        setIsExerciseCreating(true);
        if (toggleBGShadow) {
            toggleBGShadow();
        }
    }

    const addExercise = (newExercise) => {
        if (newExercise) {
            console.log(exercisesState.map(e => e.id), newExercise.id);
            if (exercisesState.find(exercise => exercise.id === newExercise.id)) {
                setExercisesState(exercisesState.map(item => item.id === newExercise.id
                    ? newExercise
                    : item
                ));
            } else {
                setExercisesState([...exercisesState, {...newExercise, day: number, week: week}]);
            }
        }
        setIsExerciseCreating(false);
        setEditingExercise(null);
        if (toggleBGShadow) {
            toggleBGShadow();
        }
    }
    const editExercise = (exercise) => {
        setEditingExercise(exercise);
        setIsExerciseCreating(true);
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
                {exercisesState.map(function (item, num) {
                    if (item.day === number
                        && item.week === week) {
                        this.count++;
                        return (<Exercise title={item.title}
                                      edit={() => editExercise(item)}
                                      remove={() => {
                                          setExercisesState(exercisesState.filter(exercise => exercise.id !== item.id))
                                      }}
                                      number={this.count}
                                      key={item.id}
                        />)
                    }
                }, {count: 0})}
                <NewItem title={'exercise'} setItems={startCreatingExercise}/>
            </div>}
            {isExerciseCreating && <CreatingExerciseMenu exercise={editingExercise}
                addExercise={(exercise) => addExercise(exercise)}
            />}

        </div>

    );
};

export default Day;