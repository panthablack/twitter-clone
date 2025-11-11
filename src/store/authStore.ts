import { FAKE_AUTH_USER } from '@/constants/fakeData'
import { getStorageAdapter } from '@/utilities/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type AuthState = {
  authUser: User | null
  logIn: (email: string, password: string) => void
  logOut: () => void
  hasCompletedOnboarding: boolean
  completeOnboarding: () => void
  resetOnboarding: () => void
}

export const useAuthStore = create(
  persist<AuthState>(
    set => ({
      authUser: null,
      hasCompletedOnboarding: false,
      logIn: () => set((state: AuthState) => ({ ...state, authUser: FAKE_AUTH_USER })),
      logOut: () => set((state: AuthState) => ({ ...state, authUser: null })),
      // logIn: async (email: string, password: string) =>
      //   await api('/auth/user', { method: 'POST', data: { email, password } }).then(res => {
      //     set((state: AuthState) => ({ ...state, authUser: res?.data }))
      //   }),
      // logOut: async () =>
      //   await api('/auth/logout', { method: 'POST' }).then(() => {
      //     set((state: AuthState) => ({ ...state, authUser: null }))
      //   }),
      completeOnboarding: () =>
        set((state: AuthState) => ({ ...state, hasCompletedOnboarding: true })),
      resetOnboarding: () =>
        set((state: AuthState) => ({ ...state, hasCompletedOnboarding: false })),
    }),
    {
      name: 'auth-store',
      skipHydration: typeof window === 'undefined',
      storage: createJSONStorage(() => getStorageAdapter()),
    }
  )
)
