import React from 'react'

const DashboardForm = () => {

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    return (
        <div className="mb-4">

            <div className="flex items-center justify-between">

                {/* Left Content */}
                <div>
                    <h1 className="
                        text-lg
                        font-semibold
                        text-gray-800
                    ">
                        Dashboard
                    </h1>

                    <p className="
                        text-xs
                        text-gray-500
                        mt-1
                    ">
                        {loggedUser.isAdmin === true
                            ? "Welcome back, Admin! Here's what's happening with your business."
                            : "Welcome back! Here's what's to do today."
                        }
                    </p>
                </div>

            </div>

        </div>
    )
}

export default DashboardForm