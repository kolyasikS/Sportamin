import React from 'react';
import styles from './styles/TrainersPage.module.scss';
import {filtrationItems} from "@/app/Static Data/Filtration/Filtration";
import {FiltrationHeader, FiltrationInner} from "@/widgets/api/Widgets";
const SearchTrainers = () => {
    return (
        <section className={styles.trainersSection}>
            <FiltrationHeader/>
            <div>
                <FiltrationInner items={filtrationItems}/>
                <div>
                </div>
            </div>
        </section>
    );
};

export default SearchTrainers;