import React, {useEffect, useState} from 'react';
import styles from '../styles/Comments.module.scss';
import Image from "next/image";
import commentImage from '@assets/course/comments.png';
import {useInView} from "react-intersection-observer";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [headerRef, inView, entry] = useInView({
        rootMargin: '0px 0px -50px 0px',
        triggerOnce: true,
        onChange: (inView) => {
            if (inView) {
                console.log(1);
            }
        }
    });
    useEffect(() => {
    }, []);
    return (
        <section className={styles.comments} ref={headerRef}>
            <div className={styles.commentsHeader}>
                <Image src={commentImage} alt={''} width={50}/>
                <h1>Comments</h1>
            </div>
        </section>
    );
};

export default Comments;