import React, {useEffect, useState} from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/StepForm.module.scss";
import generalStyles from './styles/general.module.scss';
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import {MainInput, MainTextArea} from "@/shared/ui/Inputs/api/Inputs";
import {DoubleTitleList} from "@/widgets/api/Widgets";
import languages from "@/app/Static Data/Languages/Languages";
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";
import {useDispatch, useSelector} from "react-redux";
import {statuses} from "@/app/lib/store/constants/courseConstants";
import {setGeneralInformation, setProvidedItems, setRequirements} from "@/app/lib/store/actions/courseActions";

const listLanguages = languages.map((lang, num) =>
    ({...lang, isActive: !num ? true : false}));
const FirstStepForm = ({course}) => {
    const [title, setTitle] = useState(course ? course.title : '');
    const [caption, setCaption] = useState(course ? course.subtitle : '');
    const [language, setLanguage] = useState(
        course
            ? listLanguages.find(lang => lang.title === course.language)
            : listLanguages[0]);
    const [price, setPrice] = useState(course ? course.price : '');
    const [description, setDescription] = useState(course ? course.description : '');
    const createStatus = useSelector(state => state.courseReducer.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (createStatus === statuses.FETCHING) {
            dispatch(setGeneralInformation({
                title,
                caption,
                language: language.title,
                price,
                description
            }))
        }
    }, [createStatus]);
    const dispatchProvidedItems = (items) => {
        dispatch(setProvidedItems(items.map(item => item.title)));
    }
    const dispatchRequirementsItems = (items) => {
        dispatch(setRequirements(items.map(item => item.title)));
    }
    return (
        <form className={styles.form} style={{width: '100%'}}>
            <HorizontalSeparator color={'#0d8068'}>General information</HorizontalSeparator>
            <div className={styles.formInner}>
                <MainInput bgColor={'#161b22'} color={'inherit'}
                           width={'100%'}
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                >
                    Title
                </MainInput>
                <MainInput bgColor={'#161b22'} color={'inherit'}
                           width={'100%'}
                           value={caption}
                           onChange={(e) => setCaption(e.target.value)}
                >
                    Caption
                </MainInput>
                <DoubleTitleList options={listLanguages} width={'100%'}
                                 title={'Language'}
                                 setActiveOption={(language) => {setLanguage(language)}}
                                 activeOption={language}
                />
                <MainInput bgColor={'#161b22'} color={'inherit'}
                           width={'100%'}
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                >
                    Price ($)
                </MainInput>
            </div>
            <h2 className={generalStyles.formItemTitle}>What does course provide?</h2>
            <ProvidedItems getItems={dispatchProvidedItems} initItems={course?.providedItems}/>

            <h2 className={generalStyles.formItemTitle}>What does course require?</h2>
            <ProvidedItems getItems={dispatchRequirementsItems} initItems={course?.requirements}/>

            <h2 className={generalStyles.formItemTitle}>Description of a course</h2>
            <MainTextArea message={'Type here...'}
                          color={'inherit'} bgColor={'#151a1f'}
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
            />
        </form>
    );
};

export default FirstStepForm;