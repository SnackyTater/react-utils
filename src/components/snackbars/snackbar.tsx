import { useState, useEffect, memo } from "react"

type SnackbarMessage = {
    id: number,
    variant: 'success' | 'failure',
    message: string
    close: (value: number) => void;
}

export const SnackbarItem = memo((props: SnackbarMessage) => {
    const [isShow, setIsShow] = useState<boolean>(true);
    const [outro, setOutro] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsShow(false)
        }, 3000)
    }, [])

    useEffect(() => {
        if(!isShow){
            setTimeout(() => {
                setOutro(true)
            },400)

            setTimeout(() => props.close(props.id), 450)
        }
    }, [isShow])



    return <div 
        className={`w-[400px] bg-[green] text-white px-3 py-2 rounded-lg flex justify-between items-center ${isShow ? 'snackbar-entry' : 'snackbar-out'} ${outro && 'hidden'}`}
        key={props.id}
    >
        <p>{props.message}</p>
        <button className="">x</button>
    </div>
})