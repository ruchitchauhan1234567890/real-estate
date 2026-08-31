import React, { useState } from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import SelectEmpCard from '../component/EmployeeDashboard/SelectEmpCard'
import EmployeeLeadByStatus from '../component/EmployeeDashboard/Charts/EmployeeLeadByStatus'
import { leadByStatus, taskByStatus } from '../component/EmployeeDashboard/Utils/EmployeeData'
import EmployeeTaskStatus from '../component/EmployeeDashboard/Charts/EmployeeTaskStatus'

const EmployeeDashboard = () => {
    const [selectEmp, setSelectEmp] = useState(null)
    const lead = JSON.parse(localStorage.getItem("leads"))
    const task = JSON.parse(localStorage.getItem("tasks"))
    const myLead = lead.filter((lead) => lead.assignedTo === selectEmp)
    const myTask = task.filter((task) => task.assign === selectEmp)

    const leadByStatuss = leadByStatus(myLead)
    const taskByStatuss = taskByStatus(myTask)
    console.log(leadByStatuss)
    console.log(taskByStatuss)

    return (
        <>

            <div>
                <EmployeeDashboardForm setSelectEmp={setSelectEmp} />
                <SelectEmpCard selectEmp={selectEmp} />
            </div>

            <div className="grid grid-cols-2 mt-2">
                <EmployeeLeadByStatus data={leadByStatuss} />
                <EmployeeTaskStatus data={taskByStatuss} />
            </div>
        </>
    )
}

export default EmployeeDashboard
