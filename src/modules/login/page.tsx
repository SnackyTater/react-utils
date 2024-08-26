import AuthService from './services/auth-service';
import { encrypt, generateKey } from '@/utils/auth';
import { setCookie } from '@/utils/cookie';
import { useRef } from 'react';

const LoginPage = () => {

    const isClicked = useRef(false);

    const handleLogin = async() => {
        if(isClicked.current) return;
        console.log('hei')
        isClicked.current = true;
        setTimeout(() => {
            isClicked.current = false;
        }, 1000)
        // const res = await AuthService.login({
        //     username: 'abc',
        //     password: '123'
        // });
    };

    const handleTest = () => {
        const key = generateKey();
        console.log("key", key)
    }

    return <div style={{padding: 20}}>
        <p>login page</p>
        <div onClick={handleLogin}>login button</div>
        <button onClick={handleTest}>test API</button>
    </div>
};

export default LoginPage;