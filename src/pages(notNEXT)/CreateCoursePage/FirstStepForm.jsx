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
const FirstStepForm = () => {
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [language, setLanguage] = useState(listLanguages[0]);
    const [price, setPrice] = useState('');

    const createStatus = useSelector(state => state.courseReducer.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (createStatus === statuses.FETCHING) {
            dispatch(setGeneralInformation({
                title,
                caption,
                language: language.title,
                price
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
            <ProvidedItems getItems={dispatchProvidedItems}/>

            <h2 className={generalStyles.formItemTitle}>What does course require?</h2>
            <ProvidedItems getItems={dispatchRequirementsItems}/>

            <h2 className={generalStyles.formItemTitle}>Description of a course</h2>
            <MainTextArea message={'Type here...'} color={'inherit'} bgColor={'#151a1f'}/>
        </form>
    );
};

export default FirstStepForm;