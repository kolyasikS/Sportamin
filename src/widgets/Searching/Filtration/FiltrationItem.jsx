import React, {useState} from 'react';
import styles from './styles/FiltrationItem.module.scss';
import FiltrationItemProcess from "@/pages(notNEXT)/TrainersPage/FiltrationItemProcess";
const FiltrationItem = ({title, items, multiple, isRated}) => {
    const [isInnerShowed, setIsInnerShowed] = useState(false);

    return (
        <li className={styles.filtrationItem}>
            <div className={styles.filtrationItemHeader} onClick={() => setIsInnerShowed(prev => !prev)}>
                <h1>{title}</h1>
                <span aria-hidden="true" role="img" className="material-design-icon chevron-down-icon"><svg
                    fill="#fff" width="20" height="20" viewBox="0 0 20 20"
                    className="material-design-icon__svg"><path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg></span>
            </div>
            <FiltrationItemProcess isInnerShowed={isInnerShowed} items={items}
                                   multiple={multiple} isRated={isRated}/>
        </li>
    );
};

export default FiltrationItem;