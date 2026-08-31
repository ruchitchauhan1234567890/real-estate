import React, { useContext } from "react"
import { FiPlus } from "react-icons/fi"
import AddTask from "./AddTask"
import { TaskContext } from "../../ContextAPI/TaskContext"

const TaskForm = () => {

    const loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
    )

    const { setOpen, open } = useContext(TaskContext)

    return (
        <>
            <div
                className="
                    w-full
                    h-10
                    bg-white
                    border
                    border-gray-200
                    rounded-lg
                    shadow-sm
                    px-3
                    flex
                    items-center
                    justify-between
                "
            >

                {/* Title */}
                <div className="flex items-center">
                    <h1 className="
                        text-sm
                        font-semibold
                        text-gray-900
                    ">
                        Task Management
                    </h1>
                </div>

                {/* Add Task */}
                {loggedUser?.isAdmin && (
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="
                            flex
                            items-center
                            gap-1
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-2.5
                            py-1
                            rounded-md
                            text-[10px]
                            font-medium
                            transition
                        "
                    >
                        <FiPlus className="w-3 h-3" />
                        Add Task
                    </button>
                )}
            </div>

            <AddTask />
        </>
    )
}

export default TaskForm