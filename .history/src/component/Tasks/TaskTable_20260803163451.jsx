import React, { useState } from 'react'

const TaskTable = () => {

    const [filters, setFilters] = useState({
        taskStatus: "All",
        priority: "All"
    })


    const handleChange = (e) => {
        const { value, name } = e.target
        setFilters((prev) => ({ ...prev, [name]: value }))
    }
    const task = JSON.parse(localStorage.getItem("tasks"))

    const filterData = task.filter((task) => {
        const tasks = filters.taskStatus == "All" || task.taskStatus === filters.taskStatus
        const prioritys = filters.priority == "All" || task.priority === filters.priority
        return (tasks && prioritys)
    })
    return (
        <div>
            <div className="flex gap-2 mt-2">
                <div>
                    <input type="text" placeholder='search task' className="border p-1 rounded" />
                </div>
                <div className="border rounded">
                    <select onChange={handleChange} name="priority">
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
            <table className="w-full border-collapse border mt-2">
                <thead>
                    <tr>
                        <th className="border p-1">#</th>
                        <th className="border p-1">Task title</th>
                        <th className="border p-1">Related lead</th>
                        <th className="border p-1">Assigned To</th>
                        <th className="border p-1">Priority</th>
                        <th className="border p-1">Status</th>
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TaskTable
