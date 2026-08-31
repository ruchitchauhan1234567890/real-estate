import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Dashboard = () => {
    return (
        <div>
            <div className="fixed">
                <SideBar />
            </div>
            <div>

            <NavBar />
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard
