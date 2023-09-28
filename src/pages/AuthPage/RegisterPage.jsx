import { Link } from 'react-router-dom'
import styles from './Auth.module.css'

function RegisterPage () {
  return (
    <div className="formWrapper">
      <div className="customerRegisterForm">
        <form action="" className={`${styles.registerForm}`}>
          <div>
            <h2 className={`${styles.title}`}>Register</h2>
          </div>
          <label htmlFor="name" className={`${styles.labelHidden}`}>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" className={`${styles.registerInput}`} required/>
          <label htmlFor="email" className={`${styles.labelHidden}`}>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" className={`${styles.registerInput}`} required/>
          <label htmlFor="password" className={`${styles.labelHidden}`}>Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className={`${styles.registerInput}`} required/>
          <label htmlFor="passwordCheck" className={`${styles.labelHidden}`}>PasswordCheck</label>
          <input type="password" name="passwordCheck" id="passwordCheck" placeholder="Enter password again" className={`${styles.registerInput}`} required/>
          <label htmlFor="address" className={`${styles.labelHidden}`}>Address</label>
          <input type="text" name="address" id="address" placeholder="Address" className={`${styles.registerInput}`} required/>
          <label htmlFor="phone" className={`${styles.labelHidden}`}>Phone</label>
          <input type="text" name="phone" id="phone" placeholder="Phone number" className={`${styles.registerInput}`} required/>
          <button type='submit' className={`btn btn-outline-primary ${styles.registerBtn}`}>
            <span>Register</span>
          </button>
          <Link to="/login">
            <span className={`${styles.loginLink}`}>  Already have an account? Login</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
