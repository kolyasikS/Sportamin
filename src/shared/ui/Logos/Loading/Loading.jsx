import React from 'react';
import styles from './Loading.module.scss';
const Loading = ({width, height}) => {
    return (
        <div className={styles.loading} style={{width: width, height: height}}>
            <div className={styles.arc}></div>
            <div className={styles.arc}></div>
            <div className={styles.arc}></div>
        </div>
    );
};

export default Loading;