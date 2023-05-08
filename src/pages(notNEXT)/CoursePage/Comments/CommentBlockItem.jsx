import React, {useEffect, useState} from 'react';
import {getComments} from "@/app/lib/controllers/commentController";
import styles from '../styles/CommentBlockItem.module.scss';
const CommentBlockItem = ({postId, initId, children, setIsLoading}) => {
    const [repliesComments, setRepliesComments] = useState([]);
    const [isRepliesShowed, setIsRepliesShowed] = useState(false);
    useEffect(() => {
        getComments(postId, initId)
            .then(res => {
                console.log(res);
                setRepliesComments(res)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    return (
        <div className={styles.blockItem}>
            {children}
            <button onClick={() => setIsRepliesShowed(prev => !prev)}
                    className={`${styles.toggleBtn} ${isRepliesShowed ? styles.activeBtn : ''}`}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M18,9l-6,6L6,9H18z"></path>
                    </g>
                </svg>
                <span>{repliesComments.length}</span>
                <p>replies</p>
            </button>
        </div>
    );
};

export default CommentBlockItem;