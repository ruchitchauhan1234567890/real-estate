import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProtactedRoute = () => {

    const navigate = useNavigate()
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

    if (loggedUser.isAdmin) {
        return <navigate to="/home" />
    }
}

export default ProtactedRoute
