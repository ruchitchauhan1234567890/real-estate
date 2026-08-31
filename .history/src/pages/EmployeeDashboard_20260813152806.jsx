import React, { useState } from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import SelectEmpCard from '../component/EmployeeDashboard/SelectEmpCard'
import EmployeeLeadByStatus from '../component/EmployeeDashboard/Charts/EmployeeLeadByStatus'

const EmployeeDashboard = () => {
    const [selectEmp, setSelectEmp] = useState(null)
    
    return (
        <div>
            <EmployeeDashboardForm setSelectEmp={setSelectEmp} />
            <SelectEmpCard selectEmp={selectEmp}  />
        </div>

        <div>
            <EmployeeLeadByStatus lead={} />
        </div>
    )
}

export default EmployeeDashboard
