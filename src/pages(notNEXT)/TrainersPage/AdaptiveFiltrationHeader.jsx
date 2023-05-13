import React, {useLayoutEffect, useState} from 'react';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import searchImg from "@assets/searchImage.png";
import useWindowSize from "@/app/lib/features/hooks/useWindowSize";
import styles from './styles/AdaptiveFiltrationHeader.module.scss';
import {FiltrationInner} from "@/widgets/api/Widgets";
import {useSelector} from "react-redux";
import {filtrationItems} from "@/app/Static Data/Filtration/Filtration";

const AdaptiveFiltrationHeader = ({nameRef, surnameRef,
                                      search, isOpen, setIsOpen}) => {
    const [width, height] = useWindowSize(false);
    const isLoading = useSelector(state => state.sessionReducer.isLoading);

    return (
        width > 1280
            ? <>
                <MainInput bgColor={'#0d1117'} color={'#c9d1d9'}
                           height={65} ref={nameRef}
                >
                    Name
                </MainInput>
                <MainInput bgColor={'#0d1117'} color={'#c9d1d9'}
                           height={65} ref={surnameRef}
                >
                    Surname
                </MainInput>
                <DarkBtnWithImg img={searchImg} widthImg={30} onClick={search}></DarkBtnWithImg>
            </>
            : <aside className={`${styles.aside} ${isOpen ? styles.active : ''}`}>
                <div className={styles.menu}>
                    <MainInput bgColor={'#161b22'} color={'#c9d1d9'}
                               height={65} ref={nameRef} width={'100%'}
                    >
                        Name
                    </MainInput>
                    <MainInput bgColor={'#161b22'} color={'#c9d1d9'}
                               height={65} ref={surnameRef} width={'100%'}
                    >
                        Surname
                    </MainInput>
                    <FiltrationInner items={filtrationItems}
                                     isLoading={isLoading} fullWidth={true}/>
                </div>
                <div className={`${styles.searchBtn} shadow-gray-900 shadow-xl`}>
                    <DarkBtnWithImg img={searchImg}
                                    widthImg={30} width={'100%'}
                                    onClick={search}>
                    </DarkBtnWithImg>
                </div>
            </aside>
    );
};

export default AdaptiveFiltrationHeader;