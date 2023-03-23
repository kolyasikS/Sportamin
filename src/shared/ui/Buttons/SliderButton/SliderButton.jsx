import React from 'react';
import Image from "next/image";
import styles from './style.module.scss';
const SliderButton = ({src, onClick, ariaLabel}) => {
    return (
        <button aria-label={ariaLabel} className={styles.sliderBtn} onClick={onClick}>
            <Image src={src} alt={''} width={15} height={15}></Image>
        </button>
    );
};

export default SliderButton;