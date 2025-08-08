import axios, { AxiosRequestConfig } from "axios";
import instance from './config'

type RequestQueue = {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
  config: AxiosRequestConfig;
}

export class InterceptorController {
  isRefreshing: boolean = false
  failedQueue: RequestQueue[] = []

  processQueue = (error: unknown, token?: string) => {
    this.failedQueue.forEach(({ resolve, reject, config }) => {
      if (error) {
        reject(error)
      } else {
        if (token && config.headers) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        resolve(instance(config));
      }
    })
    this.failedQueue = [];
  }

  getNewAccessToken = async (): Promise<string> => {
    const refreshToken = localStorage.getItem('refreshToken');

    // Real API call to your refresh endpoint
    const response = await axios.post<{ accessToken: string }>('/auth/refresh', { refreshToken });
    const newAccessToken = response.data.accessToken;
    localStorage.setItem('accessToken', newAccessToken);

    return newAccessToken;
  }
}