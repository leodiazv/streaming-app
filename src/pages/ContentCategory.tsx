import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from '../assets/styles/contentCategory.module.css'
import NavBar from '../components/NavBar'
import { Genre } from '../types'

const ContentCategory = () => {
  const [media, setMedia] = useState<any[]>([])
  const [category, setCategory] = useState<string>()

  const { categoryId } = useParams()

  const API_KEY = 'a1476201b739d55b32956a65db2510dc'

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${categoryId}&release_date.lte=2022-08-23&sort_by=release_date.desc`,
      )
      .then(res => setMedia(res.data.results))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`,
      )
      .then(res => {
        const genres = res.data.genres as Genre[]
        if (!genres) return
        const currentGenre = genres.find(cat => cat.id === Number(categoryId))
        setCategory(currentGenre?.name)
      })
      .catch(err => console.log(err))
  }, [])

  if (!media) return <p>Cargando..</p>

  return (
    <div className={styles.contentCategory}>
      <h1>{category?.toUpperCase()}</h1>
      <ul className={styles.movieList}>
        {media.map(movie => (
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
