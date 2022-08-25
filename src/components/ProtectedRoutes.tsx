import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../stores/auth'

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuthStore()

  if (isLoggedIn) {
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoutes
