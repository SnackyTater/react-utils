import { useState } from "react";
import useDebounceValue from "@/hooks/useDebounceValue";
import { InputChangeEvent } from '@/types/component';

const UseDebounceValueHookPage = () => {
    const [input, setInput] = useState<string>('');
    const debouncedValue = useDebounceValue(input);

    const handleChange = (e: InputChangeEvent) => setInput(e.target.value);

    return <div>
        <input value={input} onChange={handleChange}/>
        <p>debounced value: {debouncedValue}</p>
    </div>
};

export default UseDebounceValueHookPage;