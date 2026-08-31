import React from 'react'

const DashboardCard = () => {
    const card = [
        {
            title : "Total Leads",
            value : "",
            icon : ""
        },
        {
            title : 'Converted Leads',
            value : '',
            icon : ""
        },
        {
            title : "Total Employees",
            value : "",
            icon :''
        },
        {
            title : "Pending Tasks",
            value : '',
            icon : ''
        }
    ]
  return (
    <div>
      <div className="grid  grid-cols-4"></div>
    </div>
  )
}

export default DashboardCard
