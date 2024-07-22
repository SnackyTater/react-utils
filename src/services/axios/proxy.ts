import { AxiosRequestConfig } from 'axios';
import instance from './config';
import { stringifyParams } from '@/utils/query';

type ProxyParams = {
    url: string;
    data?: Record<string,any>;
    config?: AxiosRequestConfig;
}

export class AxiosProxy {
    get = (param: ProxyParams) => {
        const {url, data, config = {}} = param;
        config.params = data;
        return instance.get(url, config);
    };
    post = (param: ProxyParams) => {
        const {url, data, config = {}} = param;
        return instance.post(url, data, config);
    }
    put = (param: ProxyParams) => {
        const {url, data, config = {}} = param;
        return instance.put(url, data, config);
    }
    delete = (param: ProxyParams) => {
        const {url, data, config = {}} = param;
        config.params = data;
        return instance.delete(url, config);
    }
}