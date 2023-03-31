import React, {useState} from 'react';
import styles from './styles/FiltrationItem.module.scss';
import {RadioBox, ComboBox} from "@/shared/ui/Inputs/api/Inputs";
import RatingBar from "@/shared/ui/Rating/RatingBar/RatingBar";
const FiltrationItem = ({title, items, multiple, isRated}) => {
    const [isInnerShowed, setIsInnerShowed] = useState(false);
    const [activeOption, setActiveOption] = useState(items.find((item) => item.isActive).id);
    const [activeMultipleOptions, setActiveMultipleOptions] = useState([]);
    return (
        <li className={styles.filtrationItem}>
            <div className={styles.filtrationItemHeader} onClick={() => setIsInnerShowed(prev => !prev)}>
                <h1>{title}</h1>
                <span aria-hidden="true" role="img" className="material-design-icon chevron-down-icon"><svg
                    fill="#fff" width="20" height="20" viewBox="0 0 20 20"
                    className="material-design-icon__svg"><path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></span>
            </div>
            {isInnerShowed && <div className={styles.filtrationItemInner}>
                {items.map(item =>
                    multiple
                        ? <ComboBox key={item.id} id={item.id} isActive={activeMultipleOptions.includes(item.id)}
                            toggleActive={(id) => activeMultipleOptions.includes(item.id) ? setActiveMultipleOptions(activeMultipleOptions.filter(item => item !== id)) : setActiveMultipleOptions([...activeMultipleOptions, id])}
                        >
                            {isRated && <RatingBar rating={item.rating}/>}
                            <p>{item.title}</p>
                        </ComboBox>
                        : <RadioBox key={item.id} id={item.id} isActive={item.id === activeOption ? true : false}
                            setActive={setActiveOption}
                        >
                            {isRated && <RatingBar rating={item.rating}/>}
                            <p>{item.title}</p>
                        </RadioBox>
                )}
            </div>}
        </li>
    );
};

export default FiltrationItem;