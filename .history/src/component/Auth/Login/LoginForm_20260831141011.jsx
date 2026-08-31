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
                    mb-8
                ">

                    <div className="
                        w-10
                        h-10

                        rounded-xl

                        bg-gradient-to-tr
                        from-blue-700
                        to-blue-500

                        flex
                        items-center
                        justify-center

                        text-white
                        font-bold
                        text-lg

                        shadow-md
                        shadow-blue-600/30
                    ">
                        R
                    </div>


                    <div>

                        <h1 className="
                            text-lg
                            font-bold
                            text-gray-900
                            tracking-tight
                        ">
                            RealtyCRM
                        </h1>

                        <p className="
                            text-[10px]
                            font-medium
                            text-gray-400
                            uppercase
                            tracking-wider
                        ">
                            Enterprise Suite
                        </p>

                    </div>

                </div>


                {/* Heading */}

                <h2 className="
                    text-3xl
                    font-bold
                    text-gray-900
                    tracking-tight
                ">
                    Welcome back
                </h2>


                <p className="
                    mt-2
                    text-sm
                    text-gray-500
                    font-medium
                ">
                    Please enter your details to sign in.
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
                                h-12

                                pl-10
                                pr-4

                                border
                                border-gray-300/80

                                rounded-xl

                                bg-gray-50/50

                                text-sm
                                text-gray-900
                                font-medium

                                placeholder:text-gray-400
                                placeholder:font-normal

                                outline-none

                                transition-all
                                duration-200

                                hover:border-gray-300
                                hover:bg-gray-50

                                focus:bg-white
                                focus:border-blue-500
                                focus:ring-4
                                focus:ring-blue-500/10
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
                                h-12

                                pl-10
                                pr-10

                                border
                                border-gray-300/80

                                rounded-xl

                                bg-gray-50/50

                                text-sm
                                text-gray-900
                                font-medium

                                placeholder:text-gray-400
                                placeholder:font-normal

                                outline-none

                                transition-all
                                duration-200

                                hover:border-gray-300
                                hover:bg-gray-50

                                focus:bg-white
                                focus:border-blue-500
                                focus:ring-4
                                focus:ring-blue-500/10
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

                                hover:text-gray-600

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
                        h-12

                        rounded-xl

                        bg-gradient-to-r
                        from-blue-600
                        to-blue-500

                        hover:from-blue-700
                        hover:to-blue-600
                        active:from-blue-800
                        active:to-blue-700

                        text-white

                        text-sm
                        font-semibold
                        tracking-wide

                        shadow-lg
                        shadow-blue-500/30
                        
                        hover:shadow-blue-500/40
                        hover:-translate-y-0.5

                        transition-all
                        duration-200
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

                mt-6
            ">
                © 2026 RealtyCRM. All rights reserved.
            </p>

        </div>
    )
}

export default LoginForm