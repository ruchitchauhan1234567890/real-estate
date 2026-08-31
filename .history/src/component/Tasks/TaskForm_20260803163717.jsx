import React, { useState } from 'react'
import AddTask from './AddTask'

const TaskForm = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-between items-center w-full h-12 shadow p-2">
      <p className="font-bold text-2xl">Task Management</p>
      <button className="bg-blue-400 px-2 py-1 rounded-sm" onClick={() => setOpen(!open)}>Add Tasks</button>
      <AddTask open={open} setOpen={setOpen}/>
    </div>
  )
}

export default TaskForm
