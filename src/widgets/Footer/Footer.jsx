import React from 'react';
import styles from './Footer.module.scss';
import {MainLogo} from "@/shared/ui/Logos/api/Logos";
import Image from "next/image";
import Blogs from "@/app/Static Data/Blogs/Blogs";
import gps from '@assets/gps.png';
import phone from '@assets/phone.png';
import mail from '@assets/mail.png';
import bg from '@assets/footerBg.png';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import {TextList} from "@/widgets/api/Widgets";
import muhamed from '@assets/muhamed.jpg';
import {SocNetsLinks} from "@/shared/ui/Links/api/Links";
const Footer = () => {
    return (
        <footer className={styles.footer} style={{backgroundImage: `url(${bg.src})`}}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__innerItem}>
                    <MainLogo/>
                    <p>Sportamin is for build and fitness body
                        sed do eiusmod, adipisicing elit
                    </p>
                    <div className={styles.footer__listItem}>
                        <Image src={gps} alt={''} width={20}/>
                        <p>Lincoln Park Chicago, Illinois</p>
                    </div>
                    <div className={styles.footer__listItem}>
                        <Image src={phone} alt={''} width={20}/>
                        <p>(510) 710-3464 (510) 640-6326</p>
                    </div>
                    <div className={styles.footer__listItem}>
                        <Image src={mail} alt={''} width={20}/>
                        <div>
                            <p>hello@templatesjungle.com</p>
                            <p>info@templatesjungle.com</p>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__innerItem}>
                    <TitleWithImage image={false}
                                    color={'#D4000D'}
                                    fontSize={26}
                    >
                        Recent blog posts
                    </TitleWithImage>
                    {Blogs.slice(0, 3).map(item =>
                        <TextList key={item.id} date={item.date}
                                  title={item.title}
                        />
                    )}
                </div>
                <div className={styles.footer__innerItem}>
                    <div className={styles.quoteAuthor}>
                        <Image src={muhamed} alt={''}/>
                        <div>
                            <h2>Muhammad Ali</h2>
                            <p>One of the greatest heavyweight boxer of all time</p>
                        </div>
                    </div>
                    <p className={styles.quote}>Чемпионами становятся не в тренажёрных
                        Чемпиона рождает то, что у человека внутри — желания, мечты, цели.
                    </p>
                </div>
            </div>
            <div className={styles.footer__caption}>
                <p>© Copyright 2022 <span>Sport</span>amin</p>
                <div className={styles.footer__links}>
                    <nav>
                        <li>
                            <a href="#">API</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </nav>
                    <SocNetsLinks twitter={'#'} discord={'#'}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;