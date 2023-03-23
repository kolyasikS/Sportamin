import React from 'react';
import styles from './TextListOption.module.scss';
const TextListOption = ({title, date}) => {
    return (
        <div className={styles.option}>
            <h1><a href="src/widgets/List/TextListOptions">{title}</a></h1>
            <p>{date}</p>
        </div>
    );
};

export default TextListOption;