import React, {useEffect, useState} from 'react';
import styles from './styles/ProvidedItems.module.scss';
import NewProvideItem from "@/pages(notNEXT)/CreateCoursePage/NewProvideItem";
import ProvideItem from "@/pages(notNEXT)/CreateCoursePage/ProvideItem";
import {v4} from "uuid";
import {useSelector} from "react-redux";
import {statuses} from "@/app/lib/store/constants/generalConstants";
const ProvidedItems = ({title, indent, getItems, initItems}) => {
    const [items, setItems] = useState([]);

    const createStatus = useSelector(state => state.courseReducer.status);
    const editItems = (id, value) => {
        setItems(items.map(item => item.id === id ? {id, title: value} : item));
    }
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }
    useEffect(() => {
        if (createStatus === statuses.FETCHING) {
            getItems(items);
        }
    }, [createStatus]);
    useEffect(() => {
        if (initItems) {
            setItems(initItems.map(item => ({title: item, id: v4()})));
        }
    }, [initItems])
    return (
        <div className={styles.newItem}>
            {items.map((item, num) =>
                <ProvideItem {...item} key={item.id} number={num + 1}
                             removeItem={() => removeItem(item.id)}
                             editItems={(value) => editItems(item.id, value)}
                />
            )}
            <NewProvideItem number={items.length + 1}
                            setItems={setItems}
                            title={title}
                            indent={indent}
            />
        </div>
    );
};

export default ProvidedItems;