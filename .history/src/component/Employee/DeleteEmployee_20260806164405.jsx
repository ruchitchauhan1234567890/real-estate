import React from 'react'

const DeleteEmployee = ({setDeleteModelOpen,deleteModelOpen}) => {

  if(!deleteModelOpen) return   
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className=" w-150 h-100 bg-white" >
            hello
      </div>
    </div>
  )
}

export default DeleteEmployee
