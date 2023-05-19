import React, {useMemo, useState} from 'react';
import Page from "@/widgets/Pagination/Page";
import styles from './Pagination.module.scss';

const Pagination = ({page, setPage, amountPages}) => {
    const setActive = (num) => {
        setPage(num);
    }
    const paginationList = useMemo(() => {
        if (page < 6 && amountPages < 9) {
            return <ul>
                {[...new Array(amountPages)].map((item, ind) =>
                    <Page key={ind} num={ind + 1} value={ind + 1}
                          isActive={page === ind + 1}
                          setActive={setActive}/>)}
            </ul>
        } else if (page > 5 && amountPages > 8 && amountPages - page > 4) {
            let ind = page - 3;
            return <ul>
                <Page num={1} value={1}
                      isActive={false}
                      setActive={setActive}/>
                {[...new Array(7)].map((item, num, arr) =>
                    <Page key={ind++} num={num === 0 || num === arr.length - 1 ? '...' : ind}
                          isActive={page === ind} value={ind}
                          setActive={setActive}/>)}
                <Page key={amountPages} num={amountPages}
                      isActive={false} value={amountPages}
                      setActive={setActive}/>
            </ul>
        } else if (page < 6 && amountPages > 8) {
            return <ul>
                {[...new Array(8)].map((item, ind, arr) =>
                    <Page key={ind} num={ind === arr.length - 1 ? '...' : ind + 1}
                          isActive={page === ind + 1} value={ind + 1}
                          setActive={setActive}/>)}
                <Page key={amountPages} num={amountPages}
                      isActive={false} value={amountPages}
                      setActive={setActive}/>
            </ul>
        } else if (page > 5 && amountPages > 8 && amountPages - page < 5) {
            let ind = amountPages - 7;
            return <ul>
                <Page key={1} num={1} value={1}
                      isActive={false}
                      setActive={setActive}/>
                {[...new Array(8)].map((item, num) =>
                    <Page key={ind++} num={num === 0 ? '...' : ind}
                          value={ind}
                          isActive={page === ind}
                          setActive={setActive}/>)}
            </ul>
        }
    }, [page, amountPages]);
    return (
        <div className={styles.pagination}>
            {paginationList}
        </div>
    );
};

export default Pagination;