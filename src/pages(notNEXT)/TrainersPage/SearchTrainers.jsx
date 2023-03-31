import React, {useMemo} from 'react';
import styles from './styles/TrainersPage.module.scss';
import {filtrationItems} from "@/app/Static Data/Filtration/Filtration";
import trainers from "@/app/Static Data/Trainers(temp)/Trainers";
import {FiltrationHeader, FiltrationInner, SearchItemsList} from "@/widgets/api/Widgets";
import {SearchedTrainer} from "@/shared/ui/SearchItems/api/searchedItems";
const SearchTrainers = () => {
    const searchedItems = useMemo(() => {
        return trainers.map(item => <SearchedTrainer key={item.id} {...item}/>)
    }, [trainers])
    return (
        <section className={styles.trainersSection}>
            <FiltrationHeader/>
            <div>
                <FiltrationInner items={filtrationItems}/>
                <SearchItemsList items={searchedItems}/>
            </div>
        </section>
    );
};

export default SearchTrainers;