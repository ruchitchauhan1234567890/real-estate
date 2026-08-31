import React from 'react'

const UserTaskTable = () => {

    const task = JSON.parse(localStorage.getItem("tasks"))
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

    const myTask = task.filter((task) => task.assign === loggedUser.name  )
  return (
    <div>
      
    </div>
  )
}

export default UserTaskTable
