import React from 'react';
import styles from './styles/HorizontalSeparator.module.scss';
const HorizontalSeparator = ({children, color}) => {
    return (
        <span className={styles.separator}>
            <span className={styles.separatorHorizontalLine}></span>
            <span className={styles.separatorText}
                  style={{color}}
            >{children}</span>
            <span className={styles.separatorHorizontalLine}></span>
        </span>
    );
};

export default HorizontalSeparator;