import React from 'react'

const TaskTable = () => {
    const task = JSON.parse(localStorage.getItem("tasks"))
    return (
        <div>
            <div className="flex gap-2 mt-2">
                    <div>
                        <input type="text" placeholder='search task' className="border p-1 rounded"/>
                    </div>
                    <div className="border rounded">
                        <select>
                            <option>All</option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                    <div className="border rounded">
                        <select>
                            <option>All</option>
                            <option>Pending</option>
                            <option>Processing</option>
                            <option>Completed</option>
                        </select>
                    </div>
                    <div className=" mt-2 bg-gray-300  rounded items-center px-2  hover:bg-gray-400 ">
                        <button>Reset Filter</button>
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
                    {task.map((task, index) => {
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
