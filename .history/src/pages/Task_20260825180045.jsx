import React from "react"
import TaskForm from "../component/Tasks/TaskForm"
import TaskCard from "../component/Tasks/TaskCard"
import TaskTable from "../component/Tasks/TaskTable"
import UserTaskTable from "../component/Tasks/UserTaskTable"

const Task = () => {

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    return (
        <div className="
            w-full
            min-w-0
            min-h-full

            bg-gray-50
            dark:bg-[#15151f]

            transition-colors
        ">

            <TaskForm />

            <TaskCard />

            {loggedUser.isAdmin && (
                <TaskTable />
            )}

            {!loggedUser.isAdmin && (
                <UserTaskTable />
            )}

        </div>
    )
}

export default Task