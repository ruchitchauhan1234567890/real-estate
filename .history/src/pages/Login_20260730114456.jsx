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
    <div className="w-80 h-80 mt-10  border m-auto flex flex-col">
      <div className="text-2xl text-center">
        Login IN
      </div>
      <div className="mt-10 px-4">
      <form className="">
        <div className="flex flex-col gap-1 mb-3  bg-amber-100"> 
          <label className="font-bold">Email : </label>
          <input type="email"
           placeholder='enter your email' 
           className="border rounded h-10"
           onChange={handleChange} />
        </div>

        <div className="flex flex-col gap-1 bg-amber-100">
          <label>Password : </label>
          <input type="text"
           placeholder='enter your password' 
           className="border rounded"
           onChange={handleChange} />
        </div>

        <div className="bg-amber-100 text-center my-10 rounded py-1">
          <button>logIN</button>
        </div>

      </form>
      </div>
    </div>
  )
}

export default Login
