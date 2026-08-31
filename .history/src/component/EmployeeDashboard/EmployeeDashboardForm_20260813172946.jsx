import React, { useState } from 'react'
import Select from 'react-select'

const EmployeeDashboardForm = ({setSelectEmp}) => {
    const employee = JSON.parse(localStorage.getItem("employee"))
    const employees = employee.filter((emp) => !emp.isAdmin)
    console.log(employees)

    const option = employees.map((emp) => ({
        value : emp.name,
        label : emp.name
    }))

    return (
        <div className="flex justify-between">
            <div>
                <p className="text-1xl font-bold">Employee Dashboard</p>
                <p className="text-xs">View employee performance and their activities</p>
            </div>
            <div className="border w-auto rounded-sm">
                {/* <select onChange={(e) => setSelectEmp(e.target.value)}>
                    <option disabled selected>Select Employee</option>
                    {employees.map((emp) => (
                            <option value={emp.name}>
                                {emp.name}
                            </option>
                    ))}
                </select> */}
                <Select
                    options={option}
                    placeholder="search employee"
                    value={}
                    onChange={(selected) => {
                        setSelectEmp(selected.value)
                    }}
                />
            </div>
        </div>

    )
}

export default EmployeeDashboardForm
