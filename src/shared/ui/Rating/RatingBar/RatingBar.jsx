import React, {useEffect, useMemo, useState} from 'react';
import {OutlineRatingStar, SolidRatingStar} from "@/shared/ui/Rating/api/rating";
import {v4} from "uuid";

const RatingBar = ({rating}) => {
    const ratingStars = useMemo(() => {
        const starsComponents = [];
        let count = 5;
        while (count) {
            if (rating >= 1) {
                starsComponents.push(<SolidRatingStar key={v4()}/>);
                rating--;
            } else if (rating > 0) {
                rating -= 0.5;
                starsComponents.push(<SolidRatingStar key={v4()} isHalf={true}/>);
            } else {
                starsComponents.push(<OutlineRatingStar key={v4()}/>);
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