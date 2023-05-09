import React, {useEffect, useRef, useState} from 'react';
import {getComments} from "@/app/lib/controllers/commentController";
import styles from '../styles/CommentBlockItem.module.scss';
import Comment from "@/pages(notNEXT)/CoursePage/Comments/Comment";
import {getUsers} from "@/app/lib/controllers/userController";
import {Loading} from "@/shared/ui/Logos/api/Logos";
const withInitComment = (InitComment) => {
    const WithInitComment = ({ postId, initComm, userId}) => {
        const [isLoading, setIsLoading] = useState(true);
        const [repliesComments, setRepliesComments] = useState([]);
        const [isRepliesShowed, setIsRepliesShowed] = useState(false);
        const amountReplies = useRef(initComm.amountReplies);
        const showReplies = async () => {
            setIsRepliesShowed(!isRepliesShowed);
            if (repliesComments.length) {
                return;
            }
            getComments(postId, initComm._id)
                .then(async res => {
                    if (res.length > 0) {
                        let trainers = await getUsers({ids: [initComm.trainerId, ...res.map(comm => comm.trainerId)]});
                        res.forEach((comm) => {
                            let fullComments = [...res, initComm];
                            let trainer = trainers.items.find(trainer => trainer._id === comm.trainerId);
                            comm.trainer = {
                                id: trainer._id,
                                avatar: trainer.avatar,
                                name: trainer.name,
                                surname: trainer.surname,
                            };
                            let repliedComment = fullComments.find(rComm => rComm._id === comm.repliedOn);
                            if (repliedComment) {
                                trainer = trainers.items.find(trainer => trainer._id === repliedComment.trainerId);
                                comm.repliedUserFullname = {
                                    id: trainer._id,
                                    name: trainer.name,
                                    surname: trainer.surname,
                                };
                            } else {
                                comm.repliedUserFullname = {
                                    name: trainer.name,
                                    surname: trainer.surname,
                                };
                            }
                        })
                        setRepliesComments(res);
                        setIsLoading(false);
                    }
                })
        }
        const createComment = async (comment) => {
            let trainers = await getUsers({id: comment.trainerId});
            if (trainers.items.length) {
                comment.trainer = {
                    avatar: trainers.items[0].avatar,
                    name: trainers.items[0].name,
                    surname: trainers.items[0].surname,
                }
            }
            amountReplies.current++;
            setRepliesComments([comment, ...repliesComments]);
            await showReplies();
        }
        return (
            <div className={styles.blockItem}>
                <InitComment {...initComm} postId={postId} userId={userId} createReply={createComment}/>
                {amountReplies.current
                    ? <button onClick={showReplies}
                              className={`${styles.toggleBtn} ${isRepliesShowed ? styles.activeBtn : ''}`}>
                        <svg viewBox="0 0 24 24">
                            <g>
                                <path d="M18,9l-6,6L6,9H18z"></path>
                            </g>
                        </svg>
                        <span>{amountReplies.current}</span>
                        <p>replies</p>
                    </button>
                    : null
                }
                {isRepliesShowed
                    ? isLoading
                        ? <div className={'w-full flex justify-center'}>
                            <Loading/>
                        </div>
                        : <ul className={styles.replies}>
                            {repliesComments.map(comment =>
                                <Comment key={comment._id} postId={postId} userId={userId} initCommId={initComm._id}
                                         {...comment} isReplyComment={true} createReply={createComment}
                                         repliedUserFullname={comment.repliedUserFullname}
                                />)}
                        </ul>
                    : null}
            </div>
        );
    };
    return WithInitComment;
};
export default withInitComment;