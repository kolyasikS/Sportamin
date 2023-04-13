import React from 'react';
import styles from "./DarkBtnWithImg.module.scss";
import Image from "next/image";

const DarkBtnWithImg = ({widthImg, heightImg,
                            img, children,
                            onClick, width, height}) => {
    return (
        <button className={styles.filterBtn} onClick={onClick}
                style={{width, height}}
        >
            {img && <Image src={img} alt={''} width={widthImg} height={heightImg}/>}
            <p>{children}</p>
        </button>
    );
};

export default DarkBtnWithImg;