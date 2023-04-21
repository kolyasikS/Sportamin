import React, {memo, useEffect, useState} from 'react';
import styles from './SearchItemsList.module.scss';

const SearchItemsList = memo(({items, isStale}) => {
    const [style, setStyle] = useState({});
    useEffect(() => {
        console.log(isStale);
        setStyle(isStale ? {backgroundColor: 'red'}: {backgroundColor: 'inherit'});
    }, [isStale])
    return (
        <section style={style}>
            <ul className={styles.list}>
                {items.map(item => item)}
            </ul>
        </section>
    );
});
SearchItemsList.displayName = 'SearchItemsList';
export default SearchItemsList;