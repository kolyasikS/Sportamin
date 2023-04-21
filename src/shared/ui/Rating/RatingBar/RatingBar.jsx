import React, {useEffect, useMemo, useState} from 'react';
import {OutlineRatingStar, SolidRatingStar} from "@/shared/ui/Rating/api/rating";
import {v4} from "uuid";

const RatingBar = ({rating, fillColor, isDark = false}) => {
    const ratingStars = useMemo(() => {
        const starsComponents = [];
        let count = 5;
        while (count) {
            if (rating >= 1) {
                starsComponents.push(<SolidRatingStar key={v4()}
                                                      isDark={isDark} fillColor={fillColor}/>);
                rating--;
            } else if (rating > 0) {
                rating -= 0.5;
                starsComponents.push(<SolidRatingStar key={v4()} fillColor={fillColor}
                                                      isHalf={true} isDark={isDark}/>);
            } else {
                starsComponents.push(<OutlineRatingStar key={v4()} isDark={isDark}/>);
            }
            count--;
        }
        return starsComponents;
    }, [rating]);
    return (
        <span>
            {ratingStars.map(component => component)}
        </span>
    );
};

export default RatingBar;