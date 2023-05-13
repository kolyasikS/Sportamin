import React, { useLayoutEffect, useState } from 'react';

function useWindowSize(isClientWidth=true) {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([isClientWidth
                ? document.documentElement.clientWidth
                : window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default useWindowSize;