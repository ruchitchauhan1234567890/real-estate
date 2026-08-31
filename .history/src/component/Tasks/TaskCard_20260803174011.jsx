import React from 'react'
import { IoPeopleCircle } from "react-icons/io5";
import { MdEmojiPeople } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbCalendarDue } from "react-icons/tb";

const TaskCard = () => {
    const task = JSON.parse(localStorage.getItem("tasks"))
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    const myTask = task.filter((tasks) => tasks.assign === loggedUser.name)
    console.log(myTask)

    let totalTask = ""
    let pending = ""
    let inProgress = ""
    let completed = ""



    if (loggedUser.isAdmin) {
        totalTask = task.length
        pending = task.filter((task) => task.taskStatus === "Pending").length
        inProgress = task.filter((task) => task.taskStatus === "Processing").length
        completed = task.filter((task) => task.taskStatus === "Completed").length
    } else {
        totalTask = myTask.length
        pending = myTask.filter((task) => task.taskStatus === "Pending").length
        inProgress = myTask.filter((task) => task.taskStatus === "Processing").length
        completed = myTask.filter((task) => task.taskStatus === "Completed").length
    }


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
        // {
        //     id: 5,
        //     title: "OverDue",
        //     value: 6,
        //     icon: TbCalendarDue
        // },
    ]


    return (
        <div className="grid grid-cols-4 gap-2 mt-3 ">
            {cards.map((item) => {
                return (
                    <div className="flex shadow-sm h-15 px-2 gap-2 items-center rounded ">
                        <item.icon className="h-10 w-10 m-2 p-1 rounded bg-[#E8DADA] " />
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
