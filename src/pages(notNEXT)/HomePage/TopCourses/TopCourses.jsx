import React from 'react';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import styles from '../styles/TopCourses.module.scss';
import SearchedCourse from "@/shared/ui/SearchItems/SearchedCourse/SearchedCourse";

const TopCourses = ({courses}) => {
    return (
        <section className={styles.topCoursesSection}>
            <div className={styles.topCourses}>
                <TitleWithImage color={'#fff'}>Top courses</TitleWithImage>
                <div className={styles.topCoursesItems}>
                    {courses.map(item =>
                        <SearchedCourse key={item._id} {...item}/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TopCourses;