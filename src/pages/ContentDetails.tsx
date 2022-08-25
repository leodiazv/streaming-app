import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Movie } from '../types'
import styles from '../assets/styles/contentDetails.module.css'
import YoutubeEmbed from '../components/YoutubeEmbed'

const ContentDetails = () => {
  const { movieId } = useParams()

  const [movie, setMovie] = useState<Movie>()
  const API_KEY = 'a1476201b739d55b32956a65db2510dc'

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits,videos,images`,
      )
      .then(res => {
        setMovie(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  console.log(movie)
  if (!movie) return <p>Cargando..</p>

  return (
    <div className={styles.contentDetails}>
      {movie.backdrop_path !== null && (
        <img
          className={styles.backdropImage}
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        ></img>
      )}
      <div className={styles.movieDetailsContainer}>
        <img
          className={styles.posterImage}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        ></img>

        <h2>{movie.title}</h2>
        <p>
          <span>Year: </span>
          {`${movie.release_date?.slice(0, 4)}`}
        </p>
        <p className={styles.movieGenres}>
          <span>Genres: </span>
          {movie.genres.map(genre => genre.name).join(', ')}
        </p>
        <p>{movie.overview}</p>
        <div className={styles.video}>
          <YoutubeEmbed embedId={'jfKfPfyJRdk'} />
        </div>
      </div>
    </div>
  )
}

export default ContentDetails
