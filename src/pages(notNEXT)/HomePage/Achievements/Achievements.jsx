import React from 'react';
import styles from '../styles/Achievements.module.scss';
import AchievementsItems from '../../../app/Static Data/Achievements/Achievements';
import {InfoTopicItem2} from "@/shared/ui/InfoItems/api/Items";
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
const Achievements = () => {
    return (
        <section className={styles.achievementsSection}>
            <div className={styles.achievements}>
                <TitleWithImage>Our achievements</TitleWithImage>
                <div className={styles.achievementsItems}>
                    {AchievementsItems.map(item =>
                        <InfoTopicItem2
                        key={item.id} number={item.number}
                        src={item.srcImage} title={item.title}/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Achievements;