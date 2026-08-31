import React from 'react'

const Login = () => {

  const handleChange = () => {

  }
  return (
    <div className="w-auto h-auto border">
      <form>
        <label>Email</label>
        <input type="email" placeholder='enter your email' onChange={handleChange} />
        
        <label>Password</label>
        <input type="text" placeholder='enter your password' onChange={handleChange} />
      </form>
    </div>
  )
}

export default Login
