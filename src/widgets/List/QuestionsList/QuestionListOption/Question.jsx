import React, { useState } from 'react';
import {CSSTransition}  from 'react-transition-group';
import styles from './Question.module.scss';
import {ArrowY} from "@/shared/ui/api/icons";
const Question = ({question, answer}) => {
    const [textIsShowed, setTextIsShowed] = useState(false);
    return (
        <li className={styles.question}>
            <button onClick={() => setTextIsShowed(!textIsShowed)} className={styles.questionBtn}>
                <div className={styles.questionBtn__inner}>
                    <p>{question}</p>
                    <ArrowY isTrue={textIsShowed}/>
                </div>
            </button>
            <CSSTransition in={textIsShowed}
                           timeout={700}
                           classNames={{
                               enterActive: styles.textEnterActive,
                               enter: styles.textEnter,
                               exitActive: styles.textExitActive,
                               exit: styles.textExit,
                           }}
                           unmountOnExit>
                <div className={styles.answer}>
                    <div className={styles.answer__inner}>
                        <p>{answer}</p>
                    </div>
                </div>
            </CSSTransition>
        </li>
    );
};

export default Question;