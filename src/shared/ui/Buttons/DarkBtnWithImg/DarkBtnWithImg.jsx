import React from 'react';
import styles from "./DarkBtnWithImg.module.scss";
import Image from "next/image";

const DarkBtnWithImg = ({width, height, img, children}) => {
    return (
        <button className={styles.filterBtn}>
            <Image src={img} alt={''} width={width} height={height}/>
            <p>{children}</p>
        </button>
    );
};

export default DarkBtnWithImg;