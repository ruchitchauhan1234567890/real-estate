import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 h-screen">
            <div className="raw-span-3">
                <SideBar />
            </div>
            <div className="col-span-2 raw-span-2">
            <NavBar />
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard
