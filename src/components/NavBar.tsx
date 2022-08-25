import { useNavigate } from 'react-router-dom'
import styles from '../assets/styles/navBar.module.css'
import { useAuthStore } from '../stores/auth'

interface NavBarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

const NavBar = ({ isMenuOpen, setIsMenuOpen }: NavBarProps) => {
  const { setLoggedIn } = useAuthStore()
  const navigate = useNavigate()

  const logout = () => {
    setLoggedIn(false)
    navigate('/login')
  }

  return (
    <div className={`${styles.navBar} ${isMenuOpen && styles.isOpen}`}>
      <button
        className={styles.closeButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <ul className={styles.list}>
        <li>SERIES</li>
        <li>PELÍCULAS</li>
        <li>CATEGORÍAS</li>
        <li>MI LISTA</li>
        <li>PERFIL</li>
      </ul>
      <button className={styles.logoutButton} onClick={logout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>LOG OUT
      </button>
    </div>
  )
}

export default NavBar
