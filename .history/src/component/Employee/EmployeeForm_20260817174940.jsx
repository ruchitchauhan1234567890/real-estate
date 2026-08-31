import React, { useContext, useRef, useState } from 'react'
import AddForm from './AddForm'
import EmployeeCard from './EmployeeCard'
import { EmployeeContext } from '../../ContextAPI/EmployeeContext'
import ImportEmployee from '../ImportAndExport/ImportEmployee'

const EmployeeForm = () => {

  const { open, setOpen } = useContext(EmployeeContext)

  const inputRef = useRef(null)

  const handleClick = () => {
    
  }

  console.log(open)
  return (
    <div className="w-auto flex justify-between  p-2 shadow-sm ">
      <p className="font-bold text-2xl w-auto">Employee Management</p>
      <div>
        <button onClick={handleClick}>Import</button>
        <button className="bg-blue-400 px-3 py-1 rounded -sm w-auto h-auto" onClick={() => setOpen(!open)}>Add Emp</button>
      </div>
      <ImportEmployee ref={inputRef} />

    </div>
  )
}

export default EmployeeForm
