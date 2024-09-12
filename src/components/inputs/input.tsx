import { BaseInputProps } from './type';

const BaseInput = (props: BaseInputProps) => {
    return <input 
        className="w-full h-[30px] border border-[#00000099] rounded"
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        type=''
    />
}

export default BaseInput;