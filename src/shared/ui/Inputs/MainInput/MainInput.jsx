import React, {forwardRef} from 'react';
import styles from './MainInput.module.scss';
const MainInput = forwardRef(({children, id, width = 250, height = 50,
                                  type = 'text', value, onChange}, ref) => {
    return (
        <div className={styles.input__block}
             style={{width: width, height: height}}>
            <input type={type} id={id} placeholder={' '} value={value}
                className={styles.input} ref={ref} onChange={onChange}/>
            <label htmlFor={id} className={styles.label}>{children}</label>
        </div>
    );
});
MainInput.displayName = "MainInput";

export default MainInput;