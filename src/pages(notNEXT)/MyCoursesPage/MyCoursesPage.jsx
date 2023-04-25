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

const MyCoursesPage = ({courses, trainer, trainerID}) => {
    const [coursesState, setCoursesState] = useState(courses);
    const remove = (id) => {
       /* deleteCourse(id)
            .then(() => {
                setCoursesState(coursesState.filter(item => item._id !== id));
            })
            .catch((e) => {
                console.log(e);
            })*/
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
        </main>
    );
};

export default MyCoursesPage;