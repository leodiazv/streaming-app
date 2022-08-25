import { Outlet } from 'react-router-dom'
import Header from './Header'
import styles from '../assets/styles/mainLayout.module.css'

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
