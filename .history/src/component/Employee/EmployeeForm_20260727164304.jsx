import React, { useState } from 'react'

const EmployeeForm = () => {
    const [open,setOpen] = useState()
  return (
    <div className="w-auto flex justify-between  p-2 shadow-md ">
      <p>Employee Management</p>
      <button className="bg-blue-400 px-3 py-1 rounded-sm w-auto h-auto ">Add Emp</button>
    </div>
  )
}

export default EmployeeForm
