import React, {useEffect, useState} from 'react';
import styles from './OAuthLink.module.scss';
import Link from "next/link";
import useUppercaseButton from "@/app/lib/features/hooks/useUppercaseButton";
import Image from "next/image";
const OAuthLink = ({children, onClick, logo}) => {
    const helloFetch = async () => {
        await fetch('http://localhost:3000/api/hello', {
            method: 'GET'
        })
    }
    return (
        <button className={styles.OAuthBtn} onClick={onClick}>
            <Link href={'#'} className={styles.OAuthLink}>
                <Image src={logo} alt={''} width={20}/>
                {children}
            </Link>
        </button>
    );
};

export default OAuthLink;