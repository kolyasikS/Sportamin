import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/Comments.module.scss';
import Image from "next/image";
import commentImage from '@assets/course/comments.png';
import {useInView} from "react-intersection-observer";
import WritingComment from "@/pages(notNEXT)/CoursePage/Comments/WritingComment";
import {Loading} from "@/shared/ui/Logos/api/Logos";
import CommentBlock from "@/pages(notNEXT)/CoursePage/Comments/CommentBlock";
import {v4} from "uuid";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import {getComments} from "@/app/lib/controllers/commentController";
import {getUsers} from "@/app/lib/controllers/userController";

const Comments = ({avatar, postId}) => {
    const [commentBlocks, setCommentBlocks] = useState([]);
    const [isGlobalCommentWriting, setIsGlobalCommentWriting] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const totalComments = useRef();
    const [headerRef, inView, entry] = useInView({
        rootMargin: '0px 0px -50px 0px',
        triggerOnce: true,
        onChange: async (newInView) => {
            if (newInView && !inView) {
                let comments = await fetchComments( 2, 0);
                totalComments.current = comments.totalComments;
            }
        }
    });
    console.log('render');
    const fetchComments = async (limit, skip) => {
        let result;
        await getComments(postId, null, limit, skip)
            .then(async res => {
                if (res.comments.length > 0) {
                    let trainers = await getUsers({ids: res.comments.map(comm => comm.trainerId)});
                    res.comments.forEach((comm) => {
                        console.log(trainers);
                        let trainer = trainers.items.find(trainer => trainer._id === comm.trainerId);
                        comm.trainer = {
                            avatar: trainer.avatar,
                            name: trainer.name,
                            surname: trainer.surname,
                        }
                    })
                    result = res;
                    setCommentBlocks([...commentBlocks, res]);
                }
            })
        return result;
    }
    return (
        <section className={styles.comments} ref={headerRef}>
            <div className={styles.commentsHeader}>
                <Image src={commentImage} alt={''} width={50}/>
                <h1>Comments</h1>
            </div>
            {isLoading
                ? <div className={'w-full flex justify-center'}>
                    <Loading/>
                </div>
                : null
            }
            <div className={styles.commentsInner}>
                <div className={styles.generalInfo}>
                    <p>{totalComments.current} Comments</p>
                </div>
                <WritingComment avatar={avatar}
                            isRepliedComment={!isGlobalCommentWriting}
                            isOpened={true}/>
                <ul>
                    {commentBlocks.map(block =>
                        <CommentBlock key={v4()} setIsLoading={setIsLoading} comments={block.comments} postId={postId}/>
                    )}
                </ul>
                <DarkBtnWithImg width={'100%'} height={50}>Load more comments...</DarkBtnWithImg>
            </div>
        </section>
    );
};

export default Comments;