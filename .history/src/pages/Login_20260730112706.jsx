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
    <div className="w-80 h-80 border items-center m-auto flex flex-col">
      <div className="text-2xl">
        Login IN
      </div>
      <div className="px-2 mt-10">
      <form className="">
        <div className=""> 
          <label>Email : </label>
          <input type="email"
           placeholder='enter your email' 
           className="border"
           onChange={handleChange} />
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
