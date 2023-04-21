import React, {useEffect, useState} from 'react';
import styles from './DoubleTitleList.module.scss';
import DoubleTitleListOption from "@/widgets/List/DoubleTitleList/DoubleTitleListOption/DoubleTitleListOption";
const DoubleTitleList = ({title, options,
                             setActiveOption, activeOption,
                             width}) => {
    const [isShowed, setIsShowed] = useState(false);
    const optionClick = (id) => {
        const newActiveOption = options.find(item => item.id === id);
        setActiveOption(newActiveOption);
        setIsShowed(false);
    }
    return (
        <div className={styles.listBlock}
             onBlur={() => setIsShowed(false)}
             tabIndex={1}
        >
            <div className={styles.btnList}
                 style={{width}}
                 onClick={() => setIsShowed(prev => !prev)}
            >
                <div>
                    {title && <span>{title}</span>}
                    <p>{activeOption.title}</p>
                </div>
                <span className={styles.dropdownCaret}></span>
            </div>
            {isShowed && <ul className={styles.list}>
                {options.filter(item => item.id !== activeOption.id).map(item =>
                    <DoubleTitleListOption key={item.id} {...item} onClick={() => optionClick(item.id)}/>)
                }
            </ul>}
        </div>
    );
};

export default DoubleTitleList;