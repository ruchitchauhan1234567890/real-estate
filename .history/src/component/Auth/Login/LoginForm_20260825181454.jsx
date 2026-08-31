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


    // =========================
    // INPUT CHANGE
    // =========================

    const handleChange = (e) => {

        const { name, value } = e.target

        setInputData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    // =========================
    // LOGIN
    // =========================

    const handleLogin = (e) => {

        e.preventDefault()

        const employees =
            JSON.parse(
                localStorage.getItem("employee")
            ) || []

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

        <div className="
            w-full
            max-w-[420px]

            text-gray-900
            dark:text-gray-100

            transition-colors
        ">


            {/* ================================================= */}
            {/* BRAND */}
            {/* ================================================= */}

            <div className="mb-8">


                {/* Logo */}

                <div className="
                    flex
                    items-center
                    gap-3
                    mb-7
                ">

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

                        shadow-sm
                    ">
                        R
                    </div>


                    <div>

                        <h1 className="
                            text-lg
                            font-bold

                            text-gray-900
                            dark:text-white
                        ">
                            RealtyCRM
                        </h1>

                        <p className="
                            text-[10px]

                            text-gray-400
                            dark:text-gray-500
                        ">
                            Real Estate Management
                        </p>

                    </div>

                </div>


                {/* Heading */}

                <h2 className="
                    text-2xl
                    font-bold

                    text-gray-900
                    dark:text-white
                ">
                    Welcome back
                </h2>


                <p className="
                    mt-1.5
                    text-sm

                    text-gray-500
                    dark:text-gray-400
                ">
                    Sign in to access your CRM dashboard
                </p>

            </div>


            {/* ================================================= */}
            {/* FORM */}
            {/* ================================================= */}

            <form onSubmit={handleLogin}>


                {/* ================= EMAIL ================= */}

                <div className="mb-5">

                    <label className="
                        block

                        text-xs
                        font-semibold

                        text-gray-700
                        dark:text-gray-300

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
                            dark:text-gray-500

                            pointer-events-none
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
                                dark:border-[#3a3a4d]

                                rounded-lg

                                bg-white
                                dark:bg-[#181824]

                                text-sm

                                text-gray-800
                                dark:text-gray-200

                                placeholder:text-gray-400
                                dark:placeholder:text-gray-500

                                outline-none

                                transition-colors

                                focus:border-blue-500
                                dark:focus:border-blue-500

                                focus:ring-2
                                focus:ring-blue-100
                                dark:focus:ring-blue-500/20
                            "
                        />

                    </div>

                </div>


                {/* ================= PASSWORD ================= */}

                <div className="mb-4">


                    {/* Label + Forgot */}

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
                            dark:text-gray-300
                        ">
                            Password
                        </label>


                        <button
                            type="button"
                            className="
                                text-[11px]
                                font-medium

                                text-blue-600
                                dark:text-blue-400

                                hover:text-blue-700
                                dark:hover:text-blue-300

                                transition
                            "
                        >
                            Forgot password?
                        </button>

                    </div>


                    {/* Password Input */}

                    <div className="relative">

                        <HiOutlineLockClosed className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2

                            w-4
                            h-4

                            text-gray-400
                            dark:text-gray-500

                            pointer-events-none
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
                                dark:border-[#3a3a4d]

                                rounded-lg

                                bg-white
                                dark:bg-[#181824]

                                text-sm

                                text-gray-800
                                dark:text-gray-200

                                placeholder:text-gray-400
                                dark:placeholder:text-gray-500

                                outline-none

                                transition-colors

                                focus:border-blue-500
                                dark:focus:border-blue-500

                                focus:ring-2
                                focus:ring-blue-100
                                dark:focus:ring-blue-500/20
                            "
                        />


                        {/* Show / Hide Password */}

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                            className="
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2

                                text-gray-400
                                dark:text-gray-500

                                hover:text-gray-600
                                dark:hover:text-gray-300

                                transition
                            "
                        >

                            {showPassword ? (

                                <HiOutlineEyeOff
                                    className="
                                        w-4
                                        h-4
                                    "
                                />

                            ) : (

                                <HiOutlineEye
                                    className="
                                        w-4
                                        h-4
                                    "
                                />

                            )}

                        </button>

                    </div>

                </div>


                {/* ================================================= */}
                {/* REMEMBER ME */}
                {/* ================================================= */}

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

                                cursor-pointer
                            "
                        />


                        <span className="
                            text-xs

                            text-gray-500
                            dark:text-gray-400
                        ">
                            Remember me
                        </span>

                    </label>

                </div>


                {/* ================================================= */}
                {/* LOGIN BUTTON */}
                {/* ================================================= */}

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


            {/* ================================================= */}
            {/* BOTTOM */}
            {/* ================================================= */}

            <div className="
                mt-7
                pt-5

                border-t
                border-gray-100
                dark:border-[#303044]

                text-center
            ">

                <p className="
                    text-xs

                    text-gray-500
                    dark:text-gray-400
                ">

                    Don't have an account?

                    <button
                        type="button"
                        className="
                            ml-1

                            font-semibold

                            text-blue-600
                            dark:text-blue-400

                            hover:text-blue-700
                            dark:hover:text-blue-300

                            transition
                        "
                    >
                        Contact Administrator
                    </button>

                </p>

            </div>


            {/* ================================================= */}
            {/* FOOTER */}
            {/* ================================================= */}

            <p className="
                text-center

                text-[10px]

                text-gray-400
                dark:text-gray-500

                mt-6
            ">
                © 2026 RealtyCRM. All rights reserved.
            </p>

        </div>
    )
}

export default LoginForm