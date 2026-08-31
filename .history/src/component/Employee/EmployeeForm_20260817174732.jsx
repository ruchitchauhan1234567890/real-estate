import React, { useContext, useState } from 'react'
import AddForm from './AddForm'
import EmployeeCard from './EmployeeCard'
import { EmployeeContext } from '../../ContextAPI/EmployeeContext'

const EmployeeForm = () => {

  const {open,setOpen} = useContext(EmployeeContext)
   
    console.log(open)
  return (
    <div className="w-auto flex justify-between  p-2 shadow-sm ">
      <p className="font-bold text-2xl w-auto">Employee Management</p>
      <div>
      <button>Import</button>
      <button className="bg-blue-400 px-3 py-1 rounded -sm w-auto h-auto" onClick={() => setOpen(!open)}>Add Emp</button>
      </div>

    </div>
  )
}

export default EmployeeForm
