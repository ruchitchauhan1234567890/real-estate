import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SocialLogin from "./SocialLogin";

const LoginForm = () => {

  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const employees =
      JSON.parse(localStorage.getItem("employee")) || [];

    const loggedUser = employees.find(
      (employee) =>
        employee.email === inputData.email &&
        employee.password === inputData.password
    );

    if (!loggedUser) {
      alert("Invalid email or password");
      return;
    }

    if (loggedUser.status !== "Active") {
      alert("Your account is inactive");
      return;
    }

    localStorage.setItem(
      "loggedUser",
      JSON.stringify(loggedUser)
    );

    navigate("/dashboard");
  };

  return (
    <div className="
      w-full
      max-w-md
      bg-white
      rounded-xl
      shadow-2xl
      p-8
    ">

      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Log In
      </h2>

      <form onSubmit={handleLogin}>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="
              w-full
              h-12
              px-4
              bg-gray-100
              border
              border-gray-200
              rounded
              outline-none
              focus:border-blue-500
            "
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={inputData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="
              w-full
              h-12
              px-4
              bg-gray-100
              border
              border-gray-200
              rounded
              outline-none
              focus:border-blue-500
            "
          />
        </div>

        {/* Forgot password */}
        <div className="text-right mb-6">
          <button
            type="button"
            className="text-sm text-gray-600 hover:text-blue-600"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login */}
        <button
          type="submit"
          className="
            w-full
            h-12
            bg-gray-900
            text-white
            rounded
            font-medium
            hover:bg-gray-800
            transition
          "
        >
          Log In
        </button>

      </form>

      {/* OR */}
      <div className="flex items-center gap-3 my-6">

        <div className="flex-1 h-px bg-gray-300" />

        <span className="text-sm text-gray-400">
          OR
        </span>

        <div className="flex-1 h-px bg-gray-300" />

      </div>

      {/* Signup */}
      <p className="text-center text-sm text-gray-500">
        Don't have an account?

        <button className="ml-1 text-red-500">
          Sign Up
        </button>
      </p>

    </div>
  );
};

export default LoginForm;