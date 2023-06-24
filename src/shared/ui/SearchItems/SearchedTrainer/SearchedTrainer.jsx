import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './SearchedTrainer.module.scss';
import star from '@assets/star.png';
import people from '@assets/people.png';
import courses from '@assets/videoPlay.png';
const SearchedTrainer = ({name, surname, _id, trainer, src}) => {
    return (
        <li className={styles.listItem}>
            <Link href={`/trainers/${_id}`} className={styles.listItem__name}>{name} {surname}</Link>
            <h3 className={styles.listItem__activity}>{trainer.title}</h3>
            <div className={styles.listItem__inner}>
                <Link href={`/trainers/${_id}`} className={styles.listItem__avatarLink}>
                    <Image src={`data:image/jpg;base64,${src}`} alt={''} width={110} height={110}/>
                </Link>
                <div className={styles.listItem__characteristics}>
                    <div className={styles.listItem__characteristicsItem}>
                        <Image src={star} alt={''} width={15}/>
                        <p><span>{trainer.rating}</span> Rating</p>
                    </div>
                    <div className={styles.listItem__characteristicsItem}>
                        <Image src={people} alt={''} width={15}/>
                        <p><span>{trainer.students}</span> Students</p>
                    </div>
                    <div className={styles.listItem__characteristicsItem}>
                        <Image src={courses} alt={''} width={15}/>
                        <p><span>{trainer.courses}</span> Courses</p>
                    </div>
                </div>
            </div>
            <p className={styles.listItem__description}>{trainer.description}</p>
        </li>
    );
};

export default SearchedTrainer;