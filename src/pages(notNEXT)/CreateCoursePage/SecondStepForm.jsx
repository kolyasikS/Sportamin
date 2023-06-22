import React, {useContext, useEffect, useState} from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/StepForm.module.scss";
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import {v4} from "uuid";
import Week from "@/pages(notNEXT)/CreateCoursePage/Content/Week";
import NewItem from "@/pages(notNEXT)/CreateCoursePage/Content/NewItem";
import {useDispatch, useSelector} from "react-redux";
import {statuses} from "@/app/lib/store/constants/generalConstants";
import {setExercises, setStatus} from "@/app/lib/store/actions/courseActions";
import {createCourse, updateCourse} from "@/app/lib/controllers/courseController";
import generalStyles from "@/pages(notNEXT)/CreateCoursePage/styles/general.module.scss";
import BackgroundShadowContext from "@/app/lib/features/contexts/BGShadowContext";

const SecondStepForm = ({content, courseID}) => {
    const [weeksState, setWeeksState] = useState([{id: v4()}]);
    const [exercisesState, setExercisesState] = useState([]);
    const addWeek = () => {
        setWeeksState(prev => [...prev, {id: v4()}]);
    }
    const [createStatus, course] = useSelector(state => {
        return [state.courseReducer.status, state.courseReducer, state.authReducer.user];
    })
    // eslint-disable-next-line no-unused-vars
    const [isBGShadow, stub] = useContext(BackgroundShadowContext);

    const dispatch = useDispatch();
    useEffect(() => {
        if (content) {
            setWeeksState(content.map((week) => ({id: week._id})));
            let newExercises = [];

            for (let i = 0; i < content.length; i++) {
                let days = content[i].days;
                for (let j = 0; j < days.length; j++) {
                    let exercises = days[j].exercises;
                    for (let k = 0; k < exercises.length; k++) {
                        newExercises.push({
                            day: days[j]._id,
                            week: content[i]._id,
                            dayNum: j + 1,
                            weekNum: i + 1,
                            id: exercises[k]._id,
                            title: exercises[k].title,
                            technique: exercises[k].technique,
                            muscles: exercises[k].muscles,
                        });
                    }
                }
            }
            setExercisesState(newExercises);
        }
    }, []);
    const removeWeek = (id, weekNumArg) => {
        setWeeksState(weeksState.filter(week => week.id !== id));
        if (weekNumArg) {
            setExercisesState(
                exercisesState
                    .filter(exer => exer.week !== id)
                    .map(exer => {
                        return {
                            ...exer,
                            weekNum: weekNumArg < exer.weekNum
                                ? exer.weekNum - 1
                                : exer.weekNum
                        }
                    })
            );
        }
    }
    useEffect(() => {
        if (createStatus === statuses.FETCHING) {
            dispatch(setExercises(exercisesState));
            dispatch(setStatus(statuses.CREATED));
        } else if (createStatus === statuses.CREATED) {
            if (content) {
                updateCourse(dispatch, courseID, course).then();
            } else {
                createCourse(dispatch, course, '642a86b370ed3faaff3f12e0').then(); // testing id of trainer
            }
        }
    }, [createStatus]);
    return (
        <form className={styles.form}>
            <div className={`${isBGShadow ? generalStyles.bgShadow : ''}`}></div>
            <HorizontalSeparator color={'#0d8068'}>Content</HorizontalSeparator>
            {weeksState.map((item, ind) =>
                <Week {...item} key={item.id}
                      number={ind + 1}
                      setExercisesState={setExercisesState}
                      exercisesState={exercisesState}
                      days={content ? content[ind].days : null}
                      removeWeek={() => removeWeek(item.id)}
                />
            )}
            <NewItem title={'week'} setItems={addWeek}/>
        </form>
    );
};

export default SecondStepForm;