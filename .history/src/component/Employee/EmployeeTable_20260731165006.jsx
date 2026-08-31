import React, { useState } from 'react'

const EmployeeTable = ({ data, setData }) => {

    const [filters, setFilters] = useState({
        department: "All",
        role: "All",
        employeeName : ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFilters((prev) => ({ ...prev, [name]: value }))
    }

    console.log(filters)
    const employee = JSON.parse(localStorage.getItem("employee"))
    console.log(employee)

    const filterData = employee.filter((emp) => {
        console.log(emp)
        const department = filters.department === 'All' || filters.department === emp.department
        const role = filters.role === "All" || filters.role === emp.role
        const employeeName = filters.employeeName === "" || emp.name.includes(filters.employeeName)
        console.log(department)
        return (department && role && employeeName)
    })

    const handleReset = (e) => {
        e.preventDefault()
        setFilters({
            department: "All",
            role: "All"
        })
    }



    console.log(filterData)
    return (
        <>
            <div>
                <form className="flex gap-2 mt-2">
                    <div className="border p-1 rounded ">
                        <input type="text" placeholder="search employee" name="employeeName" value={setFilters.employeeName} onChange={handleChange} />
                    </div>
                    <div className="border rounded">
                        <select name="department" value={filters.department} onChange={handleChange}>
                            <option>All</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Support</option>
                        </select>
                    </div>
                    <div className="border rounded">
                        <select name="role" value={filters.role} onChange={handleChange}>
                            <option>All</option>
                            <option>Sales Executive</option>
                            <option>Sales Manager</option>
                            <option>Digital Marketer</option>
                            <option>Marketing Executive</option>
                            <option>Support Executive</option>
                        </select>
                    </div>
                    <div>
                        <button className="h-full rounded px-1 bg-gray-300" onClick={handleReset}>Reset Filter</button>
                    </div>
                </form>
            </div>
            <div className="overflow-x-auto h-80 mt-2">
                <table className="w-full h border-collapse border-2">
                    <thead className="">
                        <tr className="">
                            <th className="border p-2">Name</th>
                            <th className="border">Department</th>
                            <th className="border">Role</th>
                            <th className="border">Phone</th>
                            <th className="border">Status</th>
                            <th className="border">Join Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData.map((curr) => {
                            return (
                                <tr className="">
                                    <td className="border p-1">{curr.name}</td>
                                    <td className="border p-1">{curr.department}</td>
                                    <td className="border p-1">{curr.role}</td>
                                    <td className="border p-1">{curr.phone}</td>
                                    <td className="border p-1">{curr.status}</td>
                                    <td className="border p-1">{curr.date}</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeTable
