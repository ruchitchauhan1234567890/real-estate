import React, { useContext } from "react"
import { IoPeopleCircle } from "react-icons/io5"
import { MdEmojiPeople } from "react-icons/md"
import { LuClock } from "react-icons/lu"
import { FaRegCheckCircle } from "react-icons/fa"
import { TaskContext } from "../../ContextAPI/TaskContext"

const TaskCard = () => {

    const { taskData = [] } = useContext(TaskContext)

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    const myTask = taskData.filter(
        (task) => task.assign === loggedUser.name
    )

    const tasks = loggedUser.isAdmin ? taskData : myTask

    const totalTask = tasks.length

    const pending = tasks.filter(
        (task) => task.taskStatus === "Pending"
    ).length

    const inProgress = tasks.filter(
        (task) => task.taskStatus === "Processing"
    ).length

    const completed = tasks.filter(
        (task) => task.taskStatus === "Completed"
    ).length

    const cards = [
        {
            id: 1,
            title: "Total Tasks",
            value: totalTask,
            icon: IoPeopleCircle,
            iconBg: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            id: 2,
            title: "Pending",
            value: pending,
            icon: MdEmojiPeople,
            iconBg: "bg-orange-50",
            iconColor: "text-orange-500"
        },
        {
            id: 3,
            title: "In Progress",
            value: inProgress,
            icon: LuClock,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            id: 4,
            title: "Completed",
            value: completed,
            icon: FaRegCheckCircle,
            iconBg: "bg-green-50",
            iconColor: "text-green-600"
        }
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">

            {cards.map((item) => {

                const Icon = item.icon

                return (
                    <div
                        key={item.id}
                        className="
                            bg-white
                            border
                            border-gray-200
                            rounded-lg
                            shadow-sm
                            px-2.5
                            py-2
                            flex
                            items-center
                            gap-2
                            h-14
                            hover:shadow-md
                            transition-shadow
                        "
                    >

                        {/* Icon */}
                        <div
                            className={`
                                ${item.iconBg}
                                ${item.iconColor}
                                w-9
                                h-9
                                rounded-md
                                flex
                                items-center
                                justify-center
                                shrink-0
                            `}
                        >
                            <Icon className="w-5 h-5" />
                        </div>

                        {/* Content */}
                        <div className="min-w-0">

                            <p className="
                                text-[10px]
                                text-gray-500
                                font-medium
                                truncate
                            ">
                                {item.title}
                            </p>

                            <p className="
                                text-base
                                font-bold
                                text-gray-900
                                leading-tight
                                mt-0.5
                            ">
                                {item.value}
                            </p>

                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default TaskCard