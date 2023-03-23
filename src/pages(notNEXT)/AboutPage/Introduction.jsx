import React from 'react';
import styles from './styles/Introduction.module.scss';
import Image from "next/image";
import bg from '../../../public/media/images/blogbanner.jpg';
const Introduction = () => {
    return (
        <section className={styles.introductionSection}>
            <Image src={bg} alt={''}>
            </Image>
            <h1>About <span>us</span></h1>
        </section>
    );
};

export default Introduction;