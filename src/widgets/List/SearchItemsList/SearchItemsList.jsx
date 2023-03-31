import React from 'react';
import styles from './SearchItemsList.module.scss';

const SearchItemsList = ({items}) => {
    return (
        <section>
            <ul>
                {items.map(item => item)}
            </ul>
        </section>
    );
};

export default SearchItemsList;