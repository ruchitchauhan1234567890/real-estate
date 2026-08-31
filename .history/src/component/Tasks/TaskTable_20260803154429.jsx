import React from 'react'

const TaskTable = () => {
    const task = JSON.parse(localStorage.getItem("tasks"))
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>#</th>
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
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable
