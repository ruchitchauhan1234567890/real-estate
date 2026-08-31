import React from "react"
import { IoPeopleSharp } from "react-icons/io5"
import { HiUsers } from "react-icons/hi"
import { BiTask } from "react-icons/bi"
import { MdCheckCircleOutline } from "react-icons/md"

const EmployeeDashboardCard = () => {

    const current =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    const leads =
        JSON.parse(localStorage.getItem("leads")) || []

    const tasks =
        JSON.parse(localStorage.getItem("tasks")) || []

    // Employee's leads
    const myLead = leads.filter(
        (lead) => lead.assignedTo === current.name
    )

    // Employee's tasks
    const myTask = tasks.filter(
        (task) => task.assign === current.name
    )

    // Calculations
    const totalLead = myLead.length

    const convertedLead = myLead.filter(
        (lead) => lead.status === "Converted"
    ).length

    const conversionRate =
        totalLead > 0
            ? ((convertedLead / totalLead) * 100).toFixed(1)
            : 0

    const pendingTask = myTask.filter(
        (task) => task.taskStatus === "Pending"
    ).length


    const card = [
        {
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp,
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            title: "Converted Leads",
            value: convertedLead,
            icon: HiUsers,
            iconBg: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            title: "Conversion Rate",
            value: `${conversionRate}%`,
            icon: MdCheckCircleOutline,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-500"
        },
        {
            title: "Tasks Pending",
            value: pendingTask,
            icon: BiTask,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-500"
        }
    ]


    return (
        <div className="mt-2">

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
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
                                ">
                                    {item.title}
                                </p>

                                <p className="
                                    text-xl
                                    font-bold
                                    text-gray-900
                                    mt-1
                                ">
                                    {item.value}
                                </p>

                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default EmployeeDashboardCard