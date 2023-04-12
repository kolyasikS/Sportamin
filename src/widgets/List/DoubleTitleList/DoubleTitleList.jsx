import React, {useEffect, useState} from 'react';
import styles from './DoubleTitleList.module.scss';
import DoubleTitleListOption from "@/widgets/List/DoubleTitleList/DoubleTitleListOption/DoubleTitleListOption";
import {useDispatch} from "react-redux";
import {setIsLoading} from "@/app/lib/store/actions/sessionActions";
const DoubleTitleList = ({title, options, sortPath, setSort}) => {
    const [activeOption, setActiveOption] = useState(options[0]);
    const [isShowed, setIsShowed] = useState(false);
    const dispatch = useDispatch();
    const optionClick = (id) => {
        const newActiveOption = options.find(item => item.id === id);

        const sort = {};
        sort[sortPath + newActiveOption.title.toLowerCase()] = -1;
        setSort(sort);

        setActiveOption(newActiveOption);
        setIsShowed(false);
    }
    useEffect(() => {
        const sort = {};
        sort[sortPath + options[0].title.toLowerCase()] = -1;
        console.log('sort', sort);
        setSort(sort);
    }, [])
    return (
        <div className={styles.listBlock}
             onBlur={() => setIsShowed(false)}
             tabIndex={1}
        >
            <div className={styles.btnList}
                 onClick={() => setIsShowed(prev => !prev)}
            >
                <div>
                    <span>{title}</span>
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