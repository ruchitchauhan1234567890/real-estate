import React from 'react'
import { IoPeopleCircle } from "react-icons/io5";
import { MdEmojiPeople } from "react-icons/md";
import { LuClock } from "react-icons/lu";

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
            title: "Converted",
            value: converted,
            icon: HiUsers
        },
        {
            id: 5,
            title: "Lost",
            value: lost,
            icon: FaThumbsDown
        },
        {
            id: 6,
            title: "New",
            value: newLead,
            icon: MdAccessibilityNew
        }
    ]


    return (
        <div>

        </div>
    )
}

export default TaskCard
