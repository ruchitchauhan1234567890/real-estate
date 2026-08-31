import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";

const EmployeeTable = ({ data, setData, setEditedEmp, open, setOpen }) => {

    const [filters, setFilters] = useState({
        department: "All",
        role: "All",
        employeeName: ""
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
            role: "All",
            employeeName: ""
        })
    }

    const handleDelete = (id) => {
        const deleteData = filterData.filter((emp) => emp.id !== id)
        localStorage.setItem("employee", JSON.stringify(deleteData))
        setData(deleteData)
    }

    const handleUpdate = (emp) => {
        console.log(emp)
        setEditedEmp(emp)
        setOpen(!open)
    }

    console.log(filterData)
    return (
        <>
            <div>
                <form className="flex gap-2 mt-2">
                    <div className="border p-1 rounded ">
                        <input type="text" placeholder="search employee" name="employeeName" value={filters.employeeName} onChange={handleChange} />
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
                        <button className="h-full rounded px-1 bg-gray-300 hover:bg-gray-400" onClick={handleReset}>Reset Filter</button>
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
                            <th className="border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData.map((curr) => {
                            if (!curr.isAdmin)
                                return (
                                    <tr className="">
                                        <td className="border p-1">{curr.name}</td>
                                        <td className="border p-1">{curr.department}</td>
                                        <td className="border p-1">{curr.role}</td>
                                        <td className="border p-1">{curr.phone}</td>
                                        <td className="border p-1">{curr.status}</td>
                                        <td className="border p-1">{curr.date}</td>
                                        <td className="border flex justify-center gap-4 py-1">
                                            <MdDeleteOutline onClick={() => handleDelete(curr.id)} className="w-5 border rounded h-6 " />
                                            <HiPencilSquare onClick={() => handleUpdate(curr)} className="w-5 border rounded  h-6" />
                                        </td>
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
