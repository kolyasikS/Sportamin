import React, {useRef, useState} from 'react';
import Question from "@/widgets/List/QuestionsList/QuestionListOption/Question";
import styles from './QuestionsList.module.scss';
const QuestionsList = ({questions}) => {
    return (
        <ul className={styles.questionList}>
            {questions.map((question, id) => (
                <Question {...question} key={id}/>
            ))}
        </ul>
    );
};

export default QuestionsList;