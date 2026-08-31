import React, { useState } from 'react'
import AddTask from './AddTask'

const TaskForm = ({taskData,setTaskData,editedTask,setEditedTask,open,setOpen}) => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  return (
    <div className="flex justify-between items-center w-full h-12 shadow p-2">
      <p className="font-bold text-2xl">Task Management</p>
      {loggedUser.isAdmin && open &&  <button className="bg-blue-400 px-2 py-1 rounded-sm" onClick={() => setOpen(!open)}>Add Tasks</button>}
      <AddTask open={open} setOpen={setOpen} taskData={taskData} setTaskData={setTaskData} editedTask={editedTask} setEditedTask={setEditedTask}/>
    </div>
  )
}

export default TaskForm
