import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import useUppercaseButton from "@/app/lib/features/hooks/useUppercaseButton";
const AnimBorderTranspBg = ({children, onclick, border='#fff',
                                width = 180, color, padding=20,
                                height = 50, uppercase=true}) => {
    const style = useUppercaseButton(uppercase, {
        width,
        height
    });

    return (
        <button className={styles.animBorderTranspBg} onClick={onclick}
                style={{...style, color, paddingLeft: padding, paddingRight: padding}}>
            {children}
            <svg>
                <rect x="0" y="0" fill="none" stroke={border} width="100%" height="100%"></rect>
            </svg>
        </button>
    );
};

export default AnimBorderTranspBg;