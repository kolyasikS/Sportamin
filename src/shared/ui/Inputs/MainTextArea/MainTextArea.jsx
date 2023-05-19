import React, {forwardRef} from 'react';
import styles from './MainTextArea.module.scss';
const MainTextArea = forwardRef(({message, bgColor, color, value,
                                     height, width, resize, onChange,
                                 }, ref) => {
    return (
        <textarea className={styles.textArea}
                  placeholder={message} value={value}
                  ref={ref} onChange={onChange}
                  style={{backgroundColor: bgColor,
                      color, width, height, resize
                  }}
        >
        </textarea>
    );
});
MainTextArea.displayName = "MainTextArea";

export default MainTextArea;