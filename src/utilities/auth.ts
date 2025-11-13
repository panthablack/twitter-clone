import axios from 'axios'

export const setBearerAuthToken = (token: string): void => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const axiosTokenCorrectlySet = (token: string | null): boolean =>
  !!token && axios?.defaults?.headers?.common?.['Authorization'] === `Bearer ${token}`
