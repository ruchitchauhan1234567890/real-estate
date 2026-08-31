import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { MdEmojiPeople } from "react-icons/md";

const DashboardCard = () => {

    const lead = JSON.parse(localStorage.getItem("leads"))
    const emp = JSON.parse(localStorage.getItem("employee"))
    const task = JSON.parse(localStorage.getItem("tasks"))

    const totalLead = lead.length
    const convertedLead = lead.filter((lead) => lead.status === "Converted").length
    const totalEmp = emp.filter((emp) => !emp.isAdmin).length
    const pendingTask = task.filter((task) => task.taskStatus === "Pending").length

    const card = [
        {
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp
        },
        {
            title: 'Converted Leads',
            value: convertedLead,
            icon: HiUsers
        },
        {
            title: "Total Employees",
            value: totalEmp,
            icon: IoPeopleSharp
        },
        {
            title: "Pending Tasks",
            value: pendingTask,
            icon: MdEmojiPeople
        }
    ]
    return (
        <div className="mt-5 w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                {card.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="
                            group
                            bg-white
                            border
                            border-gray-200
                            rounded-xl
                            px-5
                            py-4
                            shadow-sm
                            hover:shadow-md
                            hover:border-gray-300
                            transition-all
                            duration-200
                        "
                        >

                            <div className="flex items-center justify-between">

                                {/* Left Content */}
                                <div>

                                    <p className="
                                    text-sm
                                    font-medium
                                    text-gray-500
                                    mb-2
                                ">
                                        {item.title}
                                    </p>

                                    <h2 className="
                                    text-2xl
                                    font-bold
                                    text-gray-800
                                ">
                                        {item.value}
                                    </h2>

                                    <p className="
                                    text-xs
                                    text-gray-400
                                    mt-1
                                ">
                                        Current total
                                    </p>

                                </div>


                                {/* Icon */}
                                <div
                                    className="
                                    flex
                                    items-center
                                    justify-center
                                    w-12
                                    h-12
                                    rounded-lg
                                    bg-gray-100
                                    text-gray-600
                                    group-hover:bg-gray-900
                                    group-hover:text-white
                                    transition-all
                                    duration-200
                                "
                                >
                                    <Icon className="w-6 h-6" />
                                </div>

                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default DashboardCard
