import React, {useEffect, useRef} from 'react';
import {value} from "lodash/seq";

const useDynamicInput = (dependObject, value) => {
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            if (value) {
                inputRef.current.value = value;
            }
        }
    }, [dependObject])

    return inputRef;
};

export default useDynamicInput;