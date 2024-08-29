import { ElementClickEvent } from "@/types/component";

export type BaseButtonProps = {
    children: React.ReactNode;
    onClick: (event: ElementClickEvent) => void;
    disabled?: boolean;
}