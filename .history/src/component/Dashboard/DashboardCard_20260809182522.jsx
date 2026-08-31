import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { MdEmojiPeople } from "react-icons/md";

const DashboardCard = () => {
    const card = [
        {
            title: "Total Leads",
            value: "",
            icon: IoPeopleSharp
        },
        {
            title: 'Converted Leads',
            value: '',
            icon:  HiUsers
        },
        {
            title: "Total Employees",
            value: "",
            icon: IoPeopleSharp
        },
        {
            title: "Pending Tasks",
            value: '',
            icon: MdEmojiPeople
        }
    ]
    return (
        <div className="mt-3">
            <div className="grid  grid-cols-4">
                {card.map((item) => {
                    return (
                        <div className="flex">
                            {/* <item.icon /> */}
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
