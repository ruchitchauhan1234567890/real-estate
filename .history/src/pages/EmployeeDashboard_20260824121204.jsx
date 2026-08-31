import React, { useState } from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import SelectEmpCard from '../component/EmployeeDashboard/SelectEmpCard'
import EmployeeLeadByStatus from '../component/EmployeeDashboard/Charts/EmployeeLeadByStatus'
import { leadByStatus, monthlyConversionRate, taskByStatus } from '../component/EmployeeDashboard/Utils/EmployeeData'
import EmployeeTaskStatus from '../component/EmployeeDashboard/Charts/EmployeeTaskStatus'
import HisLeads from '../component/EmployeeDashboard/HisLeads'
import HisTasks from '../component/EmployeeDashboard/HisTasks'
import MonthlyConversioRate from '../component/EmployeeDashboard/Charts/MonthlyConversionRate'
import MonthlyConversionRate from '../component/EmployeeDashboard/Charts/MonthlyConversionRate'

const EmployeeDashboard = () => {
    

    const emp = JSON.parse(localStorage.getItem("employee"))
    const select = emp.filter((emp) => !emp.isAdmin)[0]
    console.log(select)
    const [selectEmp, setSelectEmp] = useState(select.name)
    const lead = JSON.parse(localStorage.getItem("leads"))
    const task = JSON.parse(localStorage.getItem("tasks"))
    const myLead = lead.filter((lead) => lead.assignedTo === selectEmp)
    const myTask = task.filter((task) => task.assign === selectEmp)

    const leadByStatuss = leadByStatus(myLead)
    const taskByStatuss = taskByStatus(myTask)
    const monthlyConversionRates = monthlyConversionRate(myLead)
    console.log(monthlyConversionRates)
    console.log(leadByStatuss)
    console.log(taskByStatuss)

    return (
        <>
            <div>
                <EmployeeDashboardForm selectEmp={selectEmp} setSelectEmp={setSelectEmp} />
                <SelectEmpCard selectEmp={selectEmp} />
            </div>

            <div className='grid grid-cols-6 gap-2 mt-2'>
                <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                    <EmployeeLeadByStatus data={leadByStatuss} />
                </div>
                <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                    <EmployeeTaskStatus data={taskByStatuss} />
                </div>
                <div className="col-span-2">
                    <HisLeads lead={myLead} />
                </div>
                <div className="col-span-3">
                    <HisTasks task={myTask} />
                </div>
                <div className="col-span-3 bg-white rounded-xl border border-gray-200 shadow-sm h-full>
                    <MonthlyConversionRate data={monthlyConversionRates} />
                </div>
            </div>
        </>
    )
}

export default EmployeeDashboard
