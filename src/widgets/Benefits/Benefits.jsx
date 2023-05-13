import React from 'react';
import styles from "./Benefits.module.scss";
import AboutUsInfoItems from "@/app/Static Data/AboutUs/AboutUsInfoItems";
import {InfoTopicItem1} from "@/shared/ui/InfoItems/api/Items";

const Benefits = () => {
    return (
        <div className={styles.benefits}>
            {AboutUsInfoItems.map(item =>
                <InfoTopicItem1 key={item.id}
                                description={item.description}
                                title={item.title}
                                src={item.src}
                />
            )}
        </div>
    );
};

export default Benefits;