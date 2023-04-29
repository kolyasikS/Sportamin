import React, {useState} from 'react';
import styles from './Page.module.scss';

const Page = ({num, isActive, setActive, value}) => {
    return (
        <li className={`${styles.page} ${isActive && styles.isActive}`}
            onClick={() => setActive(value)}>
            <span className={styles.number}>{num}</span>
        </li>
    );
};

export default Page;