import { Snackbar } from "@/components/snackbars";
import { useNavigate } from "react-router-dom";
import { observer } from "@/utils/observer";
import { useEffect } from "react";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => navigate('/login');

    useEffect(() => {
        // setTimeout(() => {
        //     observer.notify('snackbar', {variant: 'success', message: 'hei hei'})
        //     observer.notify('snackbar', {variant: 'success', message: 'hei hei'})
        //     observer.notify('snackbar', {variant: 'success', message: 'hei hei'})
        // }, 1000)

        setInterval(() => {
            observer.notify('snackbar', {variant: 'success', message: 'hei hei'})
        }, (2000));
    }, [])


    return <div>LandingPage
        <button onClick={handleLogin}>login</button>
        <Snackbar />
    </div>
};

export default LandingPage;