import React, { useState } from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import SelectEmpCard from '../component/EmployeeDashboard/SelectEmpCard'
import EmployeeLeadByStatus from '../component/EmployeeDashboard/Charts/EmployeeLeadByStatus'
import { leadByStatus } from '../component/EmployeeDashboard/Utils/EmployeeData'

const EmployeeDashboard = () => {
    const [selectEmp, setSelectEmp] = useState(null)
    const lead = JSON.parse(localStorage.parse("leads"))
    const myLead = lead.filter((lead) => lead.assignedTo === selectEmp)
    
    const leadByStatuss = leadByStatus(myLead)
    
    return (
        <div>
            <EmployeeDashboardForm setSelectEmp={setSelectEmp} />
            <SelectEmpCard selectEmp={selectEmp}  />
        </div>

        <div>
            <EmployeeLeadByStatus  />
        </div>
    )
}

export default EmployeeDashboard
