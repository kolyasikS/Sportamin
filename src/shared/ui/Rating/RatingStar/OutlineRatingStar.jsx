import React, {useState} from 'react';

const OutlineRatingStar = ({size, isDark, setRating, count}) => {
    const [stroke, setStroke] = useState(isDark ? '#161621' : '#ffce31')
    const toRateOnHover = () => {
        if (setRating) {
            setRating(count);
        }
    }
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
             xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
             className={`hover:cursor-pointer`} preserveAspectRatio="xMidYMid meet"
            stroke={stroke} strokeWidth={2} fill={'none'} onMouseEnter={toRateOnHover}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                      fill="none">
                </path>
            </g>

        </svg>
    );
};

export default OutlineRatingStar;