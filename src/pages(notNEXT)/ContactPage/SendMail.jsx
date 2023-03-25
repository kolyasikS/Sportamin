import React from 'react';
import styles from './styles/SendMail.module.scss';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import MainTextArea from "@/shared/ui/Inputs/MainTextArea/MainTextArea";
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
const SendMail = () => {
    return (
        <div className={styles.sendMail}>
            <TitleWithImage fontSize={30}>get appointment</TitleWithImage>
            <div className={styles.sendMail__inner}>
                <MainInput width={'100%'}>Your Full Name</MainInput>
                <MainTextArea/>
                <p>*We protect your privacy</p>
                <RBButton width={150}>SEND</RBButton>
            </div>
        </div>
    );
};

export default SendMail;