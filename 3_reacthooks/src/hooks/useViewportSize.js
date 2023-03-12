import { useState, useEffect } from 'react';

export function useViewportSize() {
    const [height, setHeight] = useState(document.documentElement.clientHeight);
    const [width, setWidth] = useState(document.documentElement.clientWidth);

    useEffect(() => {
        const onResize = () => {
            setHeight(document.documentElement.clientHeight);
            setWidth(document.documentElement.clientWidth);
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return { height, width };
}
