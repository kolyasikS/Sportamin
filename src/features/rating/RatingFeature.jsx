import React, {useEffect, useState} from 'react';
import RatingBar from "@/shared/ui/Rating/RatingBar/RatingBar";
import Image from "next/image";
import cancel from '@assets/cancel.png';
const RatingFeature = ({isRated, setIsRated, setRating}) => {
    const [rating, setRatingState] = useState(1);
    useEffect(() => {
        setRating(rating);
    }, [rating])
    return (
        <>
            <RatingBar rating={rating} isRated={isRated}
                       setRating={!isRated && setRatingState}
                       size={24} setIsRated={setIsRated}
            />
            <Image src={cancel} alt={''} width={15} onClick={() => {
                        setIsRated(false)
                   }}
                   style={{transform: 'rotate(45deg)'}}
                   className={'relative top-[-2px] ml-3 cursor-pointer'}/>
        </>
    );
};

export default RatingFeature;