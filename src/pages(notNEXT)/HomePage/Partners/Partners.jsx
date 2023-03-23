import React from 'react';
import styles from '../styles/Partners.module.scss';
import PartnersItems from "@/app/Static Data/Partners/PartnersItems";
import Image from "next/image";
const Partners = () => {
    return (
        <section className={styles.partnersSection}>
            <div className={styles.partners}>
                {PartnersItems.map(item =>
                    <Image src={item.srcImage} alt={''} key={item.id}/>
                )}
            </div>
        </section>
    );
};

export default Partners;