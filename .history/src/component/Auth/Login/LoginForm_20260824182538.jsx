import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    HiOutlineMail,
    HiOutlineLockClosed,
    HiOutlineEye,
    HiOutlineEyeOff
} from "react-icons/hi"

const LoginForm = () => {

    const navigate = useNavigate()

    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {

        const { name, value } = e.target

        setInputData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLogin = (e) => {

        e.preventDefault()

        const employees =
            JSON.parse(localStorage.getItem("employee")) || []

        const loggedUser = employees.find(
            (employee) =>
                employee.email === inputData.email &&
                employee.password === inputData.password
        )

        if (!loggedUser) {
            alert("Invalid email or password")
            return
        }

        if (loggedUser.status !== "Active") {
            alert("Your account is inactive")
            return
        }

        localStorage.setItem(
            "loggedUser",
            JSON.stringify(loggedUser)
        )

        navigate("/dashboard")
    }

    return (
        <div className="w-full max-w-[420px]">

            {/* Brand */}
            <div className="mb-8">

                <div className="flex items-center gap-3 mb-7">

                    <div className="
                        w-10
                        h-10
                        rounded-lg
                        bg-blue-600
                        flex
                        items-center
                        justify-center
                        text-white
                        font-bold
                        text-lg
                    ">
                        R
                    </div>

                    <div>
                        <h1 className="
                            text-lg
                            font-bold
                            text-gray-900
                        ">
                            RealtyCRM
                        </h1>

                        <p className="
                            text-[10px]
                            text-gray-400
                        ">
                            Real Estate Management
                        </p>
                    </div>

                </div>

                <h2 className="
                    text-2xl
                    font-bold
                    text-gray-900
                ">
                    Welcome back
                </h2>

                <p className="
                    mt-1.5
                    text-sm
                    text-gray-500
                ">
                    Sign in to access your CRM dashboard
                </p>

            </div>


            {/* Form */}
            <form onSubmit={handleLogin}>

                {/* Email */}
                <div className="mb-5">

                    <label className="
                        block
                        text-xs
                        font-semibold
                        text-gray-700
                        mb-2
                    ">
                        Email Address
                    </label>

                    <div className="relative">

                        <HiOutlineMail className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-gray-400
                        " />

                        <input
                            type="email"
                            name="email"
                            value={inputData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="
                                w-full
                                h-11
                                pl-10
                                pr-3
                                border
                                border-gray-200
                                rounded-lg
                                bg-white
                                text-sm
                                text-gray-800
                                placeholder:text-gray-400
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-100
                            "
                        />

                    </div>

                </div>


                {/* Password */}
                <div className="mb-4">

                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-2
                    ">

                        <label className="
                            text-xs
                            font-semibold
                            text-gray-700
                        ">
                            Password
                        </label>

                        <button
                            type="button"
                            className="
                                text-[11px]
                                font-medium
                                text-blue-600
                                hover:text-blue-700
                            "
                        >
                            Forgot password?
                        </button>

                    </div>

                    <div className="relative">

                        <HiOutlineLockClosed className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-gray-400
                        " />

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            name="password"
                            value={inputData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                            className="
                                w-full
                                h-11
                                pl-10
                                pr-10
                                border
                                border-gray-200
                                rounded-lg
                                bg-white
                                text-sm
                                text-gray-800
                                placeholder:text-gray-400
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-100
                            "
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                                hover:text-gray-600
                            "
                        >
                            {showPassword ? (
                                <HiOutlineEyeOff className="w-4 h-4" />
                            ) : (
                                <HiOutlineEye className="w-4 h-4" />
                            )}
                        </button>

                    </div>

                </div>


                {/* Remember */}
                <div className="
                    flex
                    items-center
                    mb-6
                ">

                    <label className="
                        flex
                        items-center
                        gap-2
                        cursor-pointer
                    ">

                        <input
                            type="checkbox"
                            className="
                                w-3.5
                                h-3.5
                                accent-blue-600
                            "
                        />

                        <span className="
                            text-xs
                            text-gray-500
                        ">
                            Remember me
                        </span>

                    </label>

                </div>


                {/* Login Button */}
                <button
                    type="submit"
                    className="
                        w-full
                        h-11
                        rounded-lg
                        bg-blue-600
                        hover:bg-blue-700
                        active:bg-blue-800
                        text-white
                        text-sm
                        font-semibold
                        shadow-sm
                        transition
                    "
                >
                    Sign In
                </button>

            </form>


            {/* Bottom */}
            <div className="
                mt-7
                pt-5
                border-t
                border-gray-100
                text-center
            ">

                <p className="
                    text-xs
                    text-gray-500
                ">
                    Don't have an account?

                    <button
                        type="button"
                        className="
                            ml-1
                            font-semibold
                            text-blue-600
                            hover:text-blue-700
                        "
                    >
                        Contact Administrator
                    </button>
                </p>

            </div>


            {/* Footer */}
            <p className="
                text-center
                text-[10px]
                text-gray-400
                mt-6
            ">
                © 2026 RealtyCRM. All rights reserved.
            </p>

        </div>
    )
}

export default LoginForm