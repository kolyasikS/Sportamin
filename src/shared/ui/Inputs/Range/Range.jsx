import React, {useEffect, useMemo, useRef, useState} from 'react';
import styles from './Range.module.scss';

const Range = () => {
    const [leftBtnX, setLeftBtnX] = useState(null);
    const [rightBtnX, setRightBtnX] = useState(null);
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
        rightBtn.current.style.left = '90%';
        setRightBtnX({left: rightBtnPos.left, width: rightBtnPos.width});
    }, []);

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
        let pixelsInOnePercent = distance / 90;

        const onMouseMove = (e) => {
            console.log(leftBtn.current.style.left, ' ', rightBtn.current.style.left);


            moveAt(eventBtn.target, e.pageX, eventBtn.nativeEvent.offsetX);
        }
        function moveAt(btn, pageX, offsetX) {
            let percents;
            let pixels;
            let difference;
            if (btn === leftBtn.current) {
                pixels = pageX - leftBtnX.left - offsetX;
                percents = Math.round(pixels / pixelsInOnePercent);
                difference = parseFloat(rightBtn.current.style.left) - percents;
                if (difference < 10) {
                    btn.style.left = parseFloat(rightBtn.current.style.left) - 10 + '%';
                    return;
                }
                if (percents >= 0) {
                    emptyLineRef.current.style.setProperty('margin-left', `calc(${percents}% + ${leftBtnX.width}px)`);
                    console.log(emptyLineRef.current.style.marginLeft);
                    emptyLineRef.current.style.width = difference + '%';
                } else {
                    emptyLineRef.current.style.setProperty('margin-left', `calc(0% + ${leftBtnX.width}px)`);
                    emptyLineRef.current.style.width = 90 + '%';
                }
            } else {
                pixels = pageX - rightBtnX.left - offsetX;
                percents = 90 + Math.round( pixels / pixelsInOnePercent);
                difference = percents - parseFloat(leftBtn.current.style.left);
                if (percents - parseFloat(leftBtn.current.style.left) < 10) {
                    btn.style.left = parseFloat(leftBtn.current.style.left) + 10 + '%';
                    return;
                }
                console.log(emptyLineRef.current.style, difference);
                emptyLineRef.current.style.width = difference + '%';

            }
            if (percents > 90) {
                percents = 90;
            } else if (percents < 0) {
                percents = 0;
            }
            btn.style.left = percents + '%';
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup',
            () => document.removeEventListener('mousemove', onMouseMove));
    }


    const mouseUp = () => {
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
                        onMouseUp={mouseUp}></button>
                <button className={styles.button}
                        onMouseDown={mouseDown} ref={rightBtn}
                        onMouseUp={mouseUp}></button>
            </div>
        </div>
    );
};

export default Range;