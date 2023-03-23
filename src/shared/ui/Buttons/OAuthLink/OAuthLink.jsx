import React, {useEffect, useState} from 'react';
import styles from './OAuthLink.module.scss';
import Link from "next/link";
import {useUppercaseButton} from "@/shared/lib/api/hooks";
import Image from "next/image";
const OAuthLink = ({children, onClick, logo}) => {
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