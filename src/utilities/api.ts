import { API_ROOT_URL } from '@//constants/networking'
import { LaravelErrorResponse } from '@/types/api'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const DEFAULT_HEADERS = {
  'ngrok-skip-browser-warning': 'true',
  Accept: 'application/json',
  'Content-Type': 'application/json',
} as const

export const handleApiError = async (e: AxiosError) => {
  console.log('API Error: ', e)
  throw new Error(e?.message)
}

export const handleValidationError = async (e: AxiosError) => {
  const data = e?.response?.data as LaravelErrorResponse | undefined
  if (!data) throw new Error(e?.message || 'Validation Error')
  console.log('API Validation Error: ', e)
}

export const api = async (url: string, config: AxiosRequestConfig = {}) => {
  const mapped = {
    url,
    baseURL: API_ROOT_URL,
    ...config,
    headers: {
      ...DEFAULT_HEADERS,
      ...config.headers,
    },
  }
  return await axios.request(mapped).catch((e: AxiosError) => {
    if (e?.status === 422) handleValidationError(e)
    else handleApiError(e)
  })
}
