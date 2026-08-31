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
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp,
            bg: "bg-blue-50",
            iconColor: "text-blue-600",
            valueColor: "text-blue-700"
        },
        {
            title: "Converted Leads",
            value: convertedLead,
            icon: HiUsers,
            bg: "bg-green-50",
            iconColor: "text-green-600",
            valueColor: "text-green-700"
        },
        {
            title: "Pending Tasks",
            value: pendingTask,
            icon: MdEmojiPeople,
            bg: "bg-orange-50",
            iconColor: "text-orange-600",
            valueColor: "text-orange-700"
        }
    ]

    return (
        <div className="mt-3">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

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
                                shadow-sm
                                hover:shadow-md
                                transition
                            "
                        >

                            <div className="flex items-center justify-between">

                                {/* Left */}
                                <div>

                                    <p className="
                                        text-[10px]
                                        font-medium
                                        text-gray-500
                                    ">
                                        {item.title}
                                    </p>

                                    <p className={`
                                        mt-1
                                        text-xl
                                        font-bold
                                        ${item.valueColor}
                                    `}>
                                        {item.value}
                                    </p>

                                </div>


                                {/* Icon */}
                                <div className={`
                                    w-10
                                    h-10
                                    rounded-lg
                                    ${item.bg}
                                    flex
                                    items-center
                                    justify-center
                                `}>

                                    <Icon
                                        className={`
                                            w-5
                                            h-5
                                            ${item.iconColor}
                                        `}
                                    />

                                </div>

                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default EmployeeDashboardCard