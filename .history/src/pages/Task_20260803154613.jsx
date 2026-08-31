import React from 'react'
import TaskForm from '../component/Tasks/TaskForm'
import AddTask from '../component/Tasks/AddTask'
import TaskCard from '../component/Tasks/TaskCard'
import TaskTable from '../component/Tasks/TaskTable'

const Task = () => {
  return (
    <div>
      <TaskForm/>
      <TaskCard/>
      <TaskTable/>
    </div>
  )
}

export default Task
