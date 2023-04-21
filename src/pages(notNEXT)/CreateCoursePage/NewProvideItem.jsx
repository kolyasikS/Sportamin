import React, {useEffect, useRef, useState} from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/NewProvideItem.module.scss";
import Image from "next/image";
import addItem from '@assets/add.png';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {v4} from "uuid";
import useDynamicInput from "@/app/lib/features/hooks/useDynamicInput";

const NewProvideItem = ({number, setItems, title, indent}) => {
    const [isCreating, setIsCreating] = useState(false);
    const inputRef = useDynamicInput(isCreating);
    const createItem = () => {
        setIsCreating(true);
    }
    const addToItems = () => {
        if (inputRef.current.value) {
            setItems(prev => [...prev, {id: v4(), title: inputRef.current.value}]);
        }
        setIsCreating(false);
    }
    return (
        <div className={`${styles.newItem} ${isCreating ? '' : styles.isNotCreating}`}
             onClick={createItem}
             style={{transform: `translateX(${indent}px)`}}
        >
            {isCreating
                ? <>
                    <span className={styles.number}>{number}.</span>
                    <MainInput color={'inherit'} width={'100%'}
                               onBlur={addToItems} ref={inputRef}
                    />
                </>
                : <>
                    <Image src={addItem} alt={''} width={20}/>
                    <p>New {title ? title : 'item'}</p>
                </>
            }
        </div>
    );
};

export default NewProvideItem;