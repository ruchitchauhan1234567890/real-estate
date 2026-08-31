import React, { useState } from 'react'
import AddForm from './AddForm'
import EmployeeCard from './EmployeeCard'

const EmployeeForm = () => {
    const [open,setOpen] = useState(false)
    console.log(open)
  return (
    <div className="w-auto flex justify-between  p-2 shadow-md ">
      <p>Employee Management</p>
      <button className="bg-blue-400 px-3 py-1 rounded-sm w-auto h-auto" onClick={() => setOpen(!open)}>Add Emp</button>
      <AddForm open={open} setOpen={setOpen}/>
      <EmployeeCard data={data} setData={setData}/>
    </div>
  )
}

export default EmployeeForm
