import React from 'react';
import styles from './styles/CourseInner.module.scss';
import CourseContent from "@/pages(notNEXT)/CoursePage/Content/CourseContent";
import {SearchedTrainer} from "@/shared/ui/SearchItems/api/searchedItems";
import {getImageFromBase64} from "@/app/lib/features/image";

const CourseInner = ({providedItems, requirements,
                         description, content, trainer}) => {
    console.log(trainer);
    return (
        <section className={styles.courseInner}>
            <div className={styles.container}>
                <h2 className={styles.title}>This course includes:</h2>
                <ul className={styles.providedItemsList}>
                    {providedItems.map((item, id) =>
                    <li key={id} className={styles.providedItem}>
                        {item}
                    </li>)}
                </ul>
                <h2 className={styles.title}>Requirements</h2>
                <ul className={styles.providedItemsList}>
                    {requirements.map((item, id) =>
                    <li key={id} className={styles.providedItem}>
                        {item}
                    </li>)}
                </ul>
                <h2 className={styles.title}>Course content</h2>
                <CourseContent content={content}/>
                <h2 className={styles.title}>Description</h2>
                <p className={styles.description}>{description}</p>
                <h2 className={`${styles.title} mt-10 mb-3`}>Trainer</h2>
                <SearchedTrainer {...trainer} src={getImageFromBase64(trainer.avatar.data)}/>
            </div>
        </section>
    );
};

export default CourseInner;