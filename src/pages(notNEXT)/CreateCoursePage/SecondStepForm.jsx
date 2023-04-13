import React, {useState} from 'react';
import {MainInput, MainTextArea} from "@/shared/ui/Inputs/api/Inputs";
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/StepForm.module.scss";
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import {DoubleTitleList} from "@/widgets/api/Widgets";
import languages from "@/app/Static Data/Languages/Languages";
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";
import {v4} from "uuid";
import Week from "@/pages(notNEXT)/CreateCoursePage/Content/Week";

const SecondStepForm = () => {
    const [weeks, setWeeks] = useState([{id: v4(), number: 1}]);
    return (
        <form className={styles.form}>
            <HorizontalSeparator color={'#0d8068'}>Content</HorizontalSeparator>
            {weeks.map(item =>
                <Week {...item} key={item.id}/>
            )}


        </form>
    );
};

export default SecondStepForm;