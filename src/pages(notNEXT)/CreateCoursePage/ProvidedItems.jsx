import React, {useState} from 'react';
import styles from './styles/ProvidedItems.module.scss';
import Image from "next/image";
import NewProvideItem from "@/pages(notNEXT)/CreateCoursePage/NewProvideItem";
import ProvideItem from "@/pages(notNEXT)/CreateCoursePage/ProvideItem";
import {v4} from "uuid";
const ProvidedItems = () => {
    const [items, setItems] = useState([]);
    const editItems = (id, value) => {
        setItems(items.map(item => item.id === id ? {id, title: value} : item));
    }
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }
    return (
        <div>
            {items.map((item, num) =>
                <ProvideItem {...item} key={item.id} number={num + 1}
                             removeItem={() => removeItem(item.id)}
                             editItems={(value) => editItems(item.id, value)}
                />
            )}
            <NewProvideItem number={items.length + 1} setItems={setItems}/>
        </div>
    );
};

export default ProvidedItems;