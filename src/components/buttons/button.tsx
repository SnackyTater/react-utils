import type { BaseButtonProps } from './type';

const BaseButton = (props: BaseButtonProps) => {

    return <button
        disabled={props.disabled}
        onClick={props.onClick}
    >
        {props.children}
    </button>
};

export default BaseButton;