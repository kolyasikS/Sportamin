import {useEffect, useRef} from 'react';

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