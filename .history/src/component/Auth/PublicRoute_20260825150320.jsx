import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const PublicRoute = () => {

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser"))

    if (loggedUser) {
        return (
            <Navigate
                to={
                    loggedUser.isAdmin
                        ? "/dashboard"
                        : "/dashboard/employeeDashboard"
                }
                replace
            />
        )
    }

    return <Outlet />
}

export default PublicRoute