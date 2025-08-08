import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { InterceptorController } from "./interceptors";

type AxiosCustomRequestConfig = AxiosRequestConfig & { retry: boolean }

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
}); 

const MasterInterceptorController = new InterceptorController()

instance.interceptors.request.use((config) => {
  //adding cookie to header
  config.headers['Authorization'] = `Bearer ${'decryptedToken'}`;
  return config;
});

instance.interceptors.response.use((response) => response, async (error: AxiosError) => {
  const originalRequest = error.config as AxiosCustomRequestConfig

  //handle all the unauthorized request
  if (error.response?.status === 401 && !originalRequest.retry) {
    if (MasterInterceptorController.isRefreshing) {
      return new Promise((resolve, reject) => {
        MasterInterceptorController.failedQueue.push({ resolve, reject, config: originalRequest });
      });
    }

    originalRequest.retry = true;
    MasterInterceptorController.isRefreshing = true;

    return new Promise((resolve, reject) => {
        (async () => {
          try {
            const newToken = await MasterInterceptorController.getNewAccessToken();
            instance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
            MasterInterceptorController.processQueue(null, newToken);
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
            }
            resolve(instance(originalRequest));
          } catch (err) {
            MasterInterceptorController.processQueue(err, undefined);
            reject(err);
          } finally {
            MasterInterceptorController.isRefreshing = false;
          }
        })();
      });
  }


  return Promise.reject(error);
});

export default instance;