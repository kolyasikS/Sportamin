import React from 'react';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import styles from './styles/PrivateInfo.module.scss';
import Image from "next/image";
import email from '@assets/contactEmail.png';
import phone from '@assets/contactPhone.png';
import location from '@assets/contactLocation.png';
import tgBot from '@assets/tgBot.png';
const PrivateInfo = () => {
    return (
        <div className={styles.privateInfo}>
            <TitleWithImage fontSize={30}>Get in touch</TitleWithImage>
            <div className={styles.privateInfo__inner}>
                <p>We are always ready to help you with answers to your questions.
                    To contact us, please use the following contacts.
                </p>
                <div className={styles.privateInfo__contact}>
                    <Image src={phone} alt={''} width={25}/>
                    <div className={styles.privateInfo__item}>
                        <p>+380-68-181-4410</p>
                        <p>+380-68-141-2210</p>
                    </div>
                </div>
                <div className={styles.privateInfo__contact}>
                    <Image src={email} alt={''} width={25}/>
                    <div className={styles.privateInfo__item}>
                        <p>sportamin@gmail.com</p>
                        <p>sportaminInfo@gmail.com</p>
                    </div>
                </div>
                <div className={styles.privateInfo__contact}>
                    <Image src={location} alt={''} width={25}/>
                    <div className={styles.privateInfo__item}>
                        <p>Kiev VIC 3051, Ukraine</p>
                        <p>Kiev VIC 3051, Ukraine</p>
                    </div>
                </div>
                <div className={styles.tgBot}>
                    <a href="https://t.me/sportaminBot">
                        <Image src={tgBot} alt={''} width={40}/>
                        <span className={'shadow-md'}>Our telegram bot</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PrivateInfo;