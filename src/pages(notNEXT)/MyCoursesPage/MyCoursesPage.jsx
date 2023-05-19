import React, {useState} from 'react';
import Link from "next/link";
import styles from './styles/MyCoursesPage.module.scss';
import SearchedCourse from "@/shared/ui/SearchItems/SearchedCourse/SearchedCourse";
import {useSelector} from "react-redux";
import Image from "next/image";
import editImg from "@assets/editItem.png";
import cancel from "@assets/cancel.png";
import {useRouter} from "next/router";
import {deleteCourse} from "@/app/lib/controllers/courseController";
import {WarningModalW} from "@/widgets/api/Modals";

const MyCoursesPage = ({courses, trainer, trainerID}) => {
    const [coursesState, setCoursesState] = useState(courses);
    const [warningModalW, setWarningModalW] = useState({course: null, isActive: false});
    const setDefaultModal = () => {
        setWarningModalW({
            isActive: false,
            course: null
        });
    }
    const remove = (id) => {
        if (!warningModalW.isActive) {
            setWarningModalW({
                isActive: true,
                course: id,
            });
        } else {
            setDefaultModal();
            deleteCourse(warningModalW.course)
                .then(() => {
                    setCoursesState(coursesState.filter(item => item._id !== warningModalW.course));
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.inner}>
                <ul className={styles.list}>
                    {coursesState.map(item =>
                        <SearchedCourse key={item._id}
                                        {...item} trainer={trainer}>
                            <div className={styles.features}>
                                <Link href={`/profile/${trainerID}/courses/${item._id}/edit`}>
                                    <Image src={editImg} alt={''} width={30}
                                           /*onClick={() => edit(item._id)}*/
                                    />
                                </Link>
                                <Image className={styles.cancel} src={cancel}
                                       alt={''} width={30} onClick={() => remove(item._id)}/>
                            </div>
                        </SearchedCourse>
                    )}
                </ul>
            </div>
            <WarningModalW open={warningModalW.isActive} title={'Are you absolutely sure?'}
                           cancel={setDefaultModal}
                           apply={remove}>
                This action cannot be undone.
                This will permanently delete your course and remove its data from our servers.
            </WarningModalW>
        </main>
    );
};

export default MyCoursesPage;