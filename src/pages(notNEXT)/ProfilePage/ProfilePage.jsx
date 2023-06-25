import React, {useEffect, useState} from 'react';
import editImage from '@assets/editItem.png';
import instagram from '@assets/profile/instagram.png';
import github from '@assets/profile/github.png';
import telegram from '@assets/profile/telegram.png';
import youtube from '@assets/profile/youtube.png';
import website from '@assets/profile/website.png';
import Image from "next/image";
import Link from "next/link";
import styles from './styles/ProfilePage.module.scss';
import SocNet from "@/pages(notNEXT)/ProfilePage/SocNet";
import EditNameModal from "@/pages(notNEXT)/ProfilePage/Modals/EditNameModal";
import EditPasswordModal from "@/pages(notNEXT)/ProfilePage/Modals/EditPasswordModal";
import EditTrainerTitleModal from "@/pages(notNEXT)/ProfilePage/Modals/EditTrainerTitleModal";
import AvatarIcon from "@/pages(notNEXT)/ProfilePage/AvatarIcon";
import RatingBar from "@/shared/ui/Rating/RatingBar/RatingBar";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import {getImageFromBase64} from "@/app/lib/features/image";
import {updateUser} from "@/app/lib/controllers/userController";
import _ from 'lodash';

const ProfilePage = ({user}) => {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [actualUser, setActualUser] = useState(user);
    const [fullName, setFullName] = useState({
        name: user.name,
        surname: user.surname
    });
    const [title, setTitle] = useState(user.trainer.title);
    const [isCanceling, setIsCanceling] = useState(false);
    const [isApplying, setIsApplying] = useState(false);
    const [updatedValues, setUpdatedValues] = useState();
    const edit = () => {
        setIsEditingProfile(!isEditingProfile);
    }
    const cancel = () => {
        setIsCanceling(true);
    }
    const apply = () => {
        setIsApplying(true);
        setIsEditingProfile(false);
    }
    useEffect(() => {
        if (isCanceling) {
            setIsCanceling(false);
            setIsEditingProfile(false);
            setFullName({
                name: actualUser.name,
                surname: actualUser.surname
            });
            setTitle(actualUser.trainer.title);
        }
    }, [isCanceling])
    useEffect(() => {
        if (updatedValues) {
            let tempUpdatedValue = updatedValues;
            let trainerObject = tempUpdatedValue.trainer;
            delete tempUpdatedValue.trainer;
            let defaultObject = tempUpdatedValue;
            let updatedUser = {...actualUser, ...defaultObject, trainer: {...actualUser.trainer, ...trainerObject}};
            updateUser({id: actualUser._id}, updatedUser)
                .then(() => {
                    setActualUser(updatedUser);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [updatedValues]);
    useEffect(() => {
        if (isApplying) {
            let newUpdatedValues = {
                name: fullName.name,
                surname: fullName.surname,
                trainer: {
                    title
                }
            };
            let oldUpdatedValues = {
                name: actualUser.name,
                surname: actualUser.surname,
                trainer: {
                    title: actualUser.trainer.title
                }
            }
            if (!_.isEqual(newUpdatedValues, oldUpdatedValues)) {
                setNewUpdatedUser(() => newUpdatedValues);
            }
        }
    }, [isApplying])
    const setNewUpdatedUser = (callback) => {
        setIsApplying(false);
        let newUpdatedValues = callback(actualUser);
        if (newUpdatedValues) {
            if (newUpdatedValues.trainer) {
                let trainerObject = newUpdatedValues.trainer;
                delete newUpdatedValues.trainer;
                let defaultObject = newUpdatedValues;
                setUpdatedValues((prev) => {
                    return {...prev, ...defaultObject, trainer: {...prev?.trainer, ...trainerObject}}
                });
            } else {
                setUpdatedValues((prev) => ({...prev, ...newUpdatedValues}));
            }
        }
    }
    const changePassword = async (password) => {
        let updatedUser = {...actualUser, password: {
            current: actualUser.password,
            ...password
        }};
        return await updateUser({id: actualUser._id}, updatedUser);
    }
    return (
        <main className={styles.main}>
            <div className={styles.inner}>
                <div className={styles.topInner}>
                    <div className={`${styles.container} ${styles.introduction}`}>
                        <AvatarIcon image={`${getImageFromBase64(actualUser.avatar)}`}
                                    isEditing={isEditingProfile} isCanceling={isCanceling}
                                    setUpdatedUser={setNewUpdatedUser} isApplying={isApplying}
                        />
                        <h1>
                            {fullName.name} {fullName.surname}
                                { isEditingProfile
                                    ? <EditNameModal fullName={fullName}
                                                     setFullname={setFullName}>
                                        <Image src={editImage} alt={''}
                                                 width={30}
                                                 className={`${styles.editImg}`}
                                        />
                                    </EditNameModal>
                                    : null
                                }
                        </h1>
                        {actualUser.trainer && <h2>
                            {title}
                            {isEditingProfile
                                ? <EditTrainerTitleModal title={title}
                                                         setTitle={setTitle}>
                                    <Image src={editImage} alt={''}
                                           width={30}
                                           className={`${styles.editImg} -top-[4px]`}
                                    />
                                </EditTrainerTitleModal>
                                : null
                            }
                        </h2>}
                    </div>
                    <div className={`${styles.container} ${styles.info}`}>
                        <div className={styles.infoItem}>
                            <h2>Full Name</h2>
                            <p>{fullName.name} {fullName.surname}</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h2>Email</h2>
                            <p>{actualUser.email}</p>
                        </div>
                        {actualUser.trainer && <div className={styles.infoItem}>
                            <h2>Rating</h2>
                            <div className={'flex'}>
                                <p>{actualUser.trainer.rating}</p>
                                <RatingBar rating={actualUser.trainer.rating}/>
                            </div>
                        </div>}
                        {actualUser.trainer && <div className={styles.infoItem}>
                            <h2>Students</h2>
                            <p>{actualUser.trainer.students}</p>
                        </div>}
                        <div className={styles.infoItem}>
                            <h2>Languages</h2>
                            <p>{actualUser.trainer.languages.map((item, ind) => (
                                ind === actualUser.trainer.languages.length - 1
                                    ? `${item}`
                                    : `${item}, `
                            ))}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomInner}>
                    <div className={`${styles.container} ${styles.links}`}>
                        <SocNet image={website} title={'Website'} links={actualUser.trainer?.links}
                                isCanceling={isCanceling} isEditing={isEditingProfile}
                                setUpdatedUser={setNewUpdatedUser} isApplying={isApplying}></SocNet>
                        <SocNet image={github} title={'GitHub'} links={actualUser.trainer?.links}
                                isCanceling={isCanceling} isEditing={isEditingProfile}
                                setUpdatedUser={setNewUpdatedUser} isApplying={isApplying}></SocNet>
                        <SocNet image={instagram} title={'Instagram'} links={actualUser.trainer?.links}
                                isCanceling={isCanceling} isEditing={isEditingProfile}
                                setUpdatedUser={setNewUpdatedUser} isApplying={isApplying}></SocNet>
                        <SocNet image={telegram} title={'Telegram'} links={actualUser.trainer?.links}
                                isCanceling={isCanceling} isEditing={isEditingProfile}
                                setUpdatedUser={setNewUpdatedUser} isApplying={isApplying}></SocNet>
                        <SocNet image={youtube} title={'YouTube'} links={actualUser.trainer?.links}
                                isCanceling={isCanceling} isEditing={isEditingProfile}
                                setUpdatedUser={setNewUpdatedUser} isApplying={isApplying}></SocNet>
                    </div>
                    <div className={`${styles.container} ${styles.features}`}>
                        {isEditingProfile
                            ? <div className={styles.editFeatures}>
                                <DarkBtnWithImg width={'100%'} height={50} onClick={apply}>OK</DarkBtnWithImg>
                                <DarkBtnWithImg width={'100%'} height={50} onClick={cancel}>Cancel</DarkBtnWithImg>
                            </div>
                            : <DarkBtnWithImg width={'100%'} height={50} onClick={edit}>Edit</DarkBtnWithImg>
                        }
                        <EditPasswordModal updateUser={changePassword}>
                            <p>Change password</p>
                        </EditPasswordModal>
                            <Link href={`/profile/${actualUser._id}/courses`} className={'w-full'}>
                                <DarkBtnWithImg width={'100%'} height={50}>
                                    My courses
                                </DarkBtnWithImg>
                            </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;