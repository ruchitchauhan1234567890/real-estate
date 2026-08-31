import React from 'react'

const TaskTable = () => {
    const task = JSON.parse(localStorage.getItem("tasks"))
  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
            <tr>
                <th className="border">#</th>
                <th>Task title</th>
                <th>Related lead</th>
                <th>Assigned To</th>
                <th>Priority</th>
                <th>Status</th>
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
