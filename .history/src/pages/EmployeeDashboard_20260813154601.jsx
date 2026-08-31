import React, { useState } from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import SelectEmpCard from '../component/EmployeeDashboard/SelectEmpCard'
import EmployeeLeadByStatus from '../component/EmployeeDashboard/Charts/EmployeeLeadByStatus'
import { leadByStatus } from '../component/EmployeeDashboard/Utils/EmployeeData'

const EmployeeDashboard = () => {
    const [selectEmp, setSelectEmp] = useState(null)
    const lead = JSON.parse(localStorage.getItem("leads"))
    const myLead = lead.filter((lead) => lead.assignedTo === selectEmp)

    const leadByStatuss = leadByStatus(myLead)
    console.log(leadByStatuss)

    return (
        <>

            <div>
                <EmployeeDashboardForm setSelectEmp={setSelectEmp} />
                <SelectEmpCard selectEmp={selectEmp} />
            </div>

            <div className="grid grid-cols-3 mt-2">
                <EmployeeLeadByStatus data={leadByStatuss} />
            </div>
        </>
    )
}

export default EmployeeDashboard
