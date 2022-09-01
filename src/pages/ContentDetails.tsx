import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../assets/styles/contentDetails.module.css'
import YoutubeEmbed from '../components/YoutubeEmbed'
import { useMovieStore } from '../stores/movieDetails'
import backdropPlaceholder from '../assets/img/backdrop-placeholder.png'

const ContentDetails = () => {
  const movieId = useParams().movieId as string

  const { movie, fetchMovieDetails, status } = useMovieStore()

  useEffect(() => {
    fetchMovieDetails(movieId)
  }, [])

  if (status === 'loading') return <p>Cargando..</p>
  if (status === 'error' || !movie) return <p>Cargando..</p>

  return (
    <div className={styles.contentDetails}>
      <img
        className={styles.backdropImage}
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt=""
      ></img>

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
