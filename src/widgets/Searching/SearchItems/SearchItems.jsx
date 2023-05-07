import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIsLoading} from "@/app/lib/store/actions/sessionActions";
import styles from "@/pages(notNEXT)/TrainersPage/styles/TrainersPage.module.scss";
import {FiltrationInner, SearchItemsListSection} from "@/widgets/api/Widgets";
import {setAmountPages, setPage, setStatus} from "@/app/lib/store/actions/filterActions";
import {itemsPerPage, statuses} from "@/app/lib/store/constants/generalConstants";

const SearchItems = ({fetchItems, query,
                         sort, filtrationItems,
                         renderSearchedItem, children}) => {
    const [filteredItems, setFilteredItems] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.sessionReducer.isLoading);
    const filterState = useSelector(state => state.filterReducer);

    const fetchItemsWrapper = () => {
        let limit = itemsPerPage;
        let skip = (filterState.page - 1) * itemsPerPage;

        fetchItems(query, sort, limit, skip).then(res => {
            if (!res || res.items.length === 0) {
                setIsEmpty(true);
            } else {
                setIsEmpty(false);
            }
            dispatch(setAmountPages(res.count));
            setFilteredItems(res.items);
        })
            .catch(e => console.log(e))
            .finally(() => {
                dispatch(setIsLoading(false));
                dispatch(setStatus(statuses.CREATING));
            });
    }
    useEffect(() => {
        if (filterState.status === statuses.CREATED) {
            if (!isLoading) {
                dispatch(setIsLoading(true));
            } else {
                return;
            }
            fetchItemsWrapper();
        } else if (filterState.status === statuses.FETCHING) {
            dispatch(setStatus(statuses.CREATED));
        }
    }, [filterState.status])
    useEffect(() => {
        if (!Object.keys(sort).length) {
            return;
        }
        if (filterState.status === statuses.CREATING) {
            dispatch(setAmountPages(0));
            dispatch(setStatus(statuses.FETCHING));
        }
    }, [query, sort, filterState.page]);

    return (
        <section className={styles.trainersSection}>
            {children}
            <div className={styles.trainersSectionInner}>
                <FiltrationInner items={filtrationItems} isLoading={isLoading}/>
                <SearchItemsListSection isEmpty={isEmpty} searchedItems={filteredItems}
                                        renderSearchedItem={renderSearchedItem}
                />
            </div>
        </section>
    );
};

export default SearchItems;