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
            iconColor: "text-blue-600"
        },
        {
            title: "Converted Leads",
            value: convertedLead,
            icon: HiUsers,
            bg: "bg-green-50",
            iconColor: "text-green-600"
        },
        {
            title: "Pending Tasks",
            value: pendingTask,
            icon: MdEmojiPeople,
            bg: "bg-orange-50",
            iconColor: "text-orange-600"
        }
    ]

    return (
        <div className="mt-5 w-full">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {card.map((item, index) => {

                    const Icon = item.icon

                    return (
                        <div
                            key={index}
                            className="
                                w-full
                                h-[50px]
                                bg-white
                                border
                                border-gray-200
                                rounded-2xl
                                px-7
                                py-6
                                shadow-sm
                                hover:shadow-md
                                transition-all
                            "
                        >

                            <div className="
                                flex
                                items-center
                                justify-between
                                h-full
                            ">

                                {/* Content */}
                                <div className="flex flex-col justify-center">

                                    <p className="
                                        text-base
                                        font-semibold
                                        text-gray-500
                                    ">
                                        {item.title}
                                    </p>

                                    <p className="
                                        mt-3
                                        text-4xl
                                        leading-none
                                        font-bold
                                        text-gray-900
                                    ">
                                        {item.value}
                                    </p>

                                </div>


                                {/* Icon */}
                                <div
                                    className={`
                                        w-[68px]
                                        h-[68px]
                                        rounded-2xl
                                        ${item.bg}
                                        flex
                                        items-center
                                        justify-center
                                    `}
                                >

                                    <Icon
                                        className={`
                                            w-9
                                            h-9
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