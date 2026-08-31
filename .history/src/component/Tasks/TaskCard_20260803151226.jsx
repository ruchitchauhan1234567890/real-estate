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
            value: totalTask,
            icon: IoPeopleCircle
        },
        {
            id: 2,
            title: "Pending",
            value: pending,
            icon: MdEmojiPeople
        },
        {
            id: 3,
            title: "In Progress",
            value: inProgress,
            icon: LuClock
        },
        {
            id: 4,
            title: "Completed",
            value: completed,
            icon: FaRegCheckCircle
        },
        {
            id: 5,
            title: "OverDue",
            value: overDue,
            icon: TbCalendarDue
        },
    ]


    return (
        <div className="grid grid-4">
            {cards.map((item) => {
                return (
                    <div>

                    </div>
                )
            })}
        </div>
    )
}

export default TaskCard
