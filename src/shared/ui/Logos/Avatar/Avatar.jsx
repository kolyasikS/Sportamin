import React from 'react';
import Image from "next/image";
import styles from '../Avatar/Avatar.module.scss';
const Avatar = ({src, onClick}) => {
    return (
        <Image src={`data:image/jpg;base64,${src}`} alt={''}
               className={styles.avatar}
               onClick={onClick}
               width={30}
               height={30}/>
    );
};

export default Avatar;