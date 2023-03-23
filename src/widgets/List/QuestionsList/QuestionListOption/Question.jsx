import React, { useState } from 'react';
import {CSSTransition}  from 'react-transition-group';
import styles from './Question.module.scss';
const Question = ({question, answer}) => {
    const [textIsShowed, setTextIsShowed] = useState(false);
    return (
        <li className={styles.question}>
            <button onClick={() => setTextIsShowed(!textIsShowed)} className={styles.questionBtn}>
                <div className={styles.questionBtn__inner}>
                    <p>{question}</p>
                    {textIsShowed
                        ? <span aria-hidden="true" role="img" class="material-design-icon chevron-up-icon">
                        <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg">
                            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">
                            </path>
                        </svg>
                    </span>
                        : <span aria-hidden="true" role="img" class="material-design-icon chevron-down-icon">
                        <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                            </path>
                        </svg>
                    </span>
                    }
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