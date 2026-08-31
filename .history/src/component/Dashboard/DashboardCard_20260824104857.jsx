import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { MdCheckCircleOutline, MdDomain, MdAttachMoney } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const DashboardCard = () => {

    const lead = JSON.parse(localStorage.getItem("leads")) || []
    const employee = JSON.parse(localStorage.getItem("employee")) || []
    const emp = employee.filter((emp) => !emp.isAdmin)
    const task = JSON.parse(localStorage.getItem("tasks")) || []

    const totalLead = lead.length
    const convertedLead = lead.filter(
        (lead) => lead.status === "Converted"
    ).length

    // Simulated data for properties, customers, and revenue (since we don't have this in localStorage based on previous code)
    const totalProperties = 120;
    const totalEmployee  = emp.length

    const pendingTask = task.filter(
        (task) => task.taskStatus === "Pending"
    ).length

    const card = [
        {
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp,
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            trend: "+ 12.5% from last month",
            trendUp: true
        },
        {
            title: "Converted Leads",
            value: convertedLead,
            icon: MdCheckCircleOutline,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            trend: "+ 15.8% from last month",
            trendUp: true
        },
        {
            title: "Total Employees",
            value: totalEmployee,
            icon: MdDomain,
            iconBg: "bg-orange-100",
            
        },
        {
            title: "Tasks Pending",
            value: pendingTask,
            icon: BiTask,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-500",
            trend: "- 5.6% from last month",
            trendUp: false
        }
    ]

    return (
        <div className="mt-2">

            <div className="
                grid 
                grid-cols-2 
                md:grid-cols-2
                lg:grid-cols-4 
                gap-3
            ">

                {card.map((item, index) => {

                    const Icon = item.icon

                    return (
                        <div
                            key={index}
                            className="
                                bg-white
                                border
                                border-gray-200
                                rounded-xl
                                px-4
                                py-3
                                flex
                                items-center
                                gap-4
                                shadow-sm
                                hover:shadow-md
                                transition-shadow
                            "
                        >

                            {/* Icon */}
                            <div
                                className={`
                                    ${item.iconBg}
                                    ${item.iconColor}
                                    w-12
                                    h-12
                                    rounded-lg
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                `}
                            >
                                <Icon className="w-6 h-6" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">

                                <p className="
                                    text-xs
                                    text-gray-500
                                    font-medium
                                    truncate
                                ">
                                    {item.title}
                                </p>

                                <div className="flex items-end justify-between mt-1">
                                    <p className="
                                        text-xl
                                        font-bold
                                        text-gray-900
                                        leading-none
                                    ">
                                        {item.value}
                                    </p>

                                    <p className={`
                                        text-[10px]
                                        font-medium
                                        flex
                                        items-center
                                        ${item.trendUp ? 'text-green-600' : 'text-red-500'}
                                    `}>
                                        {item.trendUp ? <BsArrowUpShort className="w-4 h-4 mr-0.5" /> : <BsArrowDownShort className="w-4 h-4 mr-0.5" />}
                                        {item.trend}
                                    </p>
                                </div>

                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default DashboardCard