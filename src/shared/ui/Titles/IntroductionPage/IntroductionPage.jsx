import React from 'react';
import styles from "./IntroductionPage.module.scss";
import Image from "next/image";

const IntroductionPage = ({bg, title, titleSpan, height}) => {
    return (
        <section className={styles.introductionSection}>
            <Image src={bg} alt={''} height={height}>
            </Image>
            <h1>{title} <span>{titleSpan}</span></h1>
        </section>
    );
};

export default IntroductionPage;