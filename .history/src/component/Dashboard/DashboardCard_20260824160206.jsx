import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { MdCheckCircleOutline } from "react-icons/md";
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

    const totalProperties = 120;
    const totalEmployee = emp.length

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
            icon: IoPeopleSharp,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500"
        },
        {
            title: "Tasks Pending",
            value: pendingTask,
            icon: BiTask,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-500",
        }
    ]

    return (
        <div className="mt-2">

            <div className="
                grid
                grid-cols-2
                md:grid-cols-2
                lg:grid-cols-4
                gap-2
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
                                rounded-lg
                                px-3
                                py-2
                                flex
                                items-center
                                gap-2.5
                                shadow-sm
                                hover:shadow
                                transition-shadow
                            "
                        >

                            {/* Icon */}
                            <div
                                className={`
                                    ${item.iconBg}
                                    ${item.iconColor}
                                    w-9
                                    h-9
                                    rounded-md
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                `}
                            >
                                <Icon className="w-[18px] h-[18px]" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">

                                <p className="
                                    text-[10px]
                                    text-gray-500
                                    font-medium
                                    truncate
                                ">
                                    {item.title}
                                </p>

                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                    mt-0.5
                                ">

                                    <p className="
                                        text-lg
                                        font-semibold
                                        text-gray-900
                                        leading-none
                                    ">
                                        {item.value}
                                    </p>

                                    {item.trend && (
                                        <p
                                            className={`
                                                text-[8px]
                                                font-medium
                                                flex
                                                items-center
                                                whitespace-nowrap
                                                ${item.trendUp
                                                    ? "text-green-600"
                                                    : "text-red-500"
                                                }
                                            `}
                                        >
                                            {item.trendUp
                                                ? (
                                                    <BsArrowUpShort
                                                        className="w-3 h-3"
                                                    />
                                                )
                                                : (
                                                    <BsArrowDownShort
                                                        className="w-3 h-3"
                                                    />
                                                )
                                            }

                                            {item.trend}
                                        </p>
                                    )}

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