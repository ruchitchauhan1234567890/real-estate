import React from 'react'

const EmployeeTable = ({ data, setData }) => {
    const employee = JSON.parse(localStorage.getItem("employee"))
    console.log(employee)
    return (
        <>
            <div>
                <form className="flex gap-2 mt-2">
                    <div className="border p-1  ">
                        <input type="text" placeholder="search employee" />
                    </div>
                    <div className="border rounded">
                        <select name="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Support</option>
                        </select>
                    </div>
                    <div className="border">
                        <select name="role">
                            <option>Sales Executive</option>
                            <option>Sales Manager</option>
                            <option>Digital Marketer</option>
                            <option>Marketing Executive</option>
                            <option>Support Executive</option>
                        </select>
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
                        {employee.map((curr) => {
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
