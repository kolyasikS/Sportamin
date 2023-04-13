import React from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/Day.module.scss";
import generalStyles from '../styles/general.module.scss';
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";

const Day = ({number}) => {
    return (
        <div className={styles.day}>
            <h2 className={generalStyles.formItemTitle}>
                Day <span>{number}</span>
            </h2>
            <ProvidedItems/>
        </div>
    );
};

export default Day;