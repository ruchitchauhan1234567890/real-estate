import React from "react"
import { IoPeopleSharp } from "react-icons/io5"
import { HiUsers } from "react-icons/hi"
import { MdEmojiPeople } from "react-icons/md"

const EmployeeDashboardCard = () => {

    const current =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    const lead =
        JSON.parse(localStorage.getItem("leads")) || []

    const myLead = lead.filter(
        (lead) => lead.assignedTo === current.name
    )

    const task =
        JSON.parse(localStorage.getItem("tasks")) || []

    const myTask = task.filter(
        (task) => task.assign === current.name
    )

    const totalLead = myLead.length

    const convertedLead = myLead.filter(
        (lead) => lead.status === "Converted"
    ).length

    const pendingTask = myTask.filter(
        (task) => task.taskStatus === "Pending"
    ).length

    const card = [
        {
            id: 1,
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp,
            bg: "bg-purple-50 dark:bg-purple-500/10",
            color: "text-purple-600 dark:text-purple-400"
        },
        {
            id: 2,
            title: "Converted Leads",
            value: convertedLead,
            icon: HiUsers,
            bg: "bg-green-50 dark:bg-green-500/10",
            color: "text-green-600 dark:text-green-400"
        },
        {
            id: 3,
            title: "Pending Tasks",
            value: pendingTask,
            icon: MdEmojiPeople,
            bg: "bg-orange-50 dark:bg-orange-500/10",
            color: "text-orange-600 dark:text-orange-400"
        }
    ]

    return (
        <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-2
            mt-2
        ">

            {card.map((item) => {

                const Icon = item.icon

                return (
                    <div
                        key={item.id}
                        className="
                            bg-white
                            dark:bg-[#1f1f2b]

                            border
                            border-gray-200
                            dark:border-[#303044]

                            rounded-lg

                            px-2.5
                            py-2

                            flex
                            items-center
                            gap-2

                            shadow-sm
                            hover:shadow-md

                            transition-colors
                            min-w-0
                        "
                    >

                        {/* Icon */}

                        <div
                            className={`
                                ${item.bg}
                                ${item.color}

                                w-8
                                h-8

                                rounded-md

                                flex
                                items-center
                                justify-center

                                shrink-0
                            `}
                        >
                            <Icon className="w-4 h-4" />
                        </div>


                        {/* Content */}

                        <div className="min-w-0">

                            <p className="
                                text-[10px]
                                font-medium

                                text-gray-500
                                dark:text-gray-400

                                truncate
                            ">
                                {item.title}
                            </p>

                            <p className="
                                text-base
                                font-bold

                                text-gray-900
                                dark:text-white

                                leading-tight
                                mt-0.5
                            ">
                                {item.value}
                            </p>

                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default EmployeeDashboardCard