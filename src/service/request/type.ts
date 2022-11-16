import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义一个拦截器,包含请求成功、请求失败、响应成功、响应失败时四种情况的处理方法
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
