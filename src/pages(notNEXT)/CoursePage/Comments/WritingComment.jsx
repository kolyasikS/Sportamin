import React, {useRef, useState} from 'react';
import Image from "next/image";
import styles from '../styles/WritingComment.module.scss';
import {MainTextArea} from "@/shared/ui/Inputs/api/Inputs";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import sendImg from '@assets/course/send.png';
import {createComment} from "@/app/lib/controllers/commentController";

const WritingComment = ({avatar, isRepliedComment, setIsOpened, initCommId,
                            userId, postId, repliedCommentId, sendClbk}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const messageRef = useRef();
    const sendComment = async () => {
        if (!messageRef.current.value) {
            return;
        }
        if (isRepliedComment) {
            await createComment(userId, postId, messageRef.current.value, repliedCommentId, initCommId)
                .then(res => sendClbk(res));
            messageRef.current.value = '';
            setIsExpanded(false)
        } else {
            await createComment(userId, postId, messageRef.current.value, initCommId)
                .then(res => sendClbk(res));
            messageRef.current.value = '';
            setIsExpanded(false)
        }
        if (setIsOpened) {
            setIsOpened(false);
        }
    }
    const cancel = () => {
        if (!isRepliedComment) {
            setIsExpanded(false);
        } else {
            setIsOpened(false);
        }
    }
    return (
        <section className={`${styles.writingSection} ${isRepliedComment && styles.repliedSection}`}>
            {avatar && <div className={styles.user}>
                <Image src={avatar} alt={''} width={60} height={60}/>
            </div>}
            <div className={styles.messageArea}>
                <div className={styles.writingArea} onClick={() => {setIsExpanded(true)}}>
                    <MainTextArea minHeight={isRepliedComment ? 80 : isExpanded ? 130 : 65}
                                  height={isRepliedComment ? 80 : isExpanded ? null : 65}
                                  resize={'none'} ref={messageRef} paddingY={isRepliedComment ? 10 : null}
                                  message={isRepliedComment ? 'Reply...' : 'Join to discussion'}
                                  borderRadius={'0.5rem 0.5rem 0 0'}
                    />
                </div>
                <div className={`${styles.features} ${isRepliedComment || isExpanded ? '' : styles.closed}`}>
                    <div className={styles.featuresStyleBtns}>
                        <div className={styles.featuresStyleBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2 -2 15 18" id="bold" x="102" y="77">
                                <title>Bold</title>
                                <path d="M0 14V0h4.772c1.699 0 3.074.311 4.044.933.97.623 1.456 1.634 1.456 2.878 0 .622-.162 1.245-.485 1.711-.324.545-.89.856-1.537 1.167.89.155 1.618.544 2.022 1.167.485.622.728 1.322.728 2.1 0 1.322-.485 2.333-1.375 3.033-.97.7-2.346 1.011-3.963 1.011H0zm2.912-8.167h1.94c.81 0 1.376-.155 1.78-.466.486-.234.647-.7.647-1.323 0-.622-.242-1.088-.647-1.4-.404-.31-1.051-.466-1.86-.466h-1.86v3.655zm0 1.945v4.044h2.75c.809 0 1.375-.155 1.78-.466.404-.312.646-.778.646-1.4 0-.7-.162-1.167-.566-1.556-.404-.389-.97-.544-1.78-.544h-2.83v-.078z"
                                      fillRule="nonzero"/>
                            </svg>
                        </div>
                        <div className={styles.featuresStyleBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2 -2 14 18" id="italic" x="102" y="59">
                                <title>icons8-italic</title>
                                <g fill="#747F87" fillRule="nonzero">
                                    <path d="M3.6 0H10v2.333H3.6zM0 11.667h6.4V14H0z"/>
                                    <path d="M3.733 13.611h-2.4L6.223.39h2.4z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={'flex space-x-2'}>
                        <DarkBtnWithImg height={35}
                                        widthImg={20} onClick={cancel}
                        >
                            Cancel
                        </DarkBtnWithImg>
                        <DarkBtnWithImg img={sendImg} height={35}
                                        widthImg={20} onClick={sendComment}
                        >
                            Send
                        </DarkBtnWithImg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WritingComment;