import React from 'react'

const HisTasks = ({task}) => {
    const myTask = [...task].sort((a,b) => {
        new Date(a.createdAt) - new Date(b.createdAt)
    })
  return (
    <div>
      
    </div>
  )
}

export default HisTasks
