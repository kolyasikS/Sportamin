import React from 'react';
import styles from './styles/CourseHeader.module.scss';
import RatingBar from "@/shared/ui/Rating/RatingBar/RatingBar";
import Image from "next/image";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import Link from "next/link";
import world from '@assets/world.png';

const CourseHeader = ({title, subtitle, price,
                          rating, students, trainer,
                          language}) => {
    return (
        <section className={styles.header}>
            <div className={styles.headerInfo}>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={styles.subtitle}>{subtitle}</h2>
                <div className={styles.infoSocial}>
                    <span className={styles.rating}>{rating}</span>
                    <RatingBar rating={0} isDark={true} fillColor={'#eef1f6'}/>
                    <span className={styles.students}>{students}</span>
                    <p>students</p>
                </div>
                <p>Created by <Link href={`/trainers/${trainer._id}`} className={styles.trainer}>{trainer?.name} {trainer?.surname}</Link></p>
                <div className={styles.generalInfo}>
                    <Image src={world} alt={''} width={15}/>
                    <span>{language}</span>
                </div>
            </div>
            <div className={`${styles.headerPurchase} shadow-gray-600 shadow-lg`}>
                <div className={styles.headerPurchaseInfo}>
                    <span className={styles.price}>${price}</span>
                    <p>Full Lifetime Access</p>
                </div>
                <DarkBtnWithImg height={50} width={'100%'}>Buy this course</DarkBtnWithImg>
            </div>
        </section>
    );
};

export default CourseHeader;