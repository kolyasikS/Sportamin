import React, {useRef, useState} from 'react';
import Image from "next/image";
import styles from '../styles/Comment.module.scss';
import {getImageFromBase64} from "@/app/lib/features/image";
import {getCurrentTimeFromStamp, getDateDifference} from "@/app/lib/features/date";
import {rateComment} from "@/app/lib/controllers/commentController";
import {useSelector} from "react-redux";
import WritingComment from "@/pages(notNEXT)/CoursePage/Comments/WritingComment";
import Link from "next/link";
import {MenuButton} from "@/shared/ui/Buttons/api/Buttons";
import {v4} from "uuid";

const Comment = ({trainerId, disliked, postId, userId, createReply,
                     liked, message, trainer, _id, avatar, initCommId,
                     publishedTime, isReplyComment, repliedUserFullname}) => {
    const [commentAge, setCommentAge] = useState(getDateDifference(getCurrentTimeFromStamp(publishedTime)));
    const [isLiked, setIsLiked] = useState(liked.includes(userId));
    const [isDisliked, setIsDisliked] = useState(disliked.includes(userId));
    const [isWritingReply, setIsWritingReply] = useState(false);
    const menuItems = useRef([
        {
            id: v4(),
            title: 'Delete',
            onClick: async () => {
                await deleteComment(_id);
            }
        }
    ]);
    const rate = async (rating) => {
        if (rating >= 0) {
            setIsLiked(!isLiked);
            if (isDisliked) {
                setIsDisliked(false);
                await rateComment(userId,postId, _id, -1);
            }
            await rateComment(userId,postId, _id, 1);
        } else {
            setIsDisliked(!isDisliked);
            if (isLiked) {
                setIsLiked(false);
                await rateComment(userId, postId, _id, 1);
            }
            await rateComment(userId, postId, _id, -1);
        }
    }

    return (
        <div className={`${styles.comment} ${isReplyComment && styles.replyComment}`}>
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <Link href={`/trainers/${trainerId}`}>
                        <Image src={`data:image/jpg;base64,${getImageFromBase64(trainer.avatar)}`}
                               alt={''} width={55} height={55}/>
                    </Link>
                </div>
                <div className={styles.commentInner}>
                    <div className={styles.commentInfo}>
                        <Link href={`/trainers/${trainerId}`}>
                            <h1>{trainer.name} {trainer.surname}</h1>
                        </Link>
                        {commentAge.diff === 0 && commentAge.term === 'seconds'
                            ? <span>Just now</span>
                            : <span>{commentAge.diff} {commentAge.term} ago</span>
                        }
                    </div>
                    <p className={styles.message}>
                        {repliedUserFullname &&
                            <Link href={`/trainers/${repliedUserFullname.id}`}>{repliedUserFullname.name} {repliedUserFullname.surname}</Link>}
                        {message}
                    </p>
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
                        <button className={styles.reply} onClick={() => setIsWritingReply(true)}>Reply</button>
                    </div>
                </div>
                <MenuButton items={}/>
            </div>
            {isWritingReply &&
                <WritingComment postId={postId} repliedCommentId={_id}
                                avatar={avatar} initCommId={initCommId || _id}
                                isRepliedComment={true} sendClbk={createReply}
                                userId={userId} setIsOpened={setIsWritingReply}
            />}
        </div>
    );
};

export default Comment;