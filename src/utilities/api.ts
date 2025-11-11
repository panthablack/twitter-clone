import { API_ROOT_URL } from '@//constants/networking'
import axios, { AxiosRequestConfig } from 'axios'

const DEFAULT_HEADERS = {
  'ngrok-skip-browser-warning': 'true',
  Accept: 'application/json',
} as const

export const api = (url: string, config: AxiosRequestConfig = {}) => {
  const mapped = {
    url,
    baseURL: API_ROOT_URL,
    ...config,
    headers: {
      ...DEFAULT_HEADERS,
      ...config.headers,
    },
  }
  console.log('mapped', mapped)
  return axios.request(mapped)
}
