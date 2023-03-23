import React, {useEffect, useState} from 'react';

const UseUppercaseButton = (uppercase, size) => {
    const [style, setStyle] = useState({width: size.width, height: size.height});
    useEffect(() => {
        if (uppercase) {
            setStyle({...style, textTransform: 'uppercase'});
        } else {
            delete style.textTransform;
            setStyle(style);
        }
    }, [uppercase]);

    return style;
};

export default UseUppercaseButton;