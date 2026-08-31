import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { MdEmojiPeople } from "react-icons/md";

const DashboardCard = () => {

    const lead = JSON.parse(localStorage.getItem("leads")) || []
    const emp = JSON.parse(localStorage.getItem("employee")) || []
    const task = JSON.parse(localStorage.getItem("tasks")) || []

    const totalLead = lead.length
    const convertedLead = lead.filter(
        (lead) => lead.status === "Converted"
    ).length

    const totalEmp = emp.filter(
        (emp) => !emp.isAdmin
    ).length

    const pendingTask = task.filter(
        (task) => task.taskStatus === "Pending"
    ).length

    const card = [
        {
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            title: "Converted Leads",
            value: convertedLead,
            icon: HiUsers,
            iconBg: "bg-green-50",
            iconColor: "text-green-600"
        },
        {
            title: "Total Employees",
            value: totalEmp,
            icon: IoPeopleSharp,
            iconBg: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            title: "Pending Tasks",
            value: pendingTask,
            icon: MdEmojiPeople,
            iconBg: "bg-orange-50",
            iconColor: "text-orange-600"
        }
    ]

    return (
        <div className="mt-4">

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
                                rounded-lg
                                px-4
                                py-3
                                flex
                                items-center
                                gap-3
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
                                    w-10
                                    h-10
                                    rounded-lg
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                `}
                            >
                                <Icon className="w-5 h-5" />
                            </div>

                            {/* Content */}
                            <div className="min-w-0">

                                <p className="
                                    text-xs
                                    text-gray-500
                                    font-medium
                                    truncate
                                ">
                                    {item.title}
                                </p>

                                <p className="
                                    text-xl
                                    font-semibold
                                    text-gray-800
                                    mt-0.5
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

export default DashboardCard