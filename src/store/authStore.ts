import { useApi } from '@/hooks/useApi'
import { axiosTokenCorrectlySet, setBearerAuthToken } from '@/utilities/auth'
import { getStorageAdapter } from '@/utilities/storage'
import * as Device from 'expo-device'
import { useRouter } from 'expo-router'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { useErrorStore } from './errorStore'

type RegistrationPayload = {
  name: string
  email: string
  handle: string
  password: string
  passwordConfirmation: string
}

type AuthState = {
  authUser: User | null
  token: string | null
  isLoading: boolean
  isAuthenticated: () => boolean
  logIn: (email: string, password: string) => void
  logOut: () => void
  setIsLoading: (value: boolean) => void
  register: (payload: RegistrationPayload) => void
  hasCompletedOnboarding: boolean
  completeOnboarding: () => void
  resetAuth: () => void
  resetOnboarding: () => void
}

type PersistedAuthState = Pick<AuthState, 'authUser' | 'token' | 'hasCompletedOnboarding'>

export const useAuthStore = create(
  persist(
    (set, get) => {
      const { api } = useApi()
      const router = useRouter()

      return {
        authUser: null,
        token: null,
        hasCompletedOnboarding: false,
        isLoading: false,
        isAuthenticated: (): boolean =>
          !!get().authUser && !!get().token && axiosTokenCorrectlySet(get().token),
        setIsLoading: (value: boolean) =>
          set((state: AuthState) => ({ ...state, isLoading: value })),
        register: async ({
          name,
          email,
          handle,
          password,
          passwordConfirmation,
        }: RegistrationPayload) => {
          await useErrorStore
            .getState()
            .resetValidationErrors(['name', 'email', 'handle', 'password', 'passwordConfirmation'])
          const device_name = Device.deviceName || 'Unknown Device'
          await set((state: AuthState) => ({ ...state, isLoading: true }))
          await api('/register', {
            method: 'POST',
            data: {
              name,
              email,
              handle,
              password,
              password_confirmation: passwordConfirmation,
              device_name,
            },
          })
            .then(async res => {
              const token = res?.data?.token
              const authUser = res?.data?.user
              setBearerAuthToken(token)
              await set((state: AuthState) => ({
                ...state,
                authUser,
                token,
              }))
              if (token && authUser) router.replace('/auth-user-profile')
            })
            .finally(async () => await set((state: AuthState) => ({ ...state, isLoading: false })))
        },
        logIn: async (email: string, password: string) => {
          await useErrorStore.getState().resetValidationErrors(['email', 'password'])
          const device_name = Device.deviceName || 'Unknown Device'
          await set((state: AuthState) => ({ ...state, isLoading: true }))
          await api('/login', { method: 'POST', data: { email, password, device_name } })
            .then(async res => {
              const token = res?.data?.token
              setBearerAuthToken(token)
              await set((state: AuthState) => ({
                ...state,
                authUser: res?.data?.user,
                token,
              }))
            })
            .finally(async () => await set((state: AuthState) => ({ ...state, isLoading: false })))
        },
        logOut: async () =>
          await api('/logout', { method: 'POST' })
            .then(async () => {
              await set((state: AuthState) => ({ ...state, isLoading: true }))
              await set((state: AuthState) => ({ ...state, authUser: null }))
            })
            .finally(async () => await set((state: AuthState) => ({ ...state, isLoading: false }))),
        resetAuth: () => set((state: AuthState) => ({ ...state, authUser: null, token: null })),
        completeOnboarding: () =>
          set((state: AuthState) => ({ ...state, hasCompletedOnboarding: true })),
        resetOnboarding: () =>
          set((state: AuthState) => ({ ...state, hasCompletedOnboarding: false })),
      }
    },
    {
      name: 'auth-store',
      skipHydration: typeof window === 'undefined',
      storage: createJSONStorage(() => getStorageAdapter()),
      partialize: ({ authUser, token, hasCompletedOnboarding }: AuthState): PersistedAuthState => ({
        authUser,
        token,
        hasCompletedOnboarding,
      }),
    }
  )
)
