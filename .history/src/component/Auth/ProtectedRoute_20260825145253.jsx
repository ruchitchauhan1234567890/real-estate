import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser"))

    if (!loggedUser) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default ProtectedRoute