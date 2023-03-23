import React from 'react';
import Image from "next/image";
import Logo from "../../../../../public/media/images/logo.png";
import styles from './MainLogo.module.scss';
import Link from "next/link";
const MainLogo = () => {
    return (
        <div className={styles.logo}>
            <Link className={styles.logo__inner} href={'/'}>
                <Image src={Logo} alt={''}
                       height={25}/>
                <h3><span>Sport</span>amin</h3>
            </Link>
        </div>
    );
};

export default MainLogo;