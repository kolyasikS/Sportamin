import React, {useRef} from 'react';
import styles from './styles/SendMail.module.scss';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import {MainInput, MainTextArea} from "@/shared/ui/Inputs/api/Inputs";
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
import sendEmail from "@/app/lib/features/sendEmail/sendEmail";

const SendMail = () => {
    const nameRef = useRef();
    const messageRef = useRef();

    const sendEmail = async (name, message) => {
        const result = await fetch('api/email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, message}),
        }).then(res => res);
        if (!result) {
            console.log('Some error on email...');
        } else {
            nameRef.current.value = '';
            messageRef.current.value = '';
        }
    }

    return (
        <div className={styles.sendMail}>
            <TitleWithImage fontSize={30}>Your feedback</TitleWithImage>
            <div className={styles.sendMail__inner}>
                <MainInput width={'100%'} ref={nameRef}>Your Full Name</MainInput>
                <MainTextArea ref={messageRef}/>
                <p>*We protect your privacy</p>
                <RBButton width={150} onclick={() => sendEmail(nameRef.current.value, messageRef.current.value)}>SEND</RBButton>
            </div>
        </div>
    );
};

export default SendMail;