import React from 'react'

const DashboardForm = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    return (
        <div>
            <div className="flex flex-col">
                <p className="font-bold text-1xl">Dashboard</p>
                <p className="text-sm">
                {loggedUser.isAdmin === "true"
                 ? "Welcome back,Admin Here's whats happing with your business."
                 : "Welcome back Here's whats to do"
                }</p>
            </div>
        </div>
    )
}

export default DashboardForm
