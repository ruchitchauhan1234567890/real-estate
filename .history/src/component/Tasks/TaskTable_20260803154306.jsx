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
                <th>Assigned To</th>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default TaskTable
