import React from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/NewProvideItem.module.scss";
import Image from "next/image";
import addItem from "@assets/add.png";

const NewItem = ({setItems, title}) => {
    return (
        <div className={`${styles.newItem} ${styles.isNotCreating}`}
             onClick={setItems}
        >
            <Image src={addItem} alt={''} width={20}/>
            <p>New {title ? title : 'item'}</p>
        </div>
    );
};

export default NewItem;