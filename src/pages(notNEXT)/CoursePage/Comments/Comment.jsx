import React, {useState} from 'react';
import Image from "next/image";
import styles from '../styles/Comment.module.scss';
import {getImageFromBase64} from "@/app/lib/features/image";
import {getCurrentTimeFromStamp, getDateDifference} from "@/app/lib/features/date";

const Comment = ({trainerId, disliked, postId,
                     liked, message, trainer,
                     publishedTime}) => {
    const [commentAge, setCommentAge] = useState(getDateDifference(getCurrentTimeFromStamp(publishedTime)));
    const [isLiked, setIsLiked] = useState(liked.includes(postId));
    const [isDisliked, setIsDisliked] = useState(disliked.includes(postId));
    console.log(commentAge);
    const rate = (rating) => {
        if (rating >= 0) {
            setIsLiked(!isLiked);
        } else {
            setIsDisliked(!isDisliked);
        }
    }
    return (
        <div className={styles.comment}>
            <div className={styles.avatar}>
                <Image src={`data:image/jpg;base64,${getImageFromBase64(trainer.avatar)}`}
                       alt={''} width={55} height={55}/>
            </div>
            <div className={styles.commentInner}>
                <div className={styles.commentInfo}>
                    <h1>{trainer.name} {trainer.surname}</h1>
                    <span>{commentAge.diff} {commentAge.term} ago</span>
                </div>
                <p className={styles.message}>{message}</p>
                <div className={styles.features}>
                    <div className={styles.featuresItem}>
                        <button className={`${styles.likeBtn} ${isLiked ? styles.btnActive : ''}`} onClick={() => rate(1)}>
                            <svg viewBox="0 0 23 24">
                                <g>
                                    <path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path>
                                </g>
                            </svg>
                        </button>
                        <span>{liked.length}</span>
                    </div>
                    <div className={styles.featuresItem}>
                        <button className={`${styles.dislikeBtn} ${isDisliked ? styles.btnActive : ''}`} onClick={() => rate(-1)}>
                            <svg viewBox="0 3 23 24">
                                <g>
                                    <path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path>
                                </g>
                            </svg>
                        </button>
                        <span>{disliked.length}</span>
                    </div>
                    <button className={styles.reply}>Reply</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;