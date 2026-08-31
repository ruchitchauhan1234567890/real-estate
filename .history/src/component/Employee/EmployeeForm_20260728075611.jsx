import React, { useState } from 'react'
import AddForm from './AddForm'
import EmployeeCard from './EmployeeCard'

const EmployeeForm = ({open,setOpen}) => {
   
    console.log(open)
  return (
    <div className="w-auto flex justify-between  p-2 shadow-md ">
      <p className="font-bold w-80 bg-amber-600">Employee Management</p>
      <button className="bg-blue-400 px-3 py-1 rounded-sm w-auto h-auto" onClick={() => setOpen(!open)}>Add Emp</button>
      {/* <AddForm open={open} setOpen={setOpen}/> */}
    </div>
  )
}

export default EmployeeForm
