import React from 'react';
import styles from "./styles/FiltrationInner.module.scss";
import {FiltrationItem} from "@/widgets/api/Widgets";

const FiltrationInner = ({items, isLoading, fullWidth}) => {
    return (
        <ul className={`${styles.filtrationItemList} 
        ${isLoading ? styles.isLoading : ''} ${fullWidth ? 'w-full' : ''}`}>
            {items.map(item =>
                <FiltrationItem key={item.id} {...item} fullWidth={fullWidth}/>)
            }
        </ul>
    );
};

export default FiltrationInner;