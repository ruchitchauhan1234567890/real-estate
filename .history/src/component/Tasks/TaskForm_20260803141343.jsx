import React, { useState } from 'react'
import AddTask from './AddTask'

const TaskForm = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-between items-center w-full h-12 shadow p-2">
      <p>Task Management</p>
      <button className="bg-blue-400 px-2 py-1 rounded-sm">Add Tasks</button>
      <AddTask />
    </div>
  )
}

export default TaskForm
