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
                lg:w-[55%]

                relative
                overflow-hidden
            ">

                {/* ================= BACKGROUND IMAGE ================= */}

                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Premium Corporate Architecture"
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        object-center
                    "
                />


                {/* ================= OVERLAY ================= */}

                <div className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-slate-900/95
                    via-slate-900/80
                    to-blue-900/70
                " />


                {/* ================= CONTENT ================= */}

                <div className="
                    relative
                    z-10

                    w-full
                    h-full

                    flex
                    flex-col
                    justify-between

                    px-12
                    py-14
                    xl:px-16
                    xl:py-20

                    text-white
                ">


                    {/* ================= LOGO ================= */}

                    <div className="
                        flex
                        items-center
                        gap-4
                    ">

                        <div className="
                            w-12
                            h-12

                            rounded-xl

                            bg-blue-600

                            flex
                            items-center
                            justify-center

                            text-2xl
                            font-bold

                            shadow-lg
                            shadow-blue-900/40
                        ">
                            R
                        </div>


                        <div>

                            <h1 className="
                                text-2xl
                                font-bold
                                tracking-tight
                                text-white
                            ">
                                RealtyCRM
                            </h1>

                            <p className="
                                text-xs
                                font-medium
                                tracking-wide
                                text-blue-200
                                uppercase
                            ">
                                Enterprise Suite
                            </p>

                        </div>

                    </div>


                    {/* ================= MAIN CONTENT ================= */}

                    <div className="max-w-xl pb-10">

                        {/* Accent */}

                        <div className="
                            w-12
                            h-1.5

                            bg-blue-500

                            rounded-full

                            mb-8
                        " />


                        {/* Heading */}

                        <h2 className="
                            text-4xl
                            xl:text-5xl
                            2xl:text-6xl

                            font-bold
                            leading-[1.1]

                            tracking-tight
                            text-white
                        ">
                            Elevate your
                            <br />
                            real estate operations.
                        </h2>


                        {/* Description */}

                        <p className="
                            mt-6

                            text-base
                            xl:text-lg
                            leading-relaxed

                            text-slate-300

                            max-w-md
                        ">
                            Centralize leads, streamline workflows, and drive unprecedented growth with our industry-leading CRM platform designed exclusively for modern real estate professionals.
                        </p>


                        {/* ================= FEATURES ================= */}

                        <div className="
                            flex
                            flex-wrap

                            gap-4

                            mt-10
                        ">

                            <div className="
                                px-4
                                py-2.5

                                rounded-lg

                                bg-white/5

                                border
                                border-white/10

                                text-sm
                                font-medium
                                text-white

                                backdrop-blur-md
                            ">
                                Intelligent Lead Routing
                            </div>


                            <div className="
                                px-4
                                py-2.5

                                rounded-lg

                                bg-white/5

                                border
                                border-white/10

                                text-sm
                                font-medium
                                text-white

                                backdrop-blur-md
                            ">
                                Pipeline Automation
                            </div>


                            <div className="
                                px-4
                                py-2.5

                                rounded-lg

                                bg-white/5

                                border
                                border-white/10

                                text-sm
                                font-medium
                                text-white

                                backdrop-blur-md
                            ">
                                Performance Analytics
                            </div>

                        </div>

                    </div>


                    {/* ================= FOOTER ================= */}

                    <div className="
                        flex
                        items-center
                        gap-4
                        text-sm
                        text-slate-400
                        font-medium
                    ">
                        <div className="flex -space-x-2">
                            <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                            <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=2" alt="Avatar" />
                            <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=3" alt="Avatar" />
                        </div>
                        <p>Trusted by 10,000+ top-producing teams globally.</p>
                    </div>

                </div>

            </div>


            {/* ================= RIGHT PANEL ================= */}

            <div className="
                w-full
                lg:w-[45%]

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