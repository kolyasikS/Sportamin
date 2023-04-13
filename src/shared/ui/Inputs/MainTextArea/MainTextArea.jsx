import React, {forwardRef} from 'react';
import styles from './MainTextArea.module.scss';
import MainInput from "@/shared/ui/Inputs/MainInput/MainInput";
const MainTextArea = forwardRef(({message, bgColor, color

                                 }, ref) => {
    return (
        <textarea className={styles.textArea}
                  placeholder={message}
                  ref={ref}
                  style={{backgroundColor: bgColor, color}}
        >
        </textarea>
    );
});
MainTextArea.displayName = "MainTextArea";

export default MainTextArea;