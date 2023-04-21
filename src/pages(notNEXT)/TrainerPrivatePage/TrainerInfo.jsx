import React from 'react';
import styles from './styles/TrainerInfo.module.scss';
const TrainerInfo = ({name, surname, trainer}) => {
    return (
        <div className={styles.info}>
            <h3 className={styles.trainer}>Trainer</h3>
            <h1 className={styles.fullname}>{name} {surname}</h1>
            <h2 className={styles.title}>{trainer.title}</h2>
            <div className={styles.characteristics}>
                <div className={styles.characteristics__item}>
                    <h3>Rating</h3>
                    <p>{trainer.rating}</p>
                </div>
                <div className={styles.characteristics__item}>
                    <h3>Total students</h3>
                    <p>{trainer.students}</p>
                </div>
            </div>
            <h2 className={styles.aboutMe}>About me</h2>
            <p className={styles.description}>{trainer.description}</p>
        </div>
    );
};

export default TrainerInfo;