import React from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import EmployeeCard from '../component/Employee/EmployeeCard'

const EmployeeDashboard = () => {
     const[selectEmp,setSelectEmp] = useState(null)
        console.log(selectEmp)
  return (
    <div>
      <EmployeeDashboardForm setSelectEmp={setSelectEmp}/>
      <EmployeeCard/>
    </div>
  )
}

export default EmployeeDashboard
