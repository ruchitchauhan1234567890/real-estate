import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    HiOutlineMail,
    HiOutlineLockClosed,
    HiOutlineEye,
    HiOutlineEyeOff,
    HiOutlineUser
} from "react-icons/hi"

const RegisterForm = () => {

    const navigate = useNavigate()

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        isAdmin: true
    })

    const [showPassword, setShowPassword] = useState(false)



    const handleChange = (e) => {

        const { name, value } = e.target

        setInputData((prev) => ({
            ...prev,
            [name]: value
        }))
    }




    const handleRegister = (e) => {

        e.preventDefault()

        const employees =
            JSON.parse(
                localStorage.getItem("employee")
            ) || []

        const userExists = employees.find(
            (employee) => employee.email === inputData.email
        )

        if (userExists) {
            alert("User with this email already exists.")
            return
        }

        const newEmployee = {
            id: crypto.randomUUID(),
            name: inputData.name,
            email: inputData.email,
            password: inputData.password,
            department: "Sales",
            role: "Sales Executive",
            status: "Active",
            isAdmin: true,
            date: new Date().toISOString().split('T')[0]
        }

        employees.push(newEmployee)

        localStorage.setItem(
            "employee",
            JSON.stringify(employees)
        )

        alert("Registration successful! Please login.")
        navigate("/")
    }


    return (

        <div className="
            w-full
            max-w-[420px]
            text-gray-900
        ">


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
                    Create an account
                </h2>


                <p className="
                    mt-2
                    text-sm
                    text-gray-500
                    font-medium
                ">
                    Please enter your details to register.
                </p>

            </div>


            {/* ================================================= */}
            {/* FORM */}
            {/* ================================================= */}

            <form onSubmit={handleRegister}>


                {/* ================= NAME ================= */}

                <div className="mb-5">

                    <label className="
                        block
                        text-xs
                        font-semibold
                        text-gray-700
                        mb-2
                    ">
                        Full Name
                    </label>


                    <div className="relative">

                        <HiOutlineUser className="
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
                            type="text"
                            name="name"
                            value={inputData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
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

                <div className="mb-6">

                    <label className="
                        block
                        text-xs
                        font-semibold
                        text-gray-700
                        mb-2
                    ">
                        Password
                    </label>


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
                            placeholder="Create a password"
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
                {/* REGISTER BUTTON */}
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
                    Sign Up
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

                    Already have an account?

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="
                            ml-1

                            font-semibold

                            text-blue-600

                            hover:text-blue-700

                            transition
                        "
                    >
                        Sign In
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

export default RegisterForm
