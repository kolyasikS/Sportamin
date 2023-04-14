import React from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/StepForm.module.scss";
import generalStyles from './styles/general.module.scss';
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import {MainInput, MainTextArea} from "@/shared/ui/Inputs/api/Inputs";
import {DoubleTitleList} from "@/widgets/api/Widgets";
import languages from "@/app/Static Data/Languages/Languages";
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";

const FirstStepForm = () => {
    return (
        <form className={styles.form} style={{width: '100%'}}>
            <HorizontalSeparator color={'#0d8068'}>General information</HorizontalSeparator>
            <div className={styles.formInner}>
                <MainInput bgColor={'#161b22'} color={'inherit'}
                           width={'100%'}
                >
                    Title
                </MainInput>
                <MainInput bgColor={'#161b22'} color={'inherit'}
                           width={'100%'}
                >
                    Caption
                </MainInput>
                <DoubleTitleList options={languages} width={'100%'}
                                 sortPath={''} title={'Language'} setSort={() => {}}
                />
                <MainInput bgColor={'#161b22'} color={'inherit'}
                           width={'100%'}
                >
                    Price ($)
                </MainInput>
            </div>
            <h2 className={generalStyles.formItemTitle}>What does course provide?</h2>
            <ProvidedItems/>

            <h2 className={generalStyles.formItemTitle}>What does course require?</h2>
            <ProvidedItems/>

            <h2 className={generalStyles.formItemTitle}>Description of a course</h2>
            <MainTextArea message={'Type here...'} color={'inherit'} bgColor={'#151a1f'}/>
        </form>
    );
};

export default FirstStepForm;