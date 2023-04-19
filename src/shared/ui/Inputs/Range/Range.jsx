import React, {useEffect, useMemo, useRef, useState} from 'react';
import styles from './Range.module.scss';

const Range = ({minValue, maxValue, setRange}) => {
    const value = useRef((maxValue - minValue) / 100);
    const [rightBtnX, setRightBtnX] = useState(null);
    const [leftBtnX, setLeftBtnX] = useState(null);
    const leftBtn = useRef();
    const rightBtn = useRef();
    const emptyLineRef = useRef();
    const distance = useMemo(() => {
        if (!leftBtn.current || !rightBtn.current) {
            return null;
        }

        return getDistance();
    }, [leftBtn.current?.style.left, rightBtn.current?.style.left]);
    useEffect(() => {
        let {left, width} = leftBtn.current.getBoundingClientRect();
        leftBtn.current.style.left = '0%';
        setLeftBtnX({left, width});

        let rightBtnPos = rightBtn.current.getBoundingClientRect();
        rightBtn.current.style.left = '100%';
        setRightBtnX({left: rightBtnPos.left, width: rightBtnPos.width});

    }, []);
    const setNewRange = () => {
        const difference = parseFloat(rightBtn.current.style.left) - parseFloat(leftBtn.current.style.left);

        let minResult = parseFloat(leftBtn.current.style.left);
        let maxResult = parseFloat(rightBtn.current.style.left);
        minResult = minResult === 90 ? 100 : minResult; //100 - (difference === 10 ? difference - 10 : difference);
        console.log(difference, minResult, maxResult);
        maxResult = difference <= 10 ? minResult : maxResult; //100 - (difference === 10 ? difference - 10 : difference);
        setRange(
            ( minResult < 1 ? 1 : minResult)  * value.current,
            maxResult * value.current,
        );
    }
    function getDistance() {
        let {left, width} = leftBtn.current.getBoundingClientRect();
        let leftX = left + width / 2;

        let rightBtnPos = rightBtn.current.getBoundingClientRect();
        let rightX = rightBtnPos.left + rightBtnPos.width / 2;

        return rightX - leftX;
    }
    const mouseDown = (eventBtn) => {
        if (!leftBtn.current || !rightBtn.current
        || !leftBtnX || !rightBtnX) {
            return;
        }
        let pixelsInOnePercent = distance / 100;

        const onMouseMove = (e) => {

            moveAt(eventBtn.target, e.pageX, eventBtn.nativeEvent.offsetX);
        }
        function moveAt(btn, pageX, offsetX) {
            let percents;
            let pixels;
            let difference;
            if (btn === leftBtn.current) {
                pixels = pageX - leftBtnX.left - offsetX;

                if (pixels < 0) {
                    emptyLineRef.current.style.setProperty('margin-left', `0px`);
                    emptyLineRef.current.style.width = parseFloat(rightBtn.current.style.left)
                        - parseFloat(leftBtn.current.style.left) + '%';
                    btn.style.left = 0 + '%';
                    setNewRange();
                    return;
                }
                percents = Math.round(pixels / pixelsInOnePercent);

                difference = parseFloat(rightBtn.current.style.left) - percents;

                if (difference < 10) {
                    btn.style.left = parseFloat(rightBtn.current.style.left) - 10 + '%';
                    emptyLineRef.current.style.width = 0 + '%';
                    setNewRange();
                    return;
                }
                if (percents >= 0) {
                    emptyLineRef.current.style.setProperty('margin-left', `calc(${percents}% + ${leftBtnX.width}px)`);
                } else {
                    emptyLineRef.current.style.setProperty('margin-left', `calc(0% + ${leftBtnX.width}px)`);
                }
                emptyLineRef.current.style.width = difference + '%';
            } else {
                pixels = pageX - rightBtnX.left - offsetX;

                if (pixels > 0) {
                    emptyLineRef.current.style.width = parseFloat(rightBtn.current.style.left)
                        - parseFloat(leftBtn.current.style.left) + '%';
                    btn.style.left = 100 + '%';
                    setNewRange();
                    return;
                }
                percents = 100 + Math.round( pixels / pixelsInOnePercent);
                difference = percents - parseFloat(leftBtn.current.style.left);


                if (difference < 10) {
                    btn.style.left = parseFloat(leftBtn.current.style.left) + 10 + '%';
                    emptyLineRef.current.style.width = 0 + '%';
                    setNewRange();
                    return;
                }
                if (percents - parseFloat(leftBtn.current.style.left) < 10) {
                    btn.style.left = parseFloat(leftBtn.current.style.left) + 10 + '%';
                    setNewRange();
                    return;
                }
                emptyLineRef.current.style.width = difference + '%';

            }
            if (percents > 100) {
                percents = 100;
            } else if (percents < 0) {
                percents = 0;
            }
            btn.style.left = percents + '%';
            setNewRange();
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup',
            () => document.removeEventListener('mousemove', onMouseMove));
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.range}>
                <div className={styles.rangeEmpty}>
                    <div className={styles.emptyLine} ref={emptyLineRef}>

                    </div>
                </div>
                <button className={styles.button}
                        onMouseDown={mouseDown} ref={leftBtn} onDragStart={() => false}
                        ></button>
                <button className={styles.button}
                        onMouseDown={mouseDown} ref={rightBtn}
                        ></button>
            </div>
        </div>
    );
};

export default Range;