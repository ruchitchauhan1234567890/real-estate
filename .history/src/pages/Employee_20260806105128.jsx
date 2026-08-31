import React, { useContext, useState } from 'react'
import EmployeeForm from '../component/Employee/EmployeeForm'
import AddForm from '../component/Employee/AddForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import EmployeeTable from '../component/Employee/EmployeeTable'
import { EmployeeContext } from '../ContextAPI/EmployeeContext'

const Employee = () => {
  
    const {open} = useContext(EmployeeContext)
    
    return (
        <div>
            { open && <AddForm   />}
            <EmployeeForm  />
            <EmployeeCard  />
            <EmployeeTable open={open} setOpen={setOpen} data={data} setData={setData} editedEmp={editedEmp} setEditedEmp={setEditedEmp}/>
        </div>
    )
}

export default Employee
