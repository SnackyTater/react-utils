import axios from "axios";
import { getCookieValue } from "@/utils/cookie";
import { decrypt } from "@/utils/auth";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use((config) => {
    const encryptedToken = getCookieValue('token');
    const decryptedToken = decrypt(encryptedToken);

    //adding cookie to header
    config.headers['Authorization'] = `Bearer ${decryptedToken}`;
    console.log('config', config)
    return config;
});

instance.interceptors.response.use((config) => {
    try{
        console.log('response', config)
        return config;
    } catch(err) {
        console.log('response error', config)
        return config;
    }
});

export default instance;