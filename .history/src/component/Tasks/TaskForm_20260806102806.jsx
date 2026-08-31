import React, { useContext, useState } from 'react'
import AddTask from './AddTask'
import { TaskContext } from '../../ContextAPI/TaskContext'

const TaskForm = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  const {setOpen} = useContext(TaskContext)
  return (
    <div className="flex justify-between items-center w-full h-12 shadow p-2">
      <p className="font-bold text-2xl">Task Management</p>
      {loggedUser.isAdmin &&  <button className="bg-blue-400 px-2 py-1 rounded-sm" onClick={() => setOpen(!open)}>Add Tasks</button>}
      <AddTask open={open} setOpen={setOpen} editedTask={editedTask} setEditedTask={setEditedTask}/>
    </div>
  )
}

export default TaskForm
