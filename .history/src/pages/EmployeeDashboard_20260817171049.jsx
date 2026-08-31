import React, { useState } from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import SelectEmpCard from '../component/EmployeeDashboard/SelectEmpCard'
import EmployeeLeadByStatus from '../component/EmployeeDashboard/Charts/EmployeeLeadByStatus'
import { leadByStatus, taskByStatus } from '../component/EmployeeDashboard/Utils/EmployeeData'
import EmployeeTaskStatus from '../component/EmployeeDashboard/Charts/EmployeeTaskStatus'
import HisLeads from '../component/EmployeeDashboard/HisLeads'
import HisTasks from '../component/EmployeeDashboard/HisTasks'

const EmployeeDashboard = () => {

    const emp = JSON.parse(localStorage.getItem("employees"))
    const select = emp.filter((emp) => !emp.isAdmin)[0]
    console.log(select)
    const [selectEmp, setSelectEmp] = useState(select)
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
            {/* <div>
                <EmployeeDashboardForm setSelectEmp={setSelectEmp} />
                <SelectEmpCard selectEmp={selectEmp} />
            </div>

            <div className="grid grid-cols-3 mt-2 gap-2">
                <EmployeeLeadByStatus data={leadByStatuss} />
                <EmployeeTaskStatus data={taskByStatuss} />
                <HisLeads lead={myLead} />
            </div>

            <div className="grid grid-cols-3">
                <HisTasks task={myTask} />
            </div>
             */}

            <div>
                <EmployeeDashboardForm setSelectEmp={setSelectEmp} />
                <SelectEmpCard selectEmp={selectEmp} />
            </div>

            <div className='grid grid-cols-4 gap-2 mt-2'>
                <div className="col-span-2">
                    <EmployeeLeadByStatus data={leadByStatuss} />
                </div>
                <div className="col-span-2">
                    <EmployeeTaskStatus data={taskByStatuss} />
                </div>
                <div className="col-span-2">
                    <HisLeads lead={myLead} />
                </div>
                <div className="col-span-2">
                    <HisTasks task={myTask} />
                </div>
            </div>
        </>
    )
}

export default EmployeeDashboard
