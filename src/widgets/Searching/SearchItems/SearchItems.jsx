import React, {useDeferredValue, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIsLoading} from "@/app/lib/store/actions/sessionActions";
import styles from "@/pages(notNEXT)/TrainersPage/styles/TrainersPage.module.scss";
import {FiltrationInner, SearchItemsListSection} from "@/widgets/api/Widgets";

const SearchItems = ({fetchItems, query,
                         sort, filtrationItems,
                         renderSearchedItem, children}) => {
    const [filteredItems, setFilteredItems] = useState([]);
    const deferredSearchedItems = useDeferredValue(filteredItems);
    const [isEmpty, setIsEmpty] = useState(false);

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.sessionReducer.isLoading);

    useEffect(() => {
        if (!Object.keys(sort).length) {
            return;
        }
        if (!isLoading) {
            dispatch(setIsLoading(true));
        } else {
            return;
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
        });

    }, [query, sort]);

    return (
        <section className={styles.trainersSection}>
            {children}
            <div className={styles.trainersSectionInner}>
                <FiltrationInner items={filtrationItems} isLoading={isLoading}/>
                <SearchItemsListSection isEmpty={isEmpty} searchedItems={deferredSearchedItems}
                                        renderSearchedItem={renderSearchedItem}
                />
            </div>
        </section>
    );
};

export default SearchItems;