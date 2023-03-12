import { useState, useRef } from 'react';

export function useToggle(valArray) {
    const indexRef = useRef(0);
    const [value, setValue] = useState(valArray[0]);

    const toggle = val => {
        if (val) {
            setValue(val);
        } else {
            indexRef.current = indexRef.current === valArray.length - 1 ? 0 : indexRef.current + 1;
            setValue(valArray[indexRef.current]);
        }
    };

    return [value, toggle];
}
