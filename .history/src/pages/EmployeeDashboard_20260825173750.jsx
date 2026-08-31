import React, { useState } from 'react'
import EmployeeDashboardForm from '../component/EmployeeDashboard/EmployeeDashboardForm'
import SelectEmpCard from '../component/EmployeeDashboard/SelectEmpCard'
import EmployeeLeadByStatus from '../component/EmployeeDashboard/Charts/EmployeeLeadByStatus'
import {
    leadByStatus,
    monthlyConversionRate,
    taskByStatus
} from '../component/EmployeeDashboard/Utils/EmployeeData'
import EmployeeTaskStatus from '../component/EmployeeDashboard/Charts/EmployeeTaskStatus'
import HisLeads from '../component/EmployeeDashboard/HisLeads'
import HisTasks from '../component/EmployeeDashboard/HisTasks'
import MonthlyConversionRate from '../component/EmployeeDashboard/Charts/MonthlyConversionRate'

const EmployeeDashboard = () => {

    const emp =
        JSON.parse(localStorage.getItem("employee")) || []

    const select =
        emp.filter((emp) => !emp.isAdmin)[0]

    const [selectEmp, setSelectEmp] = useState(
        select?.name || ""
    )

    const lead =
        JSON.parse(localStorage.getItem("leads")) || []

    const task =
        JSON.parse(localStorage.getItem("tasks")) || []

    const myLead = lead.filter(
        (lead) => lead.assignedTo === selectEmp
    )

    const myTask = task.filter(
        (task) => task.assign === selectEmp
    )

    const leadByStatuss =
        leadByStatus(myLead)

    const taskByStatuss =
        taskByStatus(myTask)

    const monthlyConversionRates =
        monthlyConversionRate(myLead)


    return (
        <div className="
            w-full
            min-w-0
        ">

            {/* ================= HEADER ================= */}

            <div className="w-full">

                <EmployeeDashboardForm
                    selectEmp={selectEmp}
                    setSelectEmp={setSelectEmp}
                />

                <SelectEmpCard
                    selectEmp={selectEmp}
                />

            </div>


            {/* ================= DASHBOARD CONTENT ================= */}

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-6
                gap-2
                mt-2
                w-full
                min-w-0
            ">


                {/* ================= LEAD STATUS ================= */}

                <div className="
                    col-span-1
                    sm:col-span-1
                    lg:col-span-2
                    min-w-0
                    bg-white
                    dark:bg-[#1F1F30]
                    rounded-xl
                    border
                    border-gray-200
                    dark:border-[#353548]
                    shadow-sm
                    overflow-hidden
                ">

                    <EmployeeLeadByStatus
                        data={leadByStatuss}
                    />

                </div>


                {/* ================= TASK STATUS ================= */}

                <div className="
                    col-span-1
                    sm:col-span-1
                    lg:col-span-2
                    min-w-0
                    bg-white
                    dark:bg-[#1F1F30]
                    rounded-xl
                    border
                    border-gray-200
                    dark:border-[#353548]
                    shadow-sm
                    overflow-hidden
                ">

                    <EmployeeTaskStatus
                        data={taskByStatuss}
                    />

                </div>


                {/* ================= HIS LEADS ================= */}

                <div className="
                    col-span-1
                    sm:col-span-2
                    lg:col-span-2
                    min-w-0
                    overflow-hidden
                ">

                    <HisLeads
                        lead={myLead}
                    />

                </div>


                {/* ================= HIS TASKS ================= */}

                <div className="
                    col-span-1
                    sm:col-span-2
                    lg:col-span-3
                    min-w-0
                    overflow-hidden
                ">

                    <HisTasks
                        task={myTask}
                    />

                </div>


                {/* ================= MONTHLY CONVERSION ================= */}

                <div className="
                    col-span-1
                    sm:col-span-2
                    lg:col-span-3
                    min-w-0
                    bg-white
                    dark:bg-[#1F1F30]
                    rounded-xl
                    border
                    border-gray-200
                    dark:border-[#353548]
                    shadow-sm
                    overflow-hidden
                ">

                    <MonthlyConversionRate
                        data={monthlyConversionRates}
                    />

                </div>

            </div>

        </div>
    )
}

export default EmployeeDashboard