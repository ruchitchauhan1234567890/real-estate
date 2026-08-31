import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { MdEmojiPeople } from "react-icons/md";

const DashboardCard = () => {
    const lead = JSON.parse(localStorage.getItem("leads"))
    const emp = JSON.parse(localStorage.getItem("employee"))
    const task = JSON.parse(localStorage.getItem("tasks"))


    const totalLead = lead.length
    const convertedLead = lead.filter((lead) => lead.status=== "Converted").length
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
        <div className="mt-3">
            <div className="grid  grid-cols-4 gap-2">
                {card.map((item) => {
                    return (
                        <div className="flex items-center gap-3 px-3 py-2 rounded shadow">
                            <item.icon className="h-8 w-8 rounded bg-gray-400" />
                            <div className="">
                                <p>{item.title}</p>
                                <p>{item.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DashboardCard
