import React from 'react'

const DashboardForm = ({ selectedMonth, setSelectedMonth }) => {

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    return (
        <div className="">

            <div className="flex items-center justify-between">

                {/* Left Content */}
                <div>
                    <h1 className="
                        text-1xl
                        font-bold
                        text-gray-900
                    ">
                        Dashboard
                    </h1>

                    <p className="
                        text-xs
                        text-gray-500
                        mt-1
                    ">
                        {loggedUser.isAdmin === true
                            ? "Welcome back, Admin! Here's what's happening with your business today."
                            : "Welcome back! Here's what's to do today."
                        }
                    </p>
                </div>
                
                {/* Right Content - Date Picker */}
                <div>
                    <input 
                        type="month" 
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth?.(e.target.value)}
                        className="
                            px-4 
                            py-2 
                            border 
                            border-gray-200 
                            rounded-lg 
                            text-sm 
                            text-gray-600 
                            focus:outline-none 
                            focus:border-blue-500 
                            focus:ring-1 
                            focus:ring-blue-500
                            shadow-sm
                        "
                    />
                </div>

            </div>

        </div>
    )
}

export default DashboardForm