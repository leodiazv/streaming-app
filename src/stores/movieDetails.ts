import create from 'zustand'
import { fetchMovieDetails } from '../api/tmdb-client'
import { Movie } from '../types'

interface MovieStore {
  movie: Movie | null
  fetchMovieDetails: (movieId: string) => void
  error: any
  status: 'idle' | 'loading' | 'error'
}

export const useMovieStore = create<MovieStore>()(set => ({
  movie: null,
  status: 'idle',
  error: null,
  fetchMovieDetails: async (movieId: string) => {
    try {
      set({ status: 'loading' })
      set({ movie: await fetchMovieDetails(movieId) })
      set({ status: 'idle' })
    } catch (error) {
      set({ status: 'error', error })
    }
  },
}))
