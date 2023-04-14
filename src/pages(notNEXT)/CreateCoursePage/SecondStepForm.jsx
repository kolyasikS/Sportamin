import React, {useEffect, useState} from 'react';
import {MainInput, MainTextArea} from "@/shared/ui/Inputs/api/Inputs";
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/StepForm.module.scss";
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import {DoubleTitleList} from "@/widgets/api/Widgets";
import languages from "@/app/Static Data/Languages/Languages";
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";
import {v4} from "uuid";
import Week from "@/pages(notNEXT)/CreateCoursePage/Content/Week";
import NewProvideItem from "@/pages(notNEXT)/CreateCoursePage/NewProvideItem";
import NewItem from "@/pages(notNEXT)/CreateCoursePage/Content/NewItem";
import {useDispatch, useSelector} from "react-redux";
import {statuses} from "@/app/lib/store/constants/courseConstants";
import {setExercises, setGeneralInformation, setWeeks} from "@/app/lib/store/actions/courseActions";

const SecondStepForm = () => {
    const [weeksState, setWeeksState] = useState([{id: v4()}]);
    const [exercisesState, setExercisesState] = useState([]);
    const addWeek = () => {
        setWeeksState(prev => [...prev, {id: v4()}]);
    }
    const createStatus = useSelector(state => state.courseReducer.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (createStatus === statuses.FETCHING) {
            dispatch(setExercises(exercisesState));
        }
    }, [createStatus]);
    return (
        <form className={styles.form}>
            <HorizontalSeparator color={'#0d8068'}>Content</HorizontalSeparator>
            {weeksState.map((item, ind) =>
                <Week {...item} key={item.id}
                      number={ind + 1}
                      setExercisesState={setExercisesState}
                      exercisesState={exercisesState}
                />
            )}
            <NewItem title={'week'} setItems={addWeek}/>
        </form>
    );
};

export default SecondStepForm;