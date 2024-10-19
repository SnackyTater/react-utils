import { useEffect, useState } from "react";
import { observer } from "@/utils/observer";
import { SnackbarItem } from "./snackbar";
import './snackbar.css';

type SnackbarMessage = {
    id: number,
    variant: 'success' | 'failure',
    message: string
}

const SnackbarContainer = () => {
    const [message, setMessage] = useState<SnackbarMessage[]>([]);

    useEffect(() => {
        observer.subscribe('snackbar', handleIncomingEvent)

        return () => observer.unsubscribe('snackbar', handleIncomingEvent)
    }, [])

    const handleIncomingEvent = (value: Omit<SnackbarMessage, 'id'>) => {
        setMessage(prev => [...prev, { id: Math.random(), ...value }]);
    }

    const handleDeleteMessage =(id: number) => {
        setMessage(prev => prev.filter(item => item.id !== id))
    }

    console.log('awdawdawdawd', message)

    return <div className="fixed w-[400px] h-[100px] top-3 right-3 flex flex-col gap-2">
        {message.map(item => <SnackbarItem key={item.id} close={handleDeleteMessage} {...item}/>)}
        <p>awdawdawd</p>
        {/* <div className="sample"/> */}
    </div>
}

export default SnackbarContainer