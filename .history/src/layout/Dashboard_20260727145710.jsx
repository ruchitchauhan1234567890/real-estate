import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Dashboard = () => {
    return (
        <div className="grid grid-flow-col grid-rows-3">
            <div className="raw-span-3">
                <SideBar />
            </div>
            <div className="z-30">
            <NavBar />
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard
