import React, {useState} from 'react';
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

const SecondStepForm = () => {
    const [weeks, setWeeks] = useState([{id: v4(), number: 1}]);
    const addWeek = () => {
        setWeeks(prev => [...prev, {id: v4(), number: weeks.length + 1}]);
    }
    return (
        <form className={styles.form}>
            <HorizontalSeparator color={'#0d8068'}>Content</HorizontalSeparator>
            {weeks.map(item =>
                <Week {...item} key={item.id}/>
            )}
            <NewItem title={'week'} setItems={addWeek}/>
        </form>
    );
};

export default SecondStepForm;