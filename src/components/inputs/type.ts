import { InputChangeEvent } from "@/types/component";

export type BaseInputProps = {
    className?: string;
    disabled?: boolean;
    placeholder?: string;
    value: string | number;
    onChange: (event: InputChangeEvent) => void;
}