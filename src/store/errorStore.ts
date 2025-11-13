import { create } from 'zustand'

type ErrorState = {
  validationErrors: Record<string, string[]>
  setValidationErrors: (name: string, errors: string[]) => void
}

export const useErrorStore = create<ErrorState>(set => ({
  validationErrors: {},
  setValidationErrors: (name: string, errors: string[]) =>
    set((state: ErrorState) => ({
      ...state,
      validationErrors: { ...state.validationErrors, [name]: errors },
    })),
}))
