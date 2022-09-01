import styles from '../assets/styles/home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.home}>
      <ul className={styles.categoryList}>
        <Link
          className={`${styles.categoryCard} ${styles.action}`}
          to="/category/28"
        >
          <li>ACCIÓN</li>
          <i className="fa-solid fa-bomb"></i>
        </Link>
        <Link
          className={`${styles.categoryCard} ${styles.comedy}`}
          to="/category/35"
        >
          <li>COMEDIA</li>
          <i className="fa-solid fa-face-grin-squint-tears"></i>
        </Link>
        <Link
          className={`${styles.categoryCard} ${styles.animation}`}
          to="/category/16"
        >
          <li>ANIMACIÓN</li>
          <i className="fa-solid fa-hat-wizard"></i>
        </Link>
        <Link
          className={`${styles.categoryCard} ${styles.drama}`}
          to="/category/18"
        >
          <li>DRAMA</li>
          <i className="fa-solid fa-masks-theater"></i>
        </Link>
        <Link
          className={`${styles.categoryCard} ${styles.mistery}`}
          to="/category/9648"
        >
          <li>MISTERIO</li>
          <i className="fa-solid fa-ghost"></i>
        </Link>
      </ul>
    </div>
  )
}

export default Home
