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
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    shadow-sm
                    px-4
                    py-2.5
                    flex
                    items-center
                    justify-between
                "
            >

                {/* Left */}
                <div>
                    <h1
                        className="
                            text-base
                            font-bold
                            text-gray-900
                        "
                    >
                        Task Management
                    </h1>

                    <p
                        className="
                            text-[10px]
                            text-gray-500
                            mt-0.5
                        "
                    >
                        Manage and track employee tasks
                    </p>
                </div>


                {/* Right */}
                {loggedUser?.isAdmin && (
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="
                            flex
                            items-center
                            gap-1.5
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-3
                            py-1.5
                            rounded-md
                            text-[11px]
                            font-medium
                            transition
                            shadow-sm
                        "
                    >
                        <FiPlus className="w-3.5 h-3.5" />
                        Add Task
                    </button>
                )}
            </div>

            {/* Add Task Modal */}
            <AddTask />
        </>
    )
}

export default TaskForm