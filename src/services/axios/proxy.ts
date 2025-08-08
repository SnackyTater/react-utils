import { AxiosRequestConfig, AxiosResponse } from 'axios';
import instance from './config';
import cancel from './cancel';

type ProxyParams = {
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
}
export class AxiosProxy {
  get = async (param: ProxyParams) => {
    const { url, data, config = {} } = param;

    //generate cancel token
    cancel.delete(url);
    const sources = cancel.register(url);

    //setting up config for api
    config.params = data;
    config.cancelToken = sources.token;

    return instance.get(url, config).then((response: AxiosResponse) => {
      cancel.delete(url);
      return response.data;
    });
  };

  post = async (param: ProxyParams) => {
    const { url, data, config = {} } = param;

    //generate cancel token
    cancel.delete(url);
    const sources = cancel.register(url);
    config.cancelToken = sources.token;

    return instance.post(url, data, config).then((response: AxiosResponse) => {
      cancel.delete(url);
      return response.data;
    });
  }
  
  put = async (param: ProxyParams) => {
    const { url, data, config = {} } = param;

    //generate cancel token
    cancel.delete(url);
    const sources = cancel.register(url);
    config.cancelToken = sources.token;

    return instance.put(url, data, config).then((response: AxiosResponse) => {
      cancel.delete(url);
      return response.data;
    });
  }
  
  delete = async (param: ProxyParams) => {
    const { url, data, config = {} } = param;

    //generate cancel token
    cancel.delete(url);
    const sources = cancel.register(url);

    //setting up config for api
    config.params = data;
    config.cancelToken = sources.token;

    return instance.delete(url, config).then((response: AxiosResponse) => {
      cancel.delete(url);
      return response.data;
    });
  }
}