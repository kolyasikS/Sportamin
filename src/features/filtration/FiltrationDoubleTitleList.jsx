import React, {useEffect, useState} from 'react';
import styles from "@/widgets/List/DoubleTitleList/DoubleTitleList.module.scss";
import DoubleTitleListOption from "@/widgets/List/DoubleTitleList/DoubleTitleListOption/DoubleTitleListOption";
import {DoubleTitleList} from "@/widgets/api/Widgets";

const FiltrationDoubleTitleList = ({title, options, sortPath, setSort,
                                      width}) => {
    const [activeOption, setActiveOption] = useState(options[0]);
    const optionClick = (option) => {
        const newActiveOption = options.find(item => item.id === option.id);
        const sort = {};
        sort[(sortPath || '') + newActiveOption.title.toLowerCase()] = -1;
        setSort(sort);

        setActiveOption(newActiveOption);
    }
    useEffect(() => {
        const sort = {};

        sort[(sortPath || '') + options[0].title.toLowerCase()] = -1;
        setSort(sort);
    }, [])
    return (
        <DoubleTitleList options={options} title={title}
                         width={width}
                         activeOption={activeOption}
                         setActiveOption={optionClick}
        />
        /*<div className={styles.listBlock}
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
        </div>*/
    );
};

export default FiltrationDoubleTitleList;