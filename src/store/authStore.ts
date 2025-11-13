import { useApi } from '@/hooks/useApi'
import { axiosTokenCorrectlySet, setBearerAuthToken } from '@/utilities/auth'
import { getStorageAdapter } from '@/utilities/storage'
import * as Device from 'expo-device'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type AuthState = {
  authUser: User | null
  token: string | null
  isLoading: boolean
  isAuthenticated: () => boolean
  logIn: (email: string, password: string) => void
  logOut: () => void
  setIsLoading: (value: boolean) => void
  register: (email: string, password: string) => void
  hasCompletedOnboarding: boolean
  completeOnboarding: () => void
  resetOnboarding: () => void
}

type PersistedAuthState = Pick<AuthState, 'authUser' | 'token' | 'hasCompletedOnboarding'>

export const useAuthStore = create(
  persist(
    (set, get) => {
      const { api } = useApi()

      return {
        authUser: null,
        token: null,
        hasCompletedOnboarding: false,
        isLoading: false,
        isAuthenticated: (): boolean =>
          !!get().authUser && !!get().token && axiosTokenCorrectlySet(get().token),
        register: () => set((state: AuthState) => ({ ...state, authUser: null })),
        setIsLoading: (value: boolean) =>
          set((state: AuthState) => ({ ...state, isLoading: value })),
        logIn: async (email: string, password: string) => {
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
