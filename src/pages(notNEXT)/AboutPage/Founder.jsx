import React from 'react';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import {SocNetsLinks} from "@/shared/ui/Links/api/Links";
import styles from './styles/Founder.module.scss';
import Image from "next/image";
import founder from 'public/media/images/founder.jpg';
const Founder = () => {
    return (
        <section className={styles.founderSection}>
            <div className={styles.founderInfo}>
                <TitleWithImage color={'#fff'}>Meet our Founder</TitleWithImage>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1 className={styles.founderName}>Mykola Primachenko</h1>
                <div className={styles.links}>
                    <SocNetsLinks twitter={'#'} discord={'#'}/>
                </div>
            </div>
            <div className={styles.founderImg}>
                <Image src={founder} alt={''} width={500}/>
            </div>
        </section>
    );
};

export default Founder;