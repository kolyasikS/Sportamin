import React, {memo, useRef, useState} from 'react';
import styles from '../styles/Comments.module.scss';
import Image from "next/image";
import commentImage from '@assets/course/comments.png';
import {useInView} from "react-intersection-observer";
import WritingComment from "@/pages(notNEXT)/CoursePage/Comments/WritingComment";
import {Loading} from "@/shared/ui/Logos/api/Logos";
import CommentBlock from "@/pages(notNEXT)/CoursePage/Comments/CommentBlock";
import {v4} from "uuid";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import {deleteComment, getComments} from "@/app/lib/controllers/commentController";
import {getUsers} from "@/app/lib/controllers/userController";
import {useSelector} from "react-redux";

const Comments = memo(({avatar, postId}) => {
    const [commentBlocks, setCommentBlocks] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [isGlobalCommentWriting, setIsGlobalCommentWriting] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const totalComments = useRef();
    const fetchParameters = useRef({
        limit: 3,
        skip: 0,
    })
    const [headerRef, inView] = useInView({
        rootMargin: '0px 0px -50px 0px',
        triggerOnce: true,
        onChange: async (newInView) => {
            if (newInView && !inView) {
                let comments = await fetchComments(fetchParameters.current.limit, fetchParameters.current.skip);
                totalComments.current = comments.totalComments;
                setIsLoading(false);
            }
        }
    });
    const loadMore = async () => {
        await fetchComments(fetchParameters.current.limit, fetchParameters.current.skip);
    }
    const userId = useSelector(state => state.authReducer?.user?.id);
    const fetchComments = async (limit, skip) => {
        let result;
        await getComments(postId, null, limit, skip)
            .then(async res => {
                if (res.comments.length > 0) {
                    fetchParameters.current.skip += 3;

                    let trainers = await getUsers({ids: res.comments.map(comm => comm.trainerId)});
                    res.comments.forEach((comm) => {
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
    const createComment = async (comment) => {
        let trainers = await getUsers({id: comment.trainerId});
        if (trainers.items.length) {
            comment.trainer = {
                avatar: trainers.items[0].avatar,
                name: trainers.items[0].name,
                surname: trainers.items[0].surname,
            }
        }
        setCommentBlocks(commentBlocks.map((block, i) => {
            if (i === 0) {
                block.comments = [comment, ...block.comments];
            }
            return block;
        }))
    }
    const deleteCommentClick = async (id) => {
        await deleteComment(id);
        setCommentBlocks(commentBlocks.map(block => {
            return {
                ...block,
                comments: block.comments.filter(comment => comment._id !== id)
            };
        }))
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
                : <div className={styles.commentsInner}>
                <div className={styles.generalInfo}>
                    <p>{totalComments.current} Comments</p>
                </div>
                <WritingComment avatar={avatar} userId={userId}
                            isRepliedComment={!isGlobalCommentWriting}
                            postId={postId} sendClbk={createComment}
                />
                <ul className={styles.blockList}>
                    {commentBlocks.map(block =>
                        <CommentBlock key={v4()} deleteComment={deleteCommentClick}
                                      userId={userId} postId={postId}
                                      comments={block.comments}
                        />
                    )}
                </ul>
                <DarkBtnWithImg width={'100%'} height={50} onClick={loadMore}>Load more comments...</DarkBtnWithImg>
            </div>}
        </section>
    );
}, (oldProps, newProps) => {
    if (oldProps.avatar === newProps.avatar ||
        oldProps.postId === newProps.postId) {
        return true;
    }
});
Comments.displayName = 'Comments';

export default Comments;