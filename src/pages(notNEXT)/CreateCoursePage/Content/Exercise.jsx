import React, {useState} from 'react';
import styles from '../styles/Exercise.module.scss';
import useDynamicInput from "@/app/lib/features/hooks/useDynamicInput";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import Image from "next/image";
import apply from "@assets/apply.png";
import editImg from "@assets/editItem.png";
import cancel from "@assets/cancel.png";
const Exercise = ({number, title, remove, edit}) => {
    return (
        <div className={styles.exercise}>
            <div className={styles.info}>
                    <span className={styles.number}>{number}.</span>
                    <p className={styles.title}>{title}</p>
            </div>
            <div className={styles.features}>
                <Image src={editImg} alt={''} width={30}
                         onClick={edit}
                />
                <Image className={styles.cancel} src={cancel}
                       alt={''} width={30} onClick={remove}/>
            </div>
        </div>
    );
};

export default Exercise;