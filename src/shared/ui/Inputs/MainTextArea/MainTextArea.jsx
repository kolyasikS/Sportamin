import React, {forwardRef} from 'react';
import styles from './MainTextArea.module.scss';
import MainInput from "@/shared/ui/Inputs/MainInput/MainInput";
const MainTextArea = forwardRef(({}, ref) => {
    return (
        <textarea className={styles.textArea}
            placeholder={'Your Message'}
            ref={ref}
        >
        </textarea>
    );
});
MainTextArea.displayName = "MainTextArea";

export default MainTextArea;