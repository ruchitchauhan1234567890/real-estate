import React from 'react'
import { IoPeopleCircle } from "react-icons/io5";
import { MdEmojiPeople } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbCalendarDue } from "react-icons/tb";

const TaskCard = () => {
    const task = JSON.parse(localStorage.getItem("tasks"))
    const cards = [
        {
            id: 1,
            title: "Total Task",
            value: 10,
            icon: IoPeopleCircle
        },
        {
            id: 2,
            title: "Pending",
            value: 2,
            icon: MdEmojiPeople
        },
        {
            id: 3,
            title: "In Progress",
            value: 7,
            icon: LuClock
        },
        {
            id: 4,
            title: "Completed",
            value: 89,
            icon: FaRegCheckCircle
        },
        {
            id: 5,
            title: "OverDue",
            value: 6,
            icon: TbCalendarDue
        },
    ]


    return (
        <div className="grid grid-cols-5 gap-2 mt-3 ">
            {cards.map((item) => {
                return (
                    <div className="flex shadow-sm h-15 px-2 gap-2 items-center rounded ">
                        <item.icon className="h-10 w-10 m-2 p-1 rounded bg-gray-200  " />
                        <div>
                            <p>{item.title}</p>
                            <p>{item.value}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TaskCard
