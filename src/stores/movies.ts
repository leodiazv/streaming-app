import create from 'zustand'
import { fetchMovies } from '../api/tmdb-client'
import { Movie } from '../types'

interface MoviesStore {
  movies: Array<Movie>
  fetchMovies: (categoryId: number) => void
  error: any
  status: 'idle' | 'loading' | 'error'
}

export const useMoviesStore = create<MoviesStore>()(set => ({
  movies: [],
  status: 'idle',
  error: null,
  fetchMovies: async (categoryId: number) => {
    try {
      set({ status: 'loading' })
      set({ movies: await fetchMovies(categoryId) })
      set({ status: 'idle' })
    } catch (error) {
      set({ status: 'error', error })
    }
  },
}))
