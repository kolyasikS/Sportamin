import React from 'react';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {DarkBtnWithImg, GBButton, RBButton} from "@/shared/ui/Buttons/api/Buttons";
import Image from "next/image";
import styles from './styles/FiltrationHeader.module.scss';
import filterImg from '@assets/filter.png';
import searchImg from '@assets/searchImage.png';
import cancelImg from '@assets/cancelImg.png';
const FiltrationHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.filterBlock}>
                <DarkBtnWithImg img={filterImg} width={20}>Filter (1)</DarkBtnWithImg>
                <button className={styles.sortBtn}>
                    <div>
                        <span>Sort by</span>
                        <p>Rating</p>
                    </div>
                    <span className={styles.dropdownCaret}></span>
                </button>
                <MainInput bgColor={'#0d1117'} color={'#c9d1d9'} height={65}>Name</MainInput>
                <MainInput bgColor={'#0d1117'} color={'#c9d1d9'} height={65}>Surname</MainInput>
                <DarkBtnWithImg img={searchImg} width={30}></DarkBtnWithImg>
            </div>
            <div className={styles.clearFilterBlock}>
                <DarkBtnWithImg img={cancelImg} width={20}>Clear filters</DarkBtnWithImg>
            </div>
        </div>
    );
};

export default FiltrationHeader;