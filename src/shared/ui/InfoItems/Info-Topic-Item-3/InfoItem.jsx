import React from 'react';
import Image from "next/image";
import styles from './InfoItem.module.scss';

const InfoItem = ({date, title, src, width = 330}) => {
    return (
        <div className={styles.infoItem} style={{width: width}}>
            <Image src={src} alt={''} width={width}/>
            <p>{date}</p>
            <h1>{title}</h1>
        </div>
    );
};

export default InfoItem;