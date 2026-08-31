import React from "react"

const DashboardForm = ({ selectedMonth, setSelectedMonth }) => {

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    return (
        <div className="w-full mb-3">

            <div className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:justify-between
            ">

                {/* Left Content */}
                <div className="min-w-0">

                    <h1 className="
                        text-base
                        sm:text-lg
                        font-semibold
                        text-gray-900
                        leading-tight
                    ">
                        Dashboard
                    </h1>

                    <p className="
                        text-[10px]
                        sm:text-[11px]
                        text-gray-500
                        mt-1
                        leading-relaxed
                        max-w-full
                        sm:max-w-none
                    ">
                        {loggedUser.isAdmin === true
                            ? "Welcome back, Admin! Here's what's happening with your business today."
                            : "Welcome back! Here's what's to do today."
                        }
                    </p>

                </div>


                {/* Right Content - Date Picker */}
                <div className="
                    w-full
                    sm:w-auto
                    shrink-0
                ">

                    <input
                        type="month"
                        value={selectedMonth}
                        onChange={(e) =>
                            setSelectedMonth?.(e.target.value)
                        }
                        className="
                            w-full
                            sm:w-auto
                            h-8
                            px-3
                            border
                            border-gray-200
                            rounded-md
                            text-[11px]
                            text-gray-600
                            bg-white
                            focus:outline-none
                            focus:border-blue-500
                            focus:ring-1
                            focus:ring-blue-100
                            shadow-sm
                            cursor-pointer
                        "
                    />

                </div>

            </div>

        </div>
    )
}

export default DashboardForm