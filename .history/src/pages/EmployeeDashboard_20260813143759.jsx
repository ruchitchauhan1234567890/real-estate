import React, { useState } from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import SelectEmpCard from '../component/EmployeeDashboard/SelectEmpCard'

const EmployeeDashboard = () => {
    const [selectEmp, setSelectEmp] = useState(null)
    const lead = JSON.parse(localStorage.getItem("leads"))
    const hisLeads = lead.filter((lead) => lead.assignedTo === selectEmp)
    console.log(hisLeads)
    console.log(selectEmp)
    return (
        <div>
            <EmployeeDashboardForm setSelectEmp={setSelectEmp} />
            <SelectEmpCard selectEmp={selectEmp} hisLeads={hisLeads} />
        </div>
    )
}

export default EmployeeDashboard
