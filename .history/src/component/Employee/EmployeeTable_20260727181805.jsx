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
      </table>
    </div>
  )
}

export default EmployeeTable
