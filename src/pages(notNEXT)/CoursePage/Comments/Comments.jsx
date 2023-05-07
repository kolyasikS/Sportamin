import React, {useEffect, useState} from 'react';
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

const Comments = ({avatar, postId}) => {
    const [commentBlocks, setCommentBlocks] = useState([]);
    const [isGlobalCommentWriting, setIsGlobalCommentWriting] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [headerRef, inView, entry] = useInView({
        rootMargin: '0px 0px -50px 0px',
        triggerOnce: true,
        onChange: async (inView) => {
            if (inView) {
                getComments(postId, null, 2, 0)
                    .then(res => {
                        if (res.length > 0) {
                            setCommentBlocks([...commentBlocks, res]);
                        }
                    })
                    .finally(() => setIsLoading(false));
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
            {isLoading
                ? <div className={'w-full flex justify-center'}>
                    <Loading/>
                </div>
                : <div className={styles.commentsInner}>
                    <div className={styles.generalInfo}>
                        <p>{196} Comments</p>
                    </div>
                    <WritingComment avatar={avatar}
                                isRepliedComment={!isGlobalCommentWriting}
                                isOpened={true}/>
                    <ul>
                        {commentBlocks.map(block =>
                            <CommentBlock key={v4()} comments={block}/>
                        )}
                    </ul>
                    <DarkBtnWithImg width={'100%'}>Load more comments...</DarkBtnWithImg>
                </div>
            }
        </section>
    );
};

export default Comments;