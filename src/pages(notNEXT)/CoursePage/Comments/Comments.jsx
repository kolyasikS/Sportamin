import React from 'react';
import styles from '../styles/Comments.module.scss';
import Image from "next/image";
import commentImage from '@assets/course/comments.png';

const Comments = () => {

    return (
        <section className={styles.comments}>
            <div className={styles.commentsHeader}>
                <Image src={commentImage} alt={''} width={50}/>
                <h1>Comments</h1>
            </div>
        </section>
    );
};

export default Comments;