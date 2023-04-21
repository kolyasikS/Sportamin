import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './SearchedCourse.module.scss';
import star from '@assets/star.png';
import people from '@assets/people.png';
import courses from '@assets/videoPlay.png';
import {getTrainers} from "@/app/lib/controllers/userController";
import RatingBar from "@/shared/ui/Rating/RatingBar/RatingBar";

const SearchedCourse = ({title, subtitle, _id,
                            trainer, trainerID, previewImage,
                        rating, price, content, language}) => {
    const [countExercises, setCountExercises] = useState(0);
    useEffect(() => {
        let exercises = [];
        content.forEach(week => {
            week.days.forEach(day => {
                day.exercises.forEach(exer => {
                    if (!exercises.includes(exer.title)) {
                        exercises.push(exer.title);
                    }
                })
            });
        });
        setCountExercises(exercises.length);
    }, [])
    return (
        <li className={styles.listItem}>
            <Link href={`courses/${_id}`}>
                <div className={styles.preview}>
                    <Image src={`data:image/jpg;base64,${previewImage}`}
                           alt={''} width={190} height={150}/>
                </div>
                <div className={styles.information}>
                    <div className={styles.generalInfo}>
                        <h1 className={styles.title}>
                            {title}
                        </h1>
                        <h2 className={styles.subtitle}>
                            {subtitle}
                        </h2>
                        <h3 className={styles.trainer}>{trainer?.name} {trainer?.surname}</h3>
                        <div className={styles.rating}>
                            <span>{Math.trunc(rating) === rating
                                ? `${rating}.0`
                                : rating}</span>
                            <RatingBar rating={rating}/>
                        </div>
                        <div className={styles.content}>
                            <p>{content.length} total weeks</p>
                            <p>{countExercises} total exercises</p>
                            <p>{language}</p>
                        </div>
                    </div>
                    <div className={styles.finance}>
                        <span className={styles.price}>${price}</span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default SearchedCourse;