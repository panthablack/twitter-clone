import { deleteItemAsync, getItem, setItem } from 'expo-secure-store'
import { Platform } from 'react-native'

/**
 * Platform-specific storage adapter for Zustand persistence
 * Uses expo-secure-store on native, localStorage on web
 */
export const getStorageAdapter = () => {
  if (Platform.OS === 'web') {
    // Web storage using localStorage
    return {
      getItem: (key: string) => {
        try {
          return localStorage.getItem(key) || null
        } catch (error) {
          console.warn(`Failed to read from localStorage: ${key}`, error)
          return null
        }
      },
      setItem: (key: string, value: string) => {
        try {
          localStorage.setItem(key, value)
        } catch (error) {
          console.warn(`Failed to write to localStorage: ${key}`, error)
        }
      },
      removeItem: (key: string) => {
        try {
          localStorage.removeItem(key)
        } catch (error) {
          console.warn(`Failed to remove from localStorage: ${key}`, error)
        }
      },
    }
  }

  // Native storage using expo-secure-store
  return {
    getItem,
    setItem,
    removeItem: deleteItemAsync,
  }
}
