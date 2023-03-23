import React from 'react';
import Image from "next/image";
import styles from '../Avatar/Avatar.module.scss';
const Avatar = ({src, onClick}) => {
    return (
        <Image src={src} alt={''} className={styles.avatar} onClick={onClick}/>
    );
};

export default Avatar;