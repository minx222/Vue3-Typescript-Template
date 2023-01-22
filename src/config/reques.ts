import type { AxiosRequestConfig } from 'axios'
import { ResultEnum, RequestMethodEnum } from '@/enums/request'
import conf from '../../app.config'
export interface CreateAxiosOptions extends AxiosRequestConfig {
  baseURL: string
  default_method: RequestMethodEnum
  timeout: number
  withCredentials: boolean
}
export const config: CreateAxiosOptions = {
  baseURL: conf.request.baseUrl,
  // 设置超时时间（10s）
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true,
  default_method: RequestMethodEnum.POST
}
