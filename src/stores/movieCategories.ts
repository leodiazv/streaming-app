import create from 'zustand'
import { fetchCategories } from '../api/tmdb-client'
import { Genre } from '../types'

interface CategoryStore {
  categories: Array<Genre>
  fetchCategories: () => void
  error: any
  status: 'idle' | 'loading' | 'error'
}

export const useCategoriesStore = create<CategoryStore>()(set => ({
  categories: [],
  status: 'idle',
  error: null,
  fetchCategories: async () => {
    try {
      set({ status: 'loading' })
      set({ categories: await fetchCategories() })
      set({ status: 'idle' })
    } catch (error) {
      set({ status: 'error', error })
    }
  },
}))
