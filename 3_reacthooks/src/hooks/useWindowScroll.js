import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useWindowScroll() {
    const [scroll, setScroll] = useState({ x: 0, y: 0 });
    const onScroll = () => {
        setScroll({ x: window.scrollX, y: window.scrollY });
    };
    useWindowEvent('scroll', onScroll);

    const scrollTo = ({ x, y }) => {
        window.scroll(x, y);
    };

    return [scroll, scrollTo];
}
