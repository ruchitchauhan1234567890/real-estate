import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Dashboard = () => {
    return (
        <div className="gird gird-flow-cols">
            <div className="fixed z-20">
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
