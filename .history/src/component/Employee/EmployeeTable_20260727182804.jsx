import React from 'react'

const EmployeeTable = ({ data, setData }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2">
                <thead className="">
                    <tr className="">
                        <th>Name</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Join Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((curr) => {
                        return (
                            <tr className="">

                                <td>{curr.name}</td>
                                <td>{curr.department}</td>
                                <td>{curr.role}</td>
                                <td>{curr.phone}</td>
                                <td>{curr.status}</td>
                                <td>{curr.joinDate}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable
