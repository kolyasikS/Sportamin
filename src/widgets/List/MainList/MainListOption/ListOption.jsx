import React from 'react';
import styles from './ListOption.module.scss';
const ListOption = ({title, onClick}) => {
    return (
        <div className={styles.option} onClick={onClick}>
            <p>{title}</p>
        </div>
    );
};

export default ListOption;