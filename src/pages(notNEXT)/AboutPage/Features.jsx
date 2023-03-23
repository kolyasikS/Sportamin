import React from 'react';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import {Benefits} from "@/widgets/api/Widgets";
import styles from './styles/Features.module.scss';
const Features = () => {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.featuresSection__inner}>
                <p>We are consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt.
                </p>
                <TitleWithImage>Why to choose us</TitleWithImage>
                <Benefits/>
            </div>
        </section>
    );
};

export default Features;