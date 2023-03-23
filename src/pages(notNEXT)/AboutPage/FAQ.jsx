import React from 'react';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import QuestionsList from "@/widgets/List/QuestionsList/QuestionsList";
import FAQs from "@/app/Static Data/FAQ/FAQ";
import Image from "next/image";
import assistant from '@assets/assistant.png';
import styles from './styles/FAQ.module.scss';
const Faq = () => {

    return (
        <section className={styles.FAQSection}>
            <div className={styles.FAQ__inner}>
                <div className={styles.FAQ__image}>
                    <Image src={assistant} alt={''} height={600}/>
                </div>
                <div className={styles.FAQ__Questions}>
                    <TitleWithImage>Frequently asked questions</TitleWithImage>
                    <QuestionsList questions={FAQs}/>
                </div>
            </div>
        </section>
    );
};

export default Faq;