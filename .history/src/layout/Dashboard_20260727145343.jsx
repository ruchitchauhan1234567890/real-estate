import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Dashboard = () => {
    return (
        <div>
            <div className="fixed z-2">
                <SideBar />
            </div>
            <div className="z-10">
            <NavBar />
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard
