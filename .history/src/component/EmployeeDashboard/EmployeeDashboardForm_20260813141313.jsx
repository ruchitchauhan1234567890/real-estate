import React from 'react'

const EmployeeDashboardForm = () => {
    
    const employee = JSON.parse(localStorage.getItem("employee"))
    const employees = employee.filter((emp) => !emp.isAdmin)
    console.log(employees)

  return (
    <div>
      <p className="text-1xl font-bold">Employee Dashboard</p>
      <p className="text-xs">View employee performance and their activities</p>
    </div>
  )
}

export default EmployeeDashboardForm
