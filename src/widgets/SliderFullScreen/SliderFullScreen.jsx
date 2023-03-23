import React, {cloneElement, useEffect, useMemo, useRef, useState} from 'react';
import SlideFs from "@/widgets/SliderFullScreen/SlideFS";
import styles from './SliderFullScreen.module.scss';
import {SliderButton} from "@/shared/ui/Buttons/api/Buttons";
import leftArrow from "../../../public/media/images/arrow-left.png";
import rightArrow from "../../../public/media/images/arrow-right.png";
import {useWindowSize} from "@/shared/lib/api/hooks";
const TRANSITION_DURATION = 1000;
const SliderFullScreen = ({slides}) => {
    const [CurrentSlides, setCurrentSlides] = useState([slides]);
    const isFirstRender = useRef(true);
    const [width, height] = useWindowSize();
    const [offset, setOffset] = useState(0);
    const [clones, setClones] = useState({head: 0, tail: 0});
    const [timeoutID, setTimeoutID] = useState(null);
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION);
    useEffect(() => {
        setCurrentSlides([
            Object.assign({}, slides[slides.length - 1]),
            ...slides,
            Object.assign({}, slides[0])
        ].map((item, ind) => {
            ind === 1 ? item.active = true : item.active = false;
            return item;
        }));
        setClones({head: 1, tail: 1});
    }, [slides]);
    useEffect(() => {
        setOffset(-(width * clones.tail));
    }, [clones]);
    useEffect(() => {
        if (isFirstRender.current) {
            return;
        }
        if (offset === 0 ) {
            setTimeoutID(setTimeout(() => {
                setTransitionDuration(0);
                setOffset(-(width * (CurrentSlides.length - 1 - clones.tail)));
                setTimeoutID(null);
            }, 1000));
            CurrentSlides[0].active = false;
            CurrentSlides[CurrentSlides.length - clones.tail - 1].active = true;
            return;
        }
        if (offset === -(width * (CurrentSlides.length - 1))) {
            setTimeoutID(setTimeout(() => {
                setTransitionDuration(0);
                setOffset(-(width * clones.head));
                setTimeoutID(null);
            }, 1000));
            CurrentSlides[CurrentSlides.length - clones.tail].active = false;
            CurrentSlides[1].active = true;
            return;
        }
    }, [width, offset, clones, CurrentSlides]);

    const moveSliderForward = (setActive) => {
        isFirstRender.current = false;
        if (timeoutID) {
            return;
        }
        if (!transitionDuration) {
            setTransitionDuration(TRANSITION_DURATION);
        }
        setOffset(currentOffset => {
            const newOffset = currentOffset - width;
            const maxOffset = -width * (CurrentSlides.length - 1);
            return Math.max(newOffset, maxOffset);
        });
        let indOfActive = -1;
        setCurrentSlides(CurrentSlides.map((item, ind) => {
            if (!item.active && CurrentSlides[ind - 1]?.active && indOfActive < ind) {
                item.active = true;
                CurrentSlides[ind - 1].active = false;
                indOfActive = CurrentSlides.length;
            }
            return item;
        }));
    };
    const moveSliderBack = (setActive) => {
        isFirstRender.current = false;
        if (timeoutID) {
            return;
        }
        if (!transitionDuration) {
            setTransitionDuration(TRANSITION_DURATION);
        }
        setOffset(currentOffset => {
            const newOffset = currentOffset + width;
            return Math.min(newOffset, 0);
        });
        let indOfActive = -1;
        setCurrentSlides(CurrentSlides.map((item, ind) => {
            if (!item.active && CurrentSlides[ind + 1]?.active && indOfActive < ind) {
                item.active = true;
                CurrentSlides[ind + 1].active = false;
                indOfActive = CurrentSlides.length;
            }
            return item;
        }));
    };
    return (
        <>
            <div className={styles.wrapper} style={{
                translate: `${(offset)}px`,
                transitionDuration: `${transitionDuration}ms`
            }}>
                {CurrentSlides.map((slide, index) =>
                    <SlideFs key={index} title={slide.title} description={slide.description}
                        mainWords={slide.mainWords} onClick={slide.onClick} active={slide.active}
                    />
                )}
            </div>
            <div className={styles.sliderArrows}>
                <SliderButton src={leftArrow} onClick={moveSliderBack} ariaLabel={'left-btn'}></SliderButton>
                <SliderButton src={rightArrow} onClick={moveSliderForward} ariaLabel={'right-btn'}></SliderButton>
            </div>
        </>
    );
};

export default SliderFullScreen;