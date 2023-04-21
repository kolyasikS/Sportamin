import React from 'react';
import styles from "./DarkBtnWithImg.module.scss";
import Image from "next/image";

const DarkBtnWithImg = ({width, height, img, children, onClick}) => {
    return (
        <button className={styles.filterBtn} onClick={onClick}>
            <Image src={img} alt={''} width={width} height={height}/>
            <p>{children}</p>
        </button>
    );
};

export default DarkBtnWithImg;