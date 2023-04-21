import React, {useContext, useEffect, useState} from 'react';
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
import {setExercises, setGeneralInformation, setStatus, setWeeks} from "@/app/lib/store/actions/courseActions";
import {create, createCourse} from "@/app/lib/controllers/courseController";
import generalStyles from "@/pages(notNEXT)/CreateCoursePage/styles/general.module.scss";
import BackgroundShadowContext from "@/app/lib/features/contexts/BGShadowContext";

const SecondStepForm = () => {
    const [weeksState, setWeeksState] = useState([{id: v4()}]);
    const [exercisesState, setExercisesState] = useState([]);
    const addWeek = () => {
        setWeeksState(prev => [...prev, {id: v4()}]);
    }
    const [createStatus, course, user] = useSelector(state => {
        return [state.courseReducer.status, state.courseReducer, state.authReducer.user];
    })
    const [isBGShadow, stub] = useContext(BackgroundShadowContext);

    const dispatch = useDispatch();
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
            createCourse(dispatch, course, '642a86b370ed3faaff3f12e0').then();
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
                      removeWeek={() => removeWeek(item.id)}
                />
            )}
            <NewItem title={'week'} setItems={addWeek}/>
        </form>
    );
};

export default SecondStepForm;