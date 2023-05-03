import React from 'react';
import styles from '../styles/Content.module.scss';
import {v4} from "uuid";
const Exercise = ({muscles, title, technique}) => {
    return (
        <li className={styles.exercise}>
            <div className={styles.info}>
                <h1>{title}</h1>
                <p className={styles.technique}>{technique}</p>
            </div>
            <ul className={styles.muscles}>
                <li>
                    <h1 className={styles.musclesHeader}>Involved muscles</h1>
                </li>
                {muscles.map(muscle => {
                    return (<li key={v4()} className={styles.muscle}>
                        {muscle}
                    </li>);
                })}
            </ul>
        </li>
    );
};

export default Exercise;