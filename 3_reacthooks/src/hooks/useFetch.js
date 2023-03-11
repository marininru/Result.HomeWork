import { useState, useCallback } from 'react';

export function useFetch(url) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const refetch = useCallback(
        async ({ params }) => {
            setIsLoading(true);
            try {
                const response = await fetch(url);

                if (response.ok) {
                    let json = await response.json();
                    if (params?._limit) {
                        json.length = params._limit;
                    }
                    setData(json);
                } else {
                    setError(`Error: ${response.status}`);
                }
            } catch (err) {
                setError(`Error: ${err.message}`);
            } finally {
                setIsLoading(false);
            }
        },
        [url]
    );

    return { data, isLoading, error, refetch };
}
