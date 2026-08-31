import React from 'react'

const PropertiesForm = ({open,setOpen}) => {
  return (
    <div>
      <div className="flex justify-between bg-amber-600 h-12 px-2 w-full items-center">
        <p>Properties Management</p>
        <button className="bg-amber-800 w-auto h-8 shadow-2xl my-1 rounded-sm px-1 bg-blue-500" onClick={() => setOpen(!open) }>Add Property</button>
      </div>
    </div>
  )
}

export default PropertiesForm
