import React, {forwardRef} from 'react';
import styles from './MainTextArea.module.scss';
const MainTextArea = forwardRef(({message, bgColor, color,
                                     height, width, resize,
                                 }, ref) => {
    return (
        <textarea className={styles.textArea}
                  placeholder={message}
                  ref={ref}
                  style={{backgroundColor: bgColor,
                      color, width, height, resize
                  }}
        >
        </textarea>
    );
});
MainTextArea.displayName = "MainTextArea";

export default MainTextArea;