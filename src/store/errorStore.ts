import { create } from 'zustand'

type ErrorState = {
  validationErrors: Record<string, string[]>
  setValidationErrors: (name: string, errors: string[]) => void
  resetValidationErrors: (names?: string[]) => void
}

export const useErrorStore = create<ErrorState>(set => ({
  validationErrors: {},
  setValidationErrors: (name: string, errors: string[]) =>
    set((state: ErrorState) => ({
      ...state,
      validationErrors: { ...state.validationErrors, [name]: errors },
    })),
  resetValidationErrors: (names?: string[]) =>
    set((state: ErrorState) => {
      if (names) {
        const newState = { ...state }
        names.forEach(n => (newState.validationErrors[n] = []))
        return newState
      } else return { ...state, validationErrors: {} }
    }),
}))
