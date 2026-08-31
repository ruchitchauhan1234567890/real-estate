import React from 'react'
import TaskForm from '../component/Tasks/TaskForm'
import AddTask from '../component/Tasks/AddTask'
import TaskCard from '../component/Tasks/TaskCard'
import TaskTable from '../component/Tasks/TaskTable'
import UserTaskTable from '../component/Tasks/UserTaskTable'

const Task = () => {
  return (
    <div>
      <TaskForm/>
      <TaskCard/>
      <TaskTable/>
      <UserTaskTable/>
    </div>
  )
}

export default Task
