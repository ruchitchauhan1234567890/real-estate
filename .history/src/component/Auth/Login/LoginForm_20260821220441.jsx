import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

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
    <div
      className="
        bg-white
        rounded-xl
        shadow-lg
        p-6
        w-full
        max-w-md
        mx-auto
      "
    >

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Log In
      </h2>

      <form onSubmit={handleLogin}>

        {/* Email */}
        <div className="mb-4">

          <label className="block text-xs font-medium text-gray-700 mb-1">
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
              h-9
              px-3
              text-sm
              bg-gray-100
              border
              border-gray-200
              rounded
              outline-none
              focus:border-blue-500
              focus:bg-white
            "
          />

        </div>

        {/* Password */}
        <div className="mb-2">

          <label className="block text-xs font-medium text-gray-700 mb-1">
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
              h-9
              px-3
              text-sm
              bg-gray-100
              border
              border-gray-200
              rounded
              outline-none
              focus:border-blue-500
              focus:bg-white
            "
          />

        </div>

        {/* Forgot Password */}
        <div className="text-right mb-4">

          <button
            type="button"
            className="text-[10px] text-gray-600 hover:text-blue-600"
          >
            Forgot Password?
          </button>

        </div>

        {/* Login */}
        <button
          type="submit"
          className="
            w-full
            h-9
            bg-gray-900
            text-white
            rounded
            text-sm
            hover:bg-gray-800
            transition
          "
        >
          Log In
        </button>

      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4">

        <div className="flex-1 h-px bg-gray-200" />

        <span className="text-[10px] text-gray-400">
          OR
        </span>

        <div className="flex-1 h-px bg-gray-200" />

      </div>

      {/* <SocialLogin /> */}

      {/* Signup */}
      <p className="text-center text-[10px] text-gray-500 mt-3">
        Don't have an account?
        <button className="ml-1 text-red-400 hover:text-red-500">
          Sign Up
        </button>
      </p>

    </div>
  );
};

export default LoginForm;