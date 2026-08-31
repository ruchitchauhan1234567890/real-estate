import React, { useState } from 'react'

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData((prev) => ({ ...prev, [name]: value }))
  }

  console.log(inputData)
  return (
    <div className="w-80 h-80 border items-center m-auto">
      <div className="items-center">
        Login IN
      </div>
      <div>
      <form className="">
        <div className=""> 
          <label>Email</label>
          <input type="email" placeholder='enter your email' onChange={handleChange} />
        </div>

        <div>
          <label>Password</label>
          <input type="text" placeholder='enter your password' onChange={handleChange} />
        </div>

      </form>
      </div>
    </div>
  )
}

export default Login
