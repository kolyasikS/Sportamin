import React from 'react';
import styles from './styles/SignUpPage.module.scss';
import FormSignUp from "@/pages(notNEXT)/SignUpPage/FormSignUp";
const SignUpPage = () => {
    return (
        <main className={styles.main}>
            <FormSignUp/>
        </main>
    );
};

export default SignUpPage;