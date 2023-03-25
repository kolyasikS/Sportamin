import React, {forwardRef} from 'react';
import styles from './MainTextArea.module.scss';
const MainTextArea = () => {
    return (
        <textarea className={styles.textArea}
            placeholder={'Your Message'}
        >
        </textarea>
    );
};

export default MainTextArea;