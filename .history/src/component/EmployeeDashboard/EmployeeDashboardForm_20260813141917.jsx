import React, { useState } from 'react'

const EmployeeDashboardForm = () => {

    const[selectEmp,setSelectEmp] = useState(null)
    console.log(selectEmp)

    const employee = JSON.parse(localStorage.getItem("employee"))
    const employees = employee.filter((emp) => !emp.isAdmin)
    console.log(employees)

    return (
        <div>
            <div>
                <p className="text-1xl font-bold">Employee Dashboard</p>
                <p className="text-xs">View employee performance and their activities</p>
            </div>
            <div>
                <select onChange={(e) => setSelectEmp(e.target.value)}>
                    {employees.map((emp) => (
                            <option>
                                {emp.name}
                            </option>
                    ))}
                </select>
            </div>
        </div>

    )
}

export default EmployeeDashboardForm
