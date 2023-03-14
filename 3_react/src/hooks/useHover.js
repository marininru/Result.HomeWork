import { useState, useRef, useEffect } from 'react';

export function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const elem = ref.current;
        if (!elem) return;

        function onMouseOver() {
            setHovered(true);
        }

        function onMouseOut() {
            setHovered(false);
        }

        elem.addEventListener('mouseover', onMouseOver);
        elem.addEventListener('mouseout', onMouseOut);

        return () => {
            elem.removeEventListener('mouseover', onMouseOver);
            elem.removeEventListener('mouseout', onMouseOut);
        };
    }, [ref]);

    return { hovered, ref };
}
