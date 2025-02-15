/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-empty-interface */
import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';

interface AxiosPromise<T = any> extends Promise<T> {}

export default interface IAxiosInstance {
  (config: AxiosRequestConfig): AxiosPromise;
  (url: string, config?: AxiosRequestConfig): AxiosPromise;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>;
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise;
  head(url: string, config?: AxiosRequestConfig): AxiosPromise;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
}
