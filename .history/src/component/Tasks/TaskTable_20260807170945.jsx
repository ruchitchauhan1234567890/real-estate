import React, { useContext, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import { TaskContext } from '../../ContextAPI/TaskContext';

const TaskTable = () => {

    const { taskData, setTaskData, open, setOpen, setEditedTask } = useContext(TaskContext)

    const [filters, setFilters] = useState({
        taskStatus: "All",
        priority: "All",
        searchTask: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setFilters((prev) => ({ ...prev, [name]: value }))
    }

    console.log(filters)
    console.log(taskData)

    const filterData = taskData.filter((task) => {
        const tasks = filters.taskStatus == "All" || task.taskStatus === filters.taskStatus
        const prioritys = filters.priority == "All" || task.priority === filters.priority
        const searchTask = filters.searchTask === "" || task.title.includes(filters.searchTask)
        return (tasks && prioritys && searchTask)
    })

    const handleDelete = (id) => {
        const deleteTask = filterData.filter((task) => task.id !== id)
        console.log(deleteTask)
        localStorage.setItem("tasks", JSON.stringify(deleteTask))
        setTaskData(deleteTask)
    }

    const handleUpdate = (task) => {
        setEditedTask(task)
        setOpen(!open)
    }
    return (
        <div>
            <div className="flex gap-2 mt-2">
                <div>
                    <input type="text" placeholder='search task' name="searchTask" className="border p-1 rounded" onChange={handleChange} />
                </div>
                <div className="border rounded">
                    <select onChange={handleChange} name="priority" value={filters.priority}>
                        <option>All</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
                <div className="border rounded">
                    <select onChange={handleChange} name="taskStatus" value={filters.taskStatus}>
                        <option>All</option>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Completed</option>
                    </select>
                </div>
                <button className="cursor-pointer px-2 items-center bg-gray-300   rounded   hover:bg-gray-400 " onClick={() => setFilters({
                    taskStatus: "All",
                    priority: "All",
                    searchTask: ""
                })}>Reset Filter</button>

            </div>
            <div  className="overflow-hidden rounded-xl border border-gray-300 shadow-md mt-2">
                <table  className="w-full border-separate border-spacing-0 ">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-5 py-2 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">#</th>
                            <th className="px-5 py-2 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">Task title</th>
                            <th className="px-5 py-2 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">Related lead</th>
                            <th className="px-5 py-2 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">Assigned To</th>
                            <th className="px-5 py-2 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">Priority</th>
                            <th className="px-5 py-2 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">Status</th>
                            <th className="px-5 py-2 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {filterData.map((task, index) => {
                            return (
                                <tr className="hover:bg-blue-50 transition duration-150">
                                    <td className="px-5 py-1 text-sm text-gray-700">{index + 1}</td>
                                    <td className="px-5 py-1 text-sm text-gray-700">{task.title}</td>
                                    <td className="px-5 py-1 text-sm text-gray-700">{task.lead || " - "}</td>
                                    <td className="px-5 py-1 text-sm text-gray-700">{task.assign}</td>
                                    <td className="px-5 py-1 text-sm text-gray-700">{task.priority}</td>
                                    <td className="px-5 py-1 text-sm text-gray-700">{task.taskStatus}</td>
                                    <td className="px-4 py-1">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => handleUpdate(task)}
                                                className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition duration-200"
                                            >
                                                <HiPencilSquare size={18} />
                                            </button>

                                            <button
                                                onClick={() => handleDelete(task.id)}
                                                className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition duration-200"
                                            >
                                                <MdDeleteOutline size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskTable
