import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import useUppercaseButton from "@/app/lib/features/hooks/useUppercaseButton";
const AnimBorderTranspBg = ({children, onclick,
                                width = 180,
                                height = 50, uppercase}) => {
    const style = useUppercaseButton(uppercase, {
        width,
        height
    });

    return (
        <button className={styles.animBorderTranspBg} onClick={onclick}
                style={style}>
            {children}
            <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
            </svg>
        </button>
    );
};

export default AnimBorderTranspBg;