import React from 'react';
import styles from '../styles/AboutUs.module.scss';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import {Benefits} from "@/widgets/api/Widgets";
const AboutUs = () => {
    return (
        <section className={styles.aboutUsSection}>
            <div className={styles.aboutUs}>
                <div className={styles.aboutUsText}>
                    <TitleWithImage>About us</TitleWithImage>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt.
                    </p>
                </div>
                <Benefits/>
            </div>
        </section>
    );
};

export default AboutUs;