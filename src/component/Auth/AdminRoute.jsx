import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const AdminRoute = () => {

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser"))

    if (!loggedUser) {
        return <Navigate to="/" replace />
    }

    if (!loggedUser.isAdmin) {
        return <Navigate to="/dashboard" replace />
    }

    return <Outlet />
}

export default AdminRoute