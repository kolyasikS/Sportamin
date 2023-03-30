import React from 'react';
import OutlineRatingStar from "@/shared/ui/Rating/RatingStar/OutlineRatingStar";

const SolidRatingStar = ({isHalf}) => {
    return (
        isHalf
        ? <svg width='20px' height='20px'>
            <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                 xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                 className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"
                 stroke={'#ffce31'} strokeWidth={2}
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                          fill="#ffce31">
                    </path>
                </g>
                <rect x="50%" y="-1" width="68" height="66" fill="#0D1117FF" stroke={'none'}/>
            </svg>
            <OutlineRatingStar/>
        </svg>
        : <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
              className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"
              stroke={'#ffce31'} strokeWidth={2}
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                          fill="#ffce31">
                    </path>
                </g>
            </svg>
    );
};

export default SolidRatingStar;