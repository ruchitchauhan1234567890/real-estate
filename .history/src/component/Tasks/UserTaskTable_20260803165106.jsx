import React from 'react'

const UserTaskTable = () => {

    const task = JSON.parse(localStorage.getItem("tasks"))
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

    console.log(task)
    console.log(loggedUser)
    const myTask = task.filter((task) => task.assign === loggedUser.name)
    console.log(myTask)
  return (
    <div>
      
    </div>
  )
}

export default UserTaskTable
