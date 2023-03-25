import React from 'react';
import PrivateInfo from "@/pages(notNEXT)/ContactPage/PrivateInfo";
import SendMail from "@/pages(notNEXT)/ContactPage/SendMail";
import styles from './styles/ContactPage.module.scss';
const ContactPage = () => {
    return (
        <main className={styles.main}>
            <PrivateInfo/>
            <SendMail/>
        </main>
    );
};

export default ContactPage;