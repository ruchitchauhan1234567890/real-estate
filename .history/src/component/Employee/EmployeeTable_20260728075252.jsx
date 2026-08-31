import React from 'react'

const EmployeeTable = ({ data, setData }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 mt-4">
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
                    {data.map((curr) => {
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
    )
}

export default EmployeeTable
