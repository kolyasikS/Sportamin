import React from 'react';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import styles from '../styles/TopCourses.module.scss';
import TopCoursesItems from "@/app/Static Data/TopCourses(temp)/TopCoursesItems";
import {Course} from "@/shared/ui/InfoItems/api/Items";
const TopCourses = () => {
    return (
        <section className={styles.topCoursesSection}>
            <div className={styles.topCourses}>
                <TitleWithImage color={'#fff'}>Top courses</TitleWithImage>
                <div className={styles.topCoursesItems}>
                    {TopCoursesItems.map(item =>
                        <Course key={item.id} facilities={item.facilities}
                            title={item.title} price={item.price}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default TopCourses;