import { setBearerAuthToken } from '@/utilities/auth'
import { create } from 'zustand'
import { useAuthStore } from './authStore'

type BootState = {
  isLoading: boolean
  hasBooted: boolean
  setIsLoading: (loadingVal: boolean) => void
  onBoot: () => void
}

export const useBootStore = create<BootState>(set => ({
  onBoot: async () => {
    const { token } = useAuthStore.getState()
    await set((state: BootState) => ({ ...state, isLoading: true }))
    if (token) setBearerAuthToken(token)
    await set((state: BootState) => ({ ...state, hasBooted: true, isLoading: false }))
  },
  isLoading: true,
  hasBooted: false,
  setIsLoading: (value: boolean) => set((state: BootState) => ({ ...state, isLoading: value })),
}))
