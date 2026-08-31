import React, { useState } from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import SelectEmpCard from '../component/EmployeeDashboard/SelectEmpCard'

const EmployeeDashboard = () => {
     const[selectEmp,setSelectEmp] = useState(null)
        console.log(selectEmp)
  return (
    <div>
      <EmployeeDashboardForm setSelectEmp={setSelectEmp}/>
        <SelectEmpCard selectEmp={selectEmp} />.
    </div> 
  )
}

export default EmployeeDashboard
