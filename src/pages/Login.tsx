import { useNavigate } from "react-router-dom";
import useAuthStore from "@/states/auth";
import { storeAuthSession } from "@/utils/session";
import axiosInstance from '@/services/axios/config';

const LoginPage = () => {
    const { setIsLogin } = useAuthStore();
    const navigate = useNavigate();

    const handleLogin = () => {
        axiosInstance.post('/login', {
            username: 'awawdawd',
            password: '123123',
        })
    }

    return <div>
        <p>login page</p>
        <div onClick={handleLogin}>login button</div>
    </div>
};

export default LoginPage;