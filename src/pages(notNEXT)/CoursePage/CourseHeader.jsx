import React from 'react';
import styles from './styles/CourseHeader.module.scss';
import RatingBar from "@/shared/ui/Rating/RatingBar/RatingBar";
import Image from "next/image";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import Link from "next/link";
import world from '@assets/world.png';
import PurchaseAdv from "@/pages(notNEXT)/CoursePage/PurchaseAdv";
import {useSelector} from "react-redux";
import Purchase from "@/pages(notNEXT)/CoursePage/Purchase";

const CourseHeader = ({title, subtitle, price,
                          rating, students, trainer,
                          language, id,
                          isLoading, courseStatus}) => {
    return (
        <section className={styles.header}>
            <div className={styles.headerInfo}>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={styles.subtitle}>{subtitle}</h2>
                <div className={styles.infoSocial}>
                    <span className={styles.rating}>{rating.avgValue.toFixed(1)}</span>
                    <RatingBar rating={rating.avgValue} isDark={true} fillColor={'#eef1f6'}/>
                    <span className={styles.students}>{students}</span>
                    <p>students</p>
                </div>
                <p>Created by <Link href={`/trainers/${trainer._id}`} className={styles.trainer}>{trainer?.name} {trainer?.surname}</Link></p>
                <div className={styles.generalInfo}>
                    <Image src={world} alt={''} width={15}/>
                    <span>{language}</span>
                </div>
            </div>
            {isLoading
                ? null
                : courseStatus
                    ? <Purchase courseId={id} rating={rating}
                                isRated={courseStatus.isRated}
                                isDone={courseStatus.isDone}
                    />
                    : <PurchaseAdv price={price} courseId={id}/>
            }
        </section>
    );
};

export default CourseHeader;