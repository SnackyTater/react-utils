import { AxiosRequestConfig, AxiosResponse } from "axios";

export type ProxyParams = {
    url: string;
    data?: Record<string,any>;
    config: AxiosRequestConfig;
}

export type ProxyMethod = (param: ProxyParams) => Promise<AxiosResponse<any, any>>;

