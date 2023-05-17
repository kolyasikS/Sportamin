import React from 'react';
import styles from './RadioBox.module.scss';
const RadioBox = ({id, children, isActive, setActive}) => {
    return (
        <label className={styles.label} htmlFor={id} onClick={(e) => {
            e.preventDefault();
            setActive(id);
        }}>
            <input name="ratings" readOnly="" className={styles.input}
                   id={id} type="radio"/>
            <span className={`${styles.radioBtn} ${isActive ? styles.active : ''}`}></span>
            {children}
        </label>
    );
};

export default RadioBox;