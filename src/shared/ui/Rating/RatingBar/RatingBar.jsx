import React, {useMemo} from 'react';
import {OutlineRatingStar, SolidRatingStar} from "@/shared/ui/Rating/api/rating";
import {v4} from "uuid";

const RatingBar = ({rating, fillColor, size=16, setIsRated, isRated,
                       setRating, isDark = false}) => {
    const ratingStars = useMemo(() => {
        const starsComponents = [];
        let count = 5;
        while (count) {
            if (rating >= 1) {
                starsComponents.push(<SolidRatingStar key={v4()} count={6 - count} setRating={setRating}
                                                      isDark={isDark} fillColor={fillColor} size={size}/>);
                rating--;
            } else if (rating > 0) {
                rating -= 0.5;
                starsComponents.push(<SolidRatingStar key={v4()} fillColor={fillColor} size={size}
                                                      count={6 - count} setRating={setRating}
                                                      isHalf={true} isDark={isDark}/>);
            } else {
                starsComponents.push(<OutlineRatingStar key={v4()} isDark={isDark} setRating={setRating}
                                                        count={6 - count} size={size}/>);
            }
            count--;
        }
        return starsComponents;
    }, [rating, isRated]);
    return (
        <span onClick={() => {
            setIsRated(true)
        }}>
            {ratingStars.map(component => component)}
        </span>
    );
};

export default RatingBar;