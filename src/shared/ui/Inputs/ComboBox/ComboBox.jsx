import React, {useState} from 'react';
import styles from './ComboBox.module.scss';
const ComboBox = ({id, children, isActive, toggleActive}) => {
    return (
        <span className={styles.span} onClick={(e) => {
            e.preventDefault();
            toggleActive(id);
        }}>
            <input type="checkbox" id={id} name="check" className={styles.input}/>
            <label htmlFor={id} className={`${styles.label} ${isActive ? styles.active : ''}`}>{children}</label>
        </span>
    );
};

export default ComboBox;