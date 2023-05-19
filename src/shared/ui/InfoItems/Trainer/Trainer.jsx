import React from 'react';
import Image from "next/image";
import styles from './Trainer.module.scss';

const Trainer = ({name, amountCourses, avatar, rating}) => {
    return (
        <div className={styles.user}>
            <Image src={avatar} alt={''} width={250} height={250}/>
            <h1 className={styles.name}>{name}</h1>
            <h3 className={styles.courses}>Has <span>{amountCourses}</span> courses</h3>
            <h3 className={styles.rating}>Average rating &mdash; <span>{rating}</span>/10</h3>
        </div>
    );
};

export default Trainer;