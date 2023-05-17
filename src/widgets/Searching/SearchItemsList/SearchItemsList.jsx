import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "@/pages(notNEXT)/TrainersPage/styles/TrainersItemsList.module.scss";
import {Loading} from "@/shared/ui/Logos/api/Logos";
import {Pagination} from "@/widgets/api/Widgets";
import {setPage} from "@/app/lib/store/actions/filterActions";

const SearchItemsList = ({isEmpty, searchedItems, renderSearchedItem}) => {
    const isLoading = useSelector(state => state.sessionReducer.isLoading);
    const filterReducer = useSelector(state => state.filterReducer);
    const dispatch = useDispatch();
    return (
        <div className={styles.searchedItemsBlock}>
            {isLoading
                ? <div className={styles.loadingBlock}>
                    <Loading/>
                </div>
                : null
            }
            <div className={styles.searchedItemsBlockInner}>
                {isEmpty
                    ? <h1 className={styles.notFoundResult}>Not found</h1>
                    : <>
                        <ul className={`${styles.list}`}>
                            {searchedItems.map(renderSearchedItem)}
                        </ul>
                        <Pagination setPage={(page) => dispatch(setPage(page))}
                                    page={filterReducer.page}
                                    amountPages={filterReducer.amountPages}/>
                    </>
                }
            </div>
        </div>
    );
};

export default SearchItemsList;