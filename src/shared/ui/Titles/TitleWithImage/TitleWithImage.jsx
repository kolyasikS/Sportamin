import React from 'react';
import Image from "next/image";
import styles from './TitleWithImage.module.scss';
import dumbbell from "../../../../../public/media/images/dumbbell.png";

const TitleWithImage = ({children, color, fontSize, image = true}) => {
    return (
        <div className={styles.title}>
            <h1 style={{color: color, fontSize: fontSize}}>{children}</h1>
            {image
                ? <Image src={dumbbell} alt={''} width={50}/>
                : null
            }
        </div>
    );
};

export default TitleWithImage;