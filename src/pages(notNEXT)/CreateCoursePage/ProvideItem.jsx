import React, {useState} from 'react';
import styles from "@/pages(notNEXT)/CreateCoursePage/styles/ProvideItem.module.scss";
import Image from "next/image";
import cancel from '@assets/cancel.png';
import edit from '@assets/editItem.png';
import apply from '@assets/apply.png';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import useDynamicInput from "@/app/lib/features/hooks/useDynamicInput";
const ProvideItem = ({title, number, removeItem, editItems}) => {
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useDynamicInput(isEditing, title);
    const editItem = () => {
        setIsEditing(true);
    }
    const applyChanges = () => {
        setIsEditing(false);
        if (!inputRef.current.value) {
            removeItem();
            return;
        }
        editItems(inputRef.current.value);
    }
    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <span className={styles.number}>{number}.</span>
                {isEditing
                    ? <MainInput color={'inherit'} height={35}
                                 ref={inputRef} width={'100%'}
                                 paddingY={'0px'}
                    />
                    : <p className={styles.title}>{title}</p>
                }
            </div>
            <div className={styles.features}>
                {isEditing
                ? <Image src={apply} alt={''} width={30}
                                         onClick={applyChanges}
                    />
                : <Image src={edit} alt={''} width={30}
                                         onClick={editItem}
                    />
                }
                <Image className={styles.cancel} src={cancel}
                       alt={''} width={30} onClick={removeItem}/>
            </div>
        </div>
    );
};

export default ProvideItem;