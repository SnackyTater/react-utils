import {useEffect, useState} from "react";

const useDebounceValue = (value: any, timeout: number = 300) => {
    const [debouncedValue, setDebouncedValue] = useState<any>(value);

    useEffect(() => {
        const timeoutID = setTimeout(() => setDebouncedValue(value), timeout);
        return () => clearTimeout(timeoutID);
    }, [value]);

    return debouncedValue;
}

export default useDebounceValue;