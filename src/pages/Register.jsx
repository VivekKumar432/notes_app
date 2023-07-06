import React from 'react'

const Register = () => {
  return (
    <div className="container">
    <h1>Notes Taking App</h1>
    <form action="/users/login" method="post">
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      
      <input type="submit" value="Login" />
    </form>
    <div className="signup">
      Don't have an account? <a href="registration.html">Sign up</a>
    </div>
  </div>
  )
}

export default Register
