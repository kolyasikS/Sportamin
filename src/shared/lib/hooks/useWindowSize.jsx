import React, { useLayoutEffect, useState } from 'react';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([document.documentElement.clientWidth , window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default useWindowSize;