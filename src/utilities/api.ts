import { API_ROOT_URL } from '@//constants/networking'
import { LaravelErrorResponse } from '@/types/api'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const DEFAULT_HEADERS = {
  'ngrok-skip-browser-warning': 'true',
  Accept: 'application/json',
  'Content-Type': 'application/json',
} as const

export const handleApiError = async (e: AxiosError) => {
  console.error(e)
  throw new Error(e?.message)
}

export const handleValidationError = async (e: AxiosError) => {
  const data = e?.response?.data as LaravelErrorResponse | undefined
  if (!data) return
  const message = data?.message
  console.error(message)
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
  return axios.request(mapped).catch((e: AxiosError) => {
    if (e?.status === 422) handleValidationError(e)
    else handleApiError(e)
  })
}
