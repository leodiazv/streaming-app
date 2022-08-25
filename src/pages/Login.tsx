import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import styles from '../assets/styles/login.module.css'
import { useAuthStore } from '../stores/auth'

interface LoginFields {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFields>()
  const navigate = useNavigate()

  const { isLoggedIn, setLoggedIn } = useAuthStore()

  const onSubmit = (data: LoginFields) => {
    const regexEmail =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

    if (data.email === '' || data.password === '') {
      Swal.fire('Los campos no pueden estar vacios')
      return
    }

    if (data.email !== '' && !regexEmail.test(data.email)) {
      Swal.fire('Debes escribir una direccion de correo valida')
      return
    }

    if (data.email !== 'jhon@gmail.com' || data.password !== 'hPl2x61&vT$X') {
      Swal.fire('Credenciales invalidas')
      return
    }

    setLoggedIn(true)
    navigate('/')
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginCard}>
        <h2>LOGO</h2>
        <h3>Inicia sesión</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            id="email-input"
            {...register('email')}
            placeholder="Email"
          />

          <input
            type="password"
            id="password-input"
            {...register('password')}
            placeholder="Contraseña"
          />

          <button type="submit">INGRESAR</button>
        </form>
        <p>
          ¿Primera vez? <Link to={'#'}>Suscribete aquí</Link>
        </p>
        <div className={styles.testDataContainer}>
          <h2>Test data</h2>
          <p>
            <i className="fa-solid fa-at"></i> jhon@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-key"></i> hPl2x61&vT$X
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
