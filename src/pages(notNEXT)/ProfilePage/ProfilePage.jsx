import React from 'react';
import styles from './styles/ProfilePage.module.scss';
import Image from "next/image";
import SocNet from "@/pages(notNEXT)/ProfilePage/SocNet";
import {getImageFromBase64} from "@/app/lib/features/image";
import RatingBar from "@/shared/ui/Rating/RatingBar/RatingBar";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";

const ProfilePage = ({user}) => {
    return (
        <main className={styles.main}>
            <div className={styles.inner}>
                <div className={styles.topInner}>
                    <div className={`${styles.container} ${styles.introduction}`}>
                        <Image src={`data:image/jpg;base64,${getImageFromBase64(user.avatar.data)}`}
                               alt={''} width={120} height={120}/>
                        <h1>{user.name} {user.surname}</h1>
                        {user.trainer && <h2>{user.trainer.title}</h2>}
                    </div>
                    <div className={`${styles.container} ${styles.info}`}>
                        <div className={styles.infoItem}>
                            <h2>Full Name</h2>
                            <p>{user.name} {user.surname}</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h2>Email</h2>
                            <p>{user.email}</p>
                        </div>
                        {user.trainer && <div className={styles.infoItem}>
                            <h2>Rating</h2>
                            <p>{user.trainer.rating}</p>
                            <RatingBar rating={user.trainer.rating}/>
                        </div>}
                        {user.trainer && <div className={styles.infoItem}>
                            <h2>Students</h2>
                            <p>{user.trainer.students}</p>
                        </div>}
                        <div className={styles.infoItem}>
                            <h2>Languages</h2>
                            <p>{user.trainer.languages.map((item, ind) => (
                                ind === user.trainer.languages.length - 1
                                    ? `${item}`
                                    : `${item}, `
                            ))}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomInner}>
                    <div className={`${styles.container} ${styles.links}`}>
                        <SocNet image={''} title={'Website'}></SocNet>
                        <SocNet image={''} title={'GitHub'}></SocNet>
                        <SocNet image={''} title={'Instagram'}></SocNet>
                        <SocNet image={''} title={'Telegram'}></SocNet>
                        <SocNet image={''} title={'YouTube'}></SocNet>
                    </div>
                    <div className={`${styles.container} ${styles.features}`}>
                        <DarkBtnWithImg width={'100%'} height={50}>Edit</DarkBtnWithImg>
                        <DarkBtnWithImg width={'100%'} height={50}>Change password</DarkBtnWithImg>
                        <DarkBtnWithImg width={'100%'} height={50}>My courses</DarkBtnWithImg>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;