import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isLoggedIn: boolean
  setLoggedIn: (loggedIn: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      isLoggedIn: false,
      setLoggedIn: isLoggedIn => set({ isLoggedIn }),
    }),
    {
      name: 'auth-storage', // unique name
    },
  ),
)
