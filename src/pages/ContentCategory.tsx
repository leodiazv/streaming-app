import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../assets/styles/contentCategory.module.css'
import { useMoviesStore } from '../stores/movies'
import { useCategoriesStore } from '../stores/movieCategories'

const ContentCategory = () => {
  const { categoryId } = useParams()

  const { movies, fetchMovies, status } = useMoviesStore()
  const { categories, fetchCategories } = useCategoriesStore()

  useEffect(() => {
    fetchMovies(Number(categoryId))
    fetchCategories()
  }, [])

  const currentCategory = categories.find(cat => cat.id === Number(categoryId))

  if (status === 'loading') return <p>Cargando..</p>

  return (
    <div className={styles.contentCategory}>
      <h1>{currentCategory?.name.toUpperCase()}</h1>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className={styles.movieCard}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt="NO POSTER"
                ></img>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentCategory
