import React from 'react';
import Image from "next/image";
import styles from './InfoItem.module.scss';

const InfoItem = ({number, title, src}) => {
    return (
        <div className={styles.infoItem}>
            <div className={styles.infoItem__number}>
                <span>{number}</span>
            </div>
            <Image src={src} alt={''} width={35}/>
            <h1>{title}</h1>
        </div>
    );
};

export default InfoItem;