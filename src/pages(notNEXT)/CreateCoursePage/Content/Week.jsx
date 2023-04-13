import React, {useState} from 'react';
import styles from '../styles/Week.module.scss';
import generalStyles from '../styles/general.module.scss';
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";
import {v4} from "uuid";
import Day from "@/pages(notNEXT)/CreateCoursePage/Content/Day";

const Week = ({number}) => {
    const [days, setDays] = useState([{id: v4(), number: 1}]);

    return (
        <div>
            <h2 className={generalStyles.formItemTitle}>
                Week <span>{number}</span>
            </h2>
            {days.map(item =>
                <Day {...item} key={item.id}/>
            )}
            <ProvidedItems/>
        </div>
    );
};

export default Week;