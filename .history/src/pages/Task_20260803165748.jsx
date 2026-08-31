import React from 'react'
import TaskForm from '../component/Tasks/TaskForm'
import AddTask from '../component/Tasks/AddTask'
import TaskCard from '../component/Tasks/TaskCard'
import TaskTable from '../component/Tasks/TaskTable'
import UserTaskTable from '../component/Tasks/UserTaskTable'

const Task = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  return (
    <div>
      <TaskForm/>
      <TaskCard/>

      {loggedUser.isAdmin && <TaskTable/>}
      {!loggedUser.isAdmin<UserTaskTable/>}
    </div>
  )
}

export default Task
