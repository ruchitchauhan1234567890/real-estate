import React from 'react'

const HisTasks = ({task}) => {
    const myTask = [...task].sort((a,b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
    )
  return (
    <div>
      
    </div>
  )
}

export default HisTasks
