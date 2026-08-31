import React, { useState } from 'react'

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  })

  const emp = JSON.parse(localStorage.getItem("employee"))
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData((prev) => ({ ...prev, [name]: value }))
  }
  console.log(emp)

  console.log(user)

  console.log(inputData)
  return (
    <div className="w-80 h-80 mt-10  border m-auto flex flex-col rounded">
      <div className="text-2xl pt-2 text-center">
        Login IN
      </div>
      <div className="mt-10 px-4">
        <form className="">
          <div className="flex flex-col gap-1 mb-3  ">
            <label className="font-bold">Email : </label>
            <input type="email"
              name="email"
              placeholder='enter your email'
              className="border rounded h-10 px-2"
              onChange={handleChange} />
          </div>

          <div className="flex flex-col gap-1 ">
            <label className="font-bold">Password : </label>
            <input type="text"
              name="password"
              placeholder='enter your password'
              className="border rounded h-10 px-2"
              onChange={handleChange} />
          </div>

          <div className="text-center my-10 bg-blue-400 rounded py-1">
            <button>logIN</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
