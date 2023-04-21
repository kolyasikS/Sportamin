import React, {useState} from 'react';
import useDynamicInput from "@/app/lib/features/hooks/useDynamicInput";
import {v4} from "uuid";
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/NewProvideItem.module.scss";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
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