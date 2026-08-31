import React from "react"
import LoginForm from "../component/Auth/Login/LoginForm"

const Login = () => {

    return (

        <div className="
            min-h-screen
            w-full
            bg-gray-50
            flex
        ">

            {/* ================= LEFT PANEL ================= */}

            <div className="
                hidden
                lg:flex
                lg:w-[52%]
                relative
                overflow-hidden
            ">

                {/* Background Image */}

                <img
                    src="https://img.magnific.com/free-photo/observation-ur…ss-steel_1127-2397.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Real Estate"
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                    "
                />


                {/* Overlay */}

                <div className="
                    absolute
                    inset-0
                    bg-gray-950/65
                " />


                {/* Content */}

                <div className="
                    relative
                    z-10
                    w-full
                    flex
                    flex-col
                    justify-between
                    p-12
                    xl:p-16
                    text-white
                ">

                    {/* Logo */}

                    <div className="flex items-center gap-3">

                        <div className="
                            w-11
                            h-11
                            rounded-lg
                            bg-blue-600
                            flex
                            items-center
                            justify-center
                            text-xl
                            font-bold
                        ">
                            R
                        </div>

                        <div>

                            <h1 className="
                                text-xl
                                font-bold
                            ">
                                RealtyCRM
                            </h1>

                            <p className="
                                text-[10px]
                                text-gray-300
                            ">
                                Real Estate Management
                            </p>

                        </div>

                    </div>


                    {/* Main Content */}

                    <div className="max-w-lg">

                        <div className="
                            w-10
                            h-1
                            bg-blue-500
                            rounded-full
                            mb-6
                        " />

                        <h2 className="
                            text-4xl
                            xl:text-5xl
                            font-bold
                            leading-tight
                        ">
                            Manage your
                            <br />
                            real estate business
                            <br />
                            smarter.
                        </h2>

                        <p className="
                            mt-5
                            text-sm
                            leading-6
                            text-gray-300
                            max-w-md
                        ">
                            Manage leads, track follow-ups,
                            monitor your sales pipeline and
                            keep your entire team productive
                            from one powerful CRM platform.
                        </p>


                        {/* Features */}

                        <div className="
                            flex
                            flex-wrap
                            gap-3
                            mt-7
                        ">

                            <div className="
                                px-3
                                py-2
                                rounded-md
                                bg-white/10
                                border
                                border-white/10
                                text-xs
                                text-gray-200
                            ">
                                Lead Management
                            </div>

                            <div className="
                                px-3
                                py-2
                                rounded-md
                                bg-white/10
                                border
                                border-white/10
                                text-xs
                                text-gray-200
                            ">
                                Sales Pipeline
                            </div>

                            <div className="
                                px-3
                                py-2
                                rounded-md
                                bg-white/10
                                border
                                border-white/10
                                text-xs
                                text-gray-200
                            ">
                                Team Management
                            </div>

                        </div>

                    </div>


                    {/* Footer */}

                    <div className="
                        text-xs
                        text-gray-400
                    ">
                        Trusted workspace for modern real estate teams
                    </div>

                </div>

            </div>


            {/* ================= RIGHT PANEL ================= */}

            <div className="
                w-full
                lg:w-[48%]
                min-h-screen
                flex
                items-center
                justify-center
                px-5
                py-10
                sm:px-8
                bg-white
            ">

                <LoginForm />

            </div>

        </div>
    )
}

export default Login