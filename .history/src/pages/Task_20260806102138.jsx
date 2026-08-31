import React, { useState } from 'react'
import TaskForm from '../component/Tasks/TaskForm'
import AddTask from '../component/Tasks/AddTask'
import TaskCard from '../component/Tasks/TaskCard'
import TaskTable from '../component/Tasks/TaskTable'
import UserTaskTable from '../component/Tasks/UserTaskTable'

const Task = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  const [editedTask,setEditedTask] = useState(null)
  const [open,setOpen] = useState(false)
  return (
    <div>
      <TaskForm open={open} setOpen={setOpen} taskData={taskData} setTaskData={setTaskData} editedTask={editedTask} setEditedTask={setEditedTask} />
      <TaskCard />
      {loggedUser.isAdmin && <TaskTable taskData={taskData} open={open} setOpen={setOpen} setTaskData={setTaskData} editedTask={editedTask} setEditedTask={setEditedTask} />}
      {!loggedUser.isAdmin && <UserTaskTable />}
    </div>
  )
}

export default Task
