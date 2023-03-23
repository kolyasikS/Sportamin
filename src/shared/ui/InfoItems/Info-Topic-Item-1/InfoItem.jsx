import React from 'react';
import Image from "next/image";
import styles from './InfoItem.module.scss';
const InfoItem = ({description, title, src, amount}) => {
    return (
        <div className={styles.infoItem} style={{width:  `${100 / amount}%`}}>
            <Image src={src} alt={''} width={80} height={80}/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default InfoItem;