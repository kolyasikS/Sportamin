import React from 'react';
import styles from './styles/LoginPage.module.scss';
import FormLogin from "@/pages(notNEXT)/LoginPage/FormLogin";
const LoginPage = () => {
    return (
        <main className={styles.main}>
            <FormLogin/>
        </main>
    );
};

export default LoginPage;