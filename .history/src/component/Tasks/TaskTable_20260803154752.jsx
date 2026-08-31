import React from 'react'

const TaskTable = () => {
    const task = JSON.parse(localStorage.getItem("tasks"))
  return (
    <div>
      <table className="w-full border-collapse border">
        <thead>
            <tr>
                <th className="border p-1">#</th>
                <th className="border p-1">Task title</th>
                <th className="border p-1">Related lead</th>
                <th className="border p-1">Assigned To</th>
                <th className="border p-1">Priority</th>
                <thclassName="border p-1">Status</th>
            </tr>
        </thead>
        <tbody>
            {task.map((task,index) => {
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{task.title}</td>
                        <td>{task.lead}</td>
                        <td>{task.assign}</td>
                        <td>{task.priority}</td>
                        <td>{task.taskStatus}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable
