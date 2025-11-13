import { API_ROOT_URL } from '@//constants/networking'
import { useErrorStore } from '@/store/errorStore'
import { LaravelErrorResponse } from '@/types/api'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

export const DEFAULT_API_HEADERS = {
  'ngrok-skip-browser-warning': 'true',
  Accept: 'application/json',
  'Content-Type': 'application/json',
} as const

export const useApi = () => {
  const errorStore = useErrorStore.getState()

  const handleApiError = async (e: AxiosError) => {
    console.log('API Error: ', e)
    throw new Error(e?.message)
  }

  const handleValidationError = async (e: AxiosError) => {
    console.log('API Validation Error: ', e)
    const data = e?.response?.data as LaravelErrorResponse | undefined
    const errors = data?.errors
    if (!errors) throw new Error(data?.message || e?.message || 'Validation Error')
    Object.keys(errors).forEach((key: string) => errorStore.setValidationErrors(key, errors[key]))
  }

  const api = async (url: string, config: AxiosRequestConfig = {}) =>
    await axios
      .request({
        url,
        baseURL: API_ROOT_URL,
        ...config,
        headers: {
          ...DEFAULT_API_HEADERS,
          ...config.headers,
        },
      })
      .catch((e: AxiosError) => {
        if (e?.status === 422) handleValidationError(e)
        else handleApiError(e)
      })

  return { api }
}
