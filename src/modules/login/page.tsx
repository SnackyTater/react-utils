import AuthService from './services/auth-service';
import { encrypt, generateKey } from '@/utils/auth';
import { setCookie } from '@/utils/cookie';

const LoginPage = () => {

    const secret = import.meta.env.VITE_AUTH_SECRET;

    const handleLogin = async() => {
        const res = await AuthService.login({
            username: 'abc',
            password: '123'
        });

        

        if(res.success){
            const encryptedToken = await encrypt(res.data.token, secret);
            setCookie('token', encryptedToken)
        } 
    };

    const handleTest = () => {
        const key = generateKey();
        console.log("key", key)
    }

    return <div>
        <p>login page</p>
        <div onClick={handleLogin}>login button</div>
        <button onClick={handleTest}>test API</button>
    </div>
};

export default LoginPage;