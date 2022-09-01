export interface Movie {
  poster_path: string
  backdrop_path: string
  original_title: string
  title: string
  release_date: string
  genres: Genre[]
  overview: string
  video: string
  id: number
}

export interface Genre {
  id: number
  name: string
}
