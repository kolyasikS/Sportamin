import React from 'react';
import {getImageFromBase64} from "@/app/lib/features/image";
import {SearchedTrainer} from "@/shared/ui/SearchItems/api/searchedItems";
import styles from './styles/TrainersItemsList.module.scss';
import {useSelector} from "react-redux";
import {Loading} from "@/shared/ui/Logos/api/Logos";

const TrainersItemsList = ({isEmpty, searchedTrainers}) => {
    const isLoading = useSelector(state => state.sessionReducer.isLoading);
    return (
        <div className={styles.searchedItemsBlock}>
            <div>
                {isLoading
                ?
                    <div className={styles.loadingBlock}>
                        <Loading/>
                    </div>
                : isEmpty
                    ? <h1 className={styles.notFoundResult}>Not found</h1>
                    : <ul className={`${styles.list}`}>
                        {searchedTrainers.map(item => <SearchedTrainer key={item._id} trainer={item.trainer} _id={item._id}
                                                                   src={getImageFromBase64(item.avatar.data)} name={item.name} surname={item.surname}/>)}
                    </ul>
                }
            </div>
        </div>
    );
};

export default TrainersItemsList;