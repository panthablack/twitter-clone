import { getStorageAdapter } from '@/utilities/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type BootState = {
  isLoading: boolean
  setIsLoading: (loadingVal: boolean) => void
}

export const useBootStore = create(
  persist<BootState>(
    set => ({
      isLoading: true,
      setIsLoading: (value: boolean) => set((state: BootState) => ({ ...state, isLoading: value })),
    }),
    {
      name: 'boot-store',
      skipHydration: true,
      storage: createJSONStorage(() => getStorageAdapter()),
    }
  )
)
