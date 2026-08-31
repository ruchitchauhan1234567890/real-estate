import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { MdEmojiPeople } from "react-icons/md";

const DashboardCard = () => {
    const card = [
        {
            title: "Total Leads",
            value: 3,
            icon: IoPeopleSharp
        },
        {
            title: 'Converted Leads',
            value: 4,
            icon:  HiUsers
        },
        {
            title: "Total Employees",
            value: 5,
            icon: IoPeopleSharp
        },
        {
            title: "Pending Tasks",
            value: 9,
            icon: MdEmojiPeople
        }
    ]
    return (
        <div className="mt-3">
            <div className="grid  grid-cols-4 gap-2">
                {card.map((item) => {
                    return (
                        <div className="flex  bg-amber-600">
                            <item.icon className="h-4 w-4 bg-amber-300" />
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
