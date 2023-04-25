import React, {forwardRef} from 'react';
import styles from './MainInput.module.scss';
const MainInput = forwardRef(({children, id, width = 250, height = 50,
                                  type = 'text', value, onChange, placeholder, bgColor,
                                  color, onBlur, paddingY, paddingX, defaultValue}, ref) => {
    return (
        <div className={styles.input__block}
             style={{width: width, height: height}} onBlur={onBlur} tabIndex={1}>
            <input type={type} id={id} placeholder={placeholder || ' '} value={value}
                   className={styles.input} ref={ref} onChange={onChange} defaultValue={defaultValue}
                   style={{color, paddingBottom: paddingY, paddingTop: paddingY,
                       paddingLeft: paddingX, paddingRight: paddingX}}
            />
            {placeholder || <label htmlFor={id} className={styles.label} style={{backgroundColor: bgColor, color}}>{children}</label>}
        </div>
    );
});
MainInput.displayName = "MainInput";

export default MainInput;