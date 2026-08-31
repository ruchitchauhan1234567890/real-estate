import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";

const TaskTable = ({taskData,setTaskData,editedTask,setEditedTask,open,setOpen}) => {
    // const [task, setTask] = useState(
    //     JSON.parse(localStorage.getItem("tasks"))
    // )
    const [filters, setFilters] = useState({
        taskStatus: "All",
        priority: "All"
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setFilters((prev) => ({ ...prev, [name]: value }))
    }


    console.log(taskData)

    const filterData = taskData.filter((task) => {
        const tasks = filters.taskStatus == "All" || task.taskStatus === filters.taskStatus
        const prioritys = filters.priority == "All" || task.priority === filters.priority
        return (tasks && prioritys)
    })

    const handleDelete = (id) => {
        const deleteTask = filterData.filter((task) => task.id !== id)
        console.log(deleteTask)
        localStorage.setItem("tasks", JSON.stringify(deleteTask))
        setTaskData(deleteTask)
    }

    const handleUpdate = (task) => {
        setEditedTask(task)
        setOpen
    }
    return (
        <div>
            <div className="flex gap-2 mt-2">
                <div>
                    <input type="text" placeholder='search task' className="border p-1 rounded" />
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
                <div className="items-center bg-gray-300  rounded  px-2  hover:bg-gray-400 ">
                    <button onClick={() => setFilters({
                        taskStatus: "All",
                        priority: "All"
                    })}>Reset Filter</button>
                </div>
            </div>
            <table className="w-full border-collapse  mt-2 border-2">
                <thead>
                    <tr>
                        <th className="border p-1">#</th>
                        <th className="border p-1">Task title</th>
                        <th className="border p-1">Related lead</th>
                        <th className="border p-1">Assigned To</th>
                        <th className="border p-1">Priority</th>
                        <th className="border p-1">Status</th>
                        <th className="border p-1">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((task, index) => {
                        return (
                            <tr>
                                <td className="border p-1">{index + 1}</td>
                                <td className="border p-1">{task.title}</td>
                                <td className="border p-1">{task.lead}</td>
                                <td className="border p-1">{task.assign}</td>
                                <td className="border p-1">{task.priority}</td>
                                <td className="border p-1">{task.taskStatus}</td>
                                <td className="border flex justify-center gap-3 py-1 px-1   ">
                                    <MdDeleteOutline onClick={() => handleDelete(task.id)} className="w-5 border rounded h-6 " />
                                    <HiPencilSquare onClick={(handleUpdate(task))} className="w-5 border rounded  h-6" />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TaskTable
