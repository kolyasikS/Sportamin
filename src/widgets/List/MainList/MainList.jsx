import React, {useRef, useState} from 'react';
import ListOption from "@/widgets/List/MainList/MainListOption/ListOption";
import styles from './MainList.module.scss';
import {CSSTransition} from "react-transition-group";
const MainList = ({options, width = 250, height = 50, option, setOption}) => {
    const [isShown, setIsShown] = useState(false);
    const nodeRef = useRef(null);
    return (
        <div className={styles.list}>
            <div className={styles.defaultOptions} style={{height: height, width: width}}
                 tabIndex={1}
                 onClick={() => setIsShown(curr => !curr)} onBlur={() => setIsShown(false)}>
                <p>
                    {option ? option : 'Choose a gender'}
                </p>
            </div>
            <CSSTransition
                in={isShown}
                nodeRef={nodeRef}
                timeout={700}
                unmountOnExit
                classNames={{
                    enterActive: styles.optionsEnterActive,
                    enter: styles.optionsEnter,
                    exitActive: styles.optionsExitActive,
                    exit: styles.optionsExit,
                }}
            >
                <div className={styles.options} ref={nodeRef}>
                    {options.map(item =>
                        <ListOption title={item.title} key={item.id} onClick={() => setOption(item.title)}/>
                    )}
                </div>
            </CSSTransition>
        </div>
    );
};

export default MainList;