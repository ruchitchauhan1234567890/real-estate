import React from 'react'

const PropertiesForm = ({open,setOpen}) => {
  return (
    <div>
      <div className="flex justify-between bg-amber-600 h-10 px-2 w-full">
        <p>Properties Management</p>
        <button className="bg-amber-800 w-auto h-auto" onClick={() => setOpen(!open) }>Add Property</button>
      </div>
    </div>
  )
}

export default PropertiesForm
