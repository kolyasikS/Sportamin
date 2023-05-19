import React from 'react';
import CategoryItems from "@/app/Static Data/Category/Categories";
import {InfoLinkItemBg} from "@/shared/ui/InfoItems/api/Items";
import styles from '../styles/Categories.module.scss';

const Categories = () => {

    return (
        <section className={styles.categoriesSection}>
            <div className={styles.categories}>
                <div className={styles.categoriesBlock}>
                    {CategoryItems.map(item =>
                        <InfoLinkItemBg key={item.id}
                        title={item.title} description={item.description}
                        link={item.link} src={item.srcImage}/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Categories;