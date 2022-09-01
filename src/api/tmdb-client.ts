import axios from 'axios'

const API_KEY = 'a1476201b739d55b32956a65db2510dc'

export const fetchMovies = async (categoryId: number) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${categoryId}&release_date.lte=2022-08-23&sort_by=release_date.desc`,
  )
  const { results } = res.data
  return results
}

export const fetchMovieDetails = async (movieId: string) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos,images`,
  )
  const { data } = res
  return data
}

export const fetchCategories = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`,
  )
  const { genres } = res.data
  return genres
}
