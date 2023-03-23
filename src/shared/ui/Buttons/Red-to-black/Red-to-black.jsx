import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import {useUppercaseButton} from "@/shared/lib/api/hooks";
const RedToBlack = ({children, onclick, width, height, uppercase}) => {
    const style = useUppercaseButton(uppercase, {
        width,
        height
    });
    return (
        <button className={styles.redToBlackBtn} onClick={onclick}
                style={style}>
            {children}
        </button>
    );
};

export default RedToBlack;