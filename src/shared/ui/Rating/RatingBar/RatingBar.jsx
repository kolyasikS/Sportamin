import React, {useEffect, useState} from 'react';
import {OutlineRatingStar, SolidRatingStar} from "@/shared/ui/Rating/api/rating";

const RatingBar = ({rating}) => {
    const [ratingStars, setRatingStars] = useState([]);
    useEffect(() => {
        const starsComponents = [];
        let count = 5;
        while (count) {
            if (rating >= 1) {
                starsComponents.push(<SolidRatingStar/>);
                rating--;
            } else if (rating > 0) {
                rating -= 0.5;
                starsComponents.push(<SolidRatingStar isHalf={true}/>);
            } else {
                starsComponents.push(<OutlineRatingStar/>);
            }
            count--;
        }
        setRatingStars(starsComponents);
    }, [rating]);
    return (
        ratingStars.map(component => component)
    );
};

export default RatingBar;