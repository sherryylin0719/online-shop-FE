import { Link } from 'react-router-dom'
import styles from './Auth.module.css'

function LoginPage () {
  return (
    <div className="formWrapper">
      <div className="customerLoginForm">
        <form action="" className={`${styles.loginForm}`}>
          <div>
            <h2 className={`${styles.title}`}>Login</h2>
          </div>
          <label htmlFor="email" className={`${styles.labelHidden}`}>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" className={`${styles.loginInput}`} required/>
          <label htmlFor="password" className={`${styles.labelHidden}`}>Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className={`${styles.loginInput}`} required/>
          <button type='submit' className={`btn btn-outline-primary ${styles.logInBtn}`}>
            <span>Login</span>
          </button>
          <Link to="/register">
            <span className={`${styles.registerLink}`}>  Doesn't have an account? Register</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
