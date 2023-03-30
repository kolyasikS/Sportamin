import React from 'react';
import styles from "./styles/FiltrationInner.module.scss";
import {FiltrationItem} from "@/widgets/api/Widgets";

const FiltrationInner = ({items}) => {
    return (
        <ul className={styles.filtrationItemList}>
            {items.map(item =>
                <FiltrationItem key={item.id} {...item}/>)
            }
        </ul>
    );
};

export default FiltrationInner;