import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Dashboard = () => {
  return (
    <div>
        <div>

      <SideBar/>
        </div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard
