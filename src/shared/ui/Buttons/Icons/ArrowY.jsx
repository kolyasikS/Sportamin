import React from 'react';

const ArrowY = ({isTrue}) => {
    return (
        isTrue
            ? <span aria-hidden="true" role="img">
                        <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">
                            </path>
                        </svg>
                    </span>
            : <span aria-hidden="true" role="img">
                        <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                            </path>
                        </svg>
            </span>
    );
};

export default ArrowY;