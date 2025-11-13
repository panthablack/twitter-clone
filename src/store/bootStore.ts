import { setBearerAuthToken } from '@/utilities/auth'
import { getStorageAdapter } from '@/utilities/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { useAuthStore } from './authStore'

type BootState = {
  isLoading: boolean
  setIsLoading: (loadingVal: boolean) => void
  onBoot: () => void
}

export const useBootStore = create(
  persist<BootState>(
    set => ({
      onBoot: async () => {
        const { token } = useAuthStore.getState()
        await set((state: BootState) => ({ ...state, isLoading: true }))
        if (token) setBearerAuthToken(token)
        await set((state: BootState) => ({ ...state, isLoading: false }))
      },
      isLoading: true,
      setIsLoading: (value: boolean) => set((state: BootState) => ({ ...state, isLoading: value })),
    }),
    {
      name: 'boot-store',
      skipHydration: typeof window === 'undefined',
      storage: createJSONStorage(() => getStorageAdapter()),
    }
  )
)
