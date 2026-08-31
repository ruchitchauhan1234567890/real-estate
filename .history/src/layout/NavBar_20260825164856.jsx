import React, { useContext } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { ThemeContext } from "../ContextAPI/ThemeContext"

export const NavBar = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  const loggedUser =
    JSON.parse(localStorage.getItem("loggedUser")) || {}

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div
      className="
        min-h-10
        w-full
        bg-white
        dark:bg-[#1F1F30]
        border-b
        border-gray-200
        dark:border-[#353548]
        shadow-sm
        flex
        items-center
        justify-between
        px-3
        sm:px-4
        md:px-5
        py-2
        gap-3
      "
    >

      {/* ================= LEFT ================= */}

      <div className="min-w-0 flex-1">

        <h1
          className="
            text-[11px]
            sm:text-[12px]
            md:text-[13px]
            font-semibold
            text-gray-800
            dark:text-white
            truncate
          "
        >
          Welcome back,{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {loggedUser.name}
          </span>
        </h1>

        <p
          className="
            hidden
            sm:block
            text-[8px]
            md:text-[9px]
            text-gray-400
            mt-0.5
            truncate
          "
        >
          Here's what's happening with your CRM today.
        </p>

      </div>


      {/* ================= RIGHT ================= */}

      <div
        className="
          flex
          items-center
          gap-2
          sm:gap-2.5
        "
      >

        {/* ================= THEME TOGGLE ================= */}

        <button
          type="button"
          onClick={toggleTheme}
          title={
            theme === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
          className="
            w-7
            h-7
            sm:w-8
            sm:h-8
            rounded-lg
            flex
            items-center
            justify-center
            bg-gray-100
            dark:bg-[#2A2A40]
            text-gray-600
            dark:text-yellow-300
            hover:bg-gray-200
            dark:hover:bg-[#353548]
            transition
            shrink-0
          "
        >

          {theme === "light" ? (
            <FiMoon className="text-sm sm:text-base" />
          ) : (
            <FiSun className="text-sm sm:text-base" />
          )}

        </button>


        {/* ================= USER ================= */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-2.5
            px-1.5
            sm:px-2
            py-1
            rounded-lg
            hover:bg-gray-50
            dark:hover:bg-[#2A2A40]
            transition
            cursor-pointer
            shrink-0
          "
        >

          {/* Profile Image */}

          <div
            className="
              w-7
              h-7
              sm:w-8
              sm:h-8
              rounded-full
              overflow-hidden
              border
              border-gray-200
              dark:border-[#45455A]
              bg-gray-100
              dark:bg-[#2A2A40]
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            {loggedUser.photo ? (

              <img
                src={loggedUser.photo}
                alt={loggedUser.name}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            ) : (

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-semibold
                  text-gray-600
                  dark:text-gray-300
                "
              >
                {loggedUser.name
                  ?.charAt(0)
                  ?.toUpperCase()}
              </span>

            )}

          </div>


          {/* User Details */}

          <div
            className="
              hidden
              xs:block
              sm:block
              leading-tight
              min-w-0
            "
          >

            <p
              className="
                text-[10px]
                md:text-[11px]
                font-semibold
                text-gray-800
                dark:text-white
                truncate
                max-w-[100px]
                md:max-w-[140px]
              "
            >
              {loggedUser.name}
            </p>

            <p
              className="
                text-[8px]
                md:text-[9px]
                text-gray-500
                dark:text-gray-400
                mt-0.5
              "
            >
              {loggedUser.isAdmin
                ? "Admin"
                : loggedUser.role}
            </p>

          </div>


          {/* Online Status */}

          <span
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-green-500
              shrink-0
            "
          />

        </div>

      </div>

    </div>
  )
}