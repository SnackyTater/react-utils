import { useMemo, useRef, useState } from "react"
import { Select, Form } from "antd"
import type { RefSelectProps } from "antd"

const baseOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
]

const SelectPage = () => {
    const [options, setOptions] = useState<typeof baseOptions>(baseOptions)

    const selectRef = useRef<RefSelectProps>()

    const [form] = Form.useForm()

    const calculatedOptions: Record<string, string> = useMemo(() => {
        return options.reduce((prev, cur) => {
            return {...prev, [cur.value]: true}
        }, {})
    }, [options])

    const handleOnClick = () => selectRef.current?.blur()

    const handleChanges = (values: string[]) => {
        const isNewTagExist = values.find(item => !calculatedOptions[item])
        console.log('new', isNewTagExist)
        
        if(isNewTagExist) {
            selectRef.current?.blur()
            setTimeout(() => {
                setOptions(prev => [...prev, {label: isNewTagExist, value: isNewTagExist}])
            }, 300)
            
        }
    }

    console.log('outsine', options)

    return <div className='p-5'>
        <p>select</p>
        <Form form={form}>
            <Form.Item name={'tags'} label={'tags'}>
                <Select
                    mode="tags"
                    className="w-[200px]"
                    ref={selectRef as any}
                    options={options}
                    onChange={handleChanges}
                    optionRender={(option) => {
                        console.log(options, option)
                        const isTagExist = options.find(item => item.label === option.label)
                        if (isTagExist) return <div>{option.label}</div>
                        return <div onClick={handleOnClick}>New: {option.label}</div>
                    }}
                />
            </Form.Item>
        </Form>
    </div>
}

export default SelectPage