import React from 'react';
import {useSelector} from "react-redux";
import styles from "@/pages(notNEXT)/TrainersPage/styles/TrainersItemsList.module.scss";
import {Loading} from "@/shared/ui/Logos/api/Logos";
import {Pagination} from "@/widgets/api/Widgets";

const SearchItemsList = ({isEmpty, searchedItems, renderSearchedItem}) => {
    const isLoading = useSelector(state => state.sessionReducer.isLoading);
    return (
        <div className={styles.searchedItemsBlock}>
            <div className={styles.searchedItemsBlockInner}>
                {isLoading
                    ?
                    <div className={styles.loadingBlock}>
                        <Loading/>
                    </div>
                    : isEmpty
                        ? <h1 className={styles.notFoundResult}>Not found</h1>
                        : <>
                            <ul className={`${styles.list}`}>
                                {searchedItems.map(renderSearchedItem)}
                            </ul>
                            <Pagination/>
                        </>
                }
            </div>
        </div>
    );
};

export default SearchItemsList;