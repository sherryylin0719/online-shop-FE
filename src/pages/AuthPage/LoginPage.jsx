function LoginPage () {
  return (
    <div className="formWrapper">
      <div className="customerLoginForm">
        <form action="">
          <div>
            <h1 className="title">Login</h1>
          </div>
          <label htmlFor="email" className="labelHidden">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" className="input" required/>
          <label htmlFor="password" className="labelHidden">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className="input" required/>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
