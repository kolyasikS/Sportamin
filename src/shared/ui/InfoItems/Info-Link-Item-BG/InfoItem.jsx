import React from 'react';
import Image from "next/image";
import styles from './InfoItem.module.scss';
import {urlParser} from "next/dist/build/webpack/loaders/css-loader/src/plugins";
import {AnimBorderTranspBgButton} from "@/shared/ui/Buttons/api/Buttons";
import arrow from '../../../../../public/media/images/arrow-right.png';
const InfoItem = ({description, title, src, link}) => {
    return (
        <div className={`${styles.infoItem}`}
             style={{backgroundImage: `url(${src.src})`}}>
            <div className={styles.infoItem__inner}>
                <h1>{title}</h1>
                <p>{description}</p>
                <AnimBorderTranspBgButton>
                    <a className={styles.link} href={link}>Read more
                        <Image src={arrow} alt={''} width={15} height={15}/>
                    </a>
                </AnimBorderTranspBgButton>
            </div>
        </div>
    );
};

export default InfoItem;