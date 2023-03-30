import React from 'react';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import styles from '../styles/Trainers.module.scss';
import TopTrainers from "@/app/Static Data/Trainers(temp)/TopTrainers";
import {Trainer} from "@/shared/ui/InfoItems/api/Items";
import RedToBlack from "@/shared/ui/Buttons/Red-to-black/Red-to-black";
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
const Trainers = () => {
    return (
        <section className={styles.trainersSection}>
            <div className={styles.trainers}>
                <TitleWithImage>our trainers</TitleWithImage>
                <div className={styles.trainersItems}>
                    {TopTrainers.map(item =>
                        <Trainer key={item.id} name={item.name}
                            avatar={item.src} amountCourses={item.amountCourses}
                            rating={item.rating}
                        />
                    )}
                </div>
                <RBButton width={250} height={60} uppercase={true}>View all trainers</RBButton>
            </div>
        </section>
    );
};

export default Trainers;