import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import styles from '../assets/styles/header.module.css'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <div className={styles.logoContainer}>
            <i className="fa-solid fa-house"></i>
          </div>
        </Link>
        <button
          className={styles.openMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-burger"></i>
        </button>
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  )
}

export default Header
