import React, {useState} from 'react';
import OutlineRatingStar from "@/shared/ui/Rating/RatingStar/OutlineRatingStar";

const SolidRatingStar = ({isHalf, isDark, fillColor,
                             setRating, count, size}) => {
    const [stroke, setStroke] = useState(isDark ? '#161621' : '#ffce31');
    const [fillStar, setFillStar] = useState(isDark ? '#4669ea' : '#ffce31');
    const [fillRect, setFillRect] = useState(isDark ? fillColor : '#0D1117FF');
    const toRateOnHover = () => {
        if (setRating) {
            setRating(count);
        }
    }
    return (
        isHalf
        ? <svg width={size} height={size}>
            <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                 xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                 className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"
                 stroke={stroke} strokeWidth={2}
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                          fill={fillStar}>
                    </path>
                </g>
                <rect x="50%" y="-1" width={size*4} height={size*4} fill={fillRect} stroke={'none'}/>
            </svg>
            <OutlineRatingStar isDark={isDark}/>
        </svg>
        : <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
              className={`hover:cursor-pointer`} preserveAspectRatio="xMidYMid meet" fill="#000000"
              stroke={stroke} strokeWidth={2} onMouseEnter={toRateOnHover}
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                          fill={fillStar}>
                    </path>
                </g>
            </svg>
    );
};

export default SolidRatingStar;