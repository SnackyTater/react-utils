import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use((config) => {
    //adding cookie to header
    config.headers['Authorization'] = `Bearer ${'decryptedToken'}`;
    return config;
});

instance.interceptors.response.use((config) => config);

export default instance;