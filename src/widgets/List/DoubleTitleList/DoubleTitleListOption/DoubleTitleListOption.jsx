import React from 'react';
import styles from './DoubleTitleListOption.module.scss';
const DoubleTitleListOption = ({title, onClick}) => {
    return (
        <li className={styles.listItem} onClick={onClick}>
            <h1 className={styles.title}>{title}</h1>
        </li>
    );
};

export default DoubleTitleListOption;