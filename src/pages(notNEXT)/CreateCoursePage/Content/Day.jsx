import React, {useContext, useState} from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/Day.module.scss";
import generalStyles from '../styles/general.module.scss';
import {ArrowY} from "@/shared/ui/api/icons";
import NewItem from "@/pages(notNEXT)/CreateCoursePage/Content/NewItem";
import {v4} from "uuid";
import Exercise from "@/pages(notNEXT)/CreateCoursePage/Content/Exercise";
import CreatingExerciseMenu from "@/pages(notNEXT)/CreateCoursePage/Content/CreatingExerciseMenu";
import BackgroundShadowContext from "@/app/lib/features/contexts/BGShadowContext";

const Day = ({number}) => {
    const [exercises, setExercises] = useState([]);
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
            console.log(exercises.map(e => e.id), newExercise.id);
            if (exercises.find(exercise => exercise.id === newExercise.id)) {
                setExercises(exercises.map(item => item.id === newExercise.id
                    ? newExercise
                    : item
                ));
            } else {
                setExercises([...exercises, newExercise]);
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
                {exercises.map((item, num) =>
                    <Exercise title={item.title}
                              edit={() => editExercise(item)}
                              remove={() => setExercises(exercises.filter(exercise => exercise.id !== item.id))}
                              number={num + 1}
                              key={item.id}
                    />
                )}
                <NewItem title={'exercise'} setItems={startCreatingExercise}/>
            </div>}
            {isExerciseCreating && <CreatingExerciseMenu exercise={editingExercise}
                addExercise={(exercise) => addExercise(exercise)}
            />}

        </div>

    );
};

export default Day;