import React from 'react';
import styles from './style.module.scss';
import useUppercaseButton from "@/app/lib/features/hooks/useUppercaseButton";
const GreenToBlack = ({children, onclick, width, height, uppercase}) => {
    const style = useUppercaseButton(uppercase, {
        width,
        height
    });
    return (
        <button className={styles.greenToBlackBtn} onClick={onclick}
                style={style}>
            {children}
        </button>
    );
};

export default GreenToBlack;