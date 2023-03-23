import React from 'react';
import Image from "next/image";
import Logo from "../../../../../public/media/images/logoInvers.png";
import styles from './MainLogoInversion.module.scss';
import Link from "next/link";
const MainLogoInversion = () => {
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

export default MainLogoInversion;