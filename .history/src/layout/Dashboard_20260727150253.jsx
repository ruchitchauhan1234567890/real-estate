import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 h-screen">
            <div className="col-span-2">
                <SideBar />
            </div>
            <div className="col-span-10 flex flex-col">
            <NavBar />
            </div>
            <main>

            <Outlet />
            </main>
        </div>
    )
}

export default Dashboard
