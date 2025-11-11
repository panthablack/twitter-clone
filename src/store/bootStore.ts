import { deleteItemAsync, getItem, setItem } from 'expo-secure-store'
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
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
)

//
