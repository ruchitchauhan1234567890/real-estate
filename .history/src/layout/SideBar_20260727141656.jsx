import React from 'react'

const SideBar = () => {
  return (
    <div className="w-40 h-screen bg-amber-200">
        <div>
            <p className="font-bold text-center bg-amber-900">Real-Estate</p>
            <hr/>
        </div>
        <div>
            <ul>
                <li>DashBoard</li>
            </ul>
            <ul>
                <li>Employee</li>
                <li>Leads</li>
                <li>Properties</li>
                <li>Task</li>
                <li>Customer</li>
            </ul>
            <ul>
                <li>Report</li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar
