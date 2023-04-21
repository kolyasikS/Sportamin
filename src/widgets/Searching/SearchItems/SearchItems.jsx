import React, {useDeferredValue, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIsLoading} from "@/app/lib/store/actions/sessionActions";
import styles from "@/pages(notNEXT)/TrainersPage/styles/TrainersPage.module.scss";
import {FiltrationInner, SearchItemsListSection} from "@/widgets/api/Widgets";
import {setIsFetching, setStatus} from "@/app/lib/store/actions/filterActions";
import {statuses} from "@/app/lib/store/constants/courseConstants";

const SearchItems = ({fetchItems, query,
                         sort, filtrationItems,
                         renderSearchedItem, children}) => {
    const [filteredItems, setFilteredItems] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.sessionReducer.isLoading);
    const filterState = useSelector(state => state.filterReducer);

    const fetchItemsWrapper = () => {
        if (filterState.price.min && filterState.price.max) {
            query.range = filterState.price;
        }
        fetchItems(query, sort).then(res => {
            if (!res || res.length === 0) {
                setIsEmpty(true);
            } else {
                setIsEmpty(false);
            }
            setFilteredItems(res);
        })
            .catch(e => console.log(e))
            .finally(() => {
                dispatch(setIsLoading(false));
                dispatch(setStatus(statuses.CREATING));
            });
    }
/*    useEffect(() => {
        fetchItemsWrapper();
    }, []);*/
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
            dispatch(setStatus(statuses.FETCHING));
        }
    }, [query, sort]);

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