import { useState, useCallback } from 'react';

// const STORAGE_KEY = "KEY_FOR_TOKEN";

export function useLocalStorage(key) {
    const [token, setToken] = useState(() => localStorage.getItem(key));
    const setItem = useCallback(
        token => {
            localStorage.setItem(key, token);
            setToken(token);
        },
        [key]
    );
    const removeItem = useCallback(() => {
        localStorage.removeItem(key);
        setToken(undefined);
    }, [key]);

    return [token, { setItem, removeItem }];
}
