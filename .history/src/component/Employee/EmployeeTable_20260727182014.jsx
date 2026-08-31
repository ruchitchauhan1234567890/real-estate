import React from 'react'

const EmployeeTable = ({data,setData}) => {
  return (
    <div>
      <table>
        <thead>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Join Date</th>
        </thead>
        <tbody>
            {data.map((curr) => {
                return (
                    <>
                    
                    <td>{curr.name}</td>
                    <td>{curr.department}</td>
                    <td>{curr.role}</td>
                    <td>{curr.phone}</td>
                    <td>{curr.status}</td>
                    <td>{curr.joinDate}</td>
                    </>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable
