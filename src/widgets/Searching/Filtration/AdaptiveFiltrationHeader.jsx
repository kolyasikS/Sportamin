import React from 'react';
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import searchImg from "@assets/searchImage.png";
import useWindowSize from "@/app/lib/features/hooks/useWindowSize";
import styles from './styles/AdaptiveFiltrationHeader.module.scss';
import {FiltrationInner} from "@/widgets/api/Widgets";
import {useSelector} from "react-redux";
import {filtrationItems} from "@/app/Static Data/Filtration/Filtration";

const AdaptiveFiltrationHeader = ({children, search,
                                      isOpen}) => {
    const [width] = useWindowSize(false);
    const isLoading = useSelector(state => state.sessionReducer.isLoading);

    return (
        width > 1280
            ? <>
                {children}
                <DarkBtnWithImg img={searchImg} widthImg={30} onClick={search}></DarkBtnWithImg>
            </>
            : <aside className={`${styles.aside} ${isOpen ? styles.active : styles.disabled}`}>
                <div className={styles.menu}>
                    {children}
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