import React from 'react'

const PropertiesForm = ({open,setOpen}) => {
  return (
    <div>
      <div className="flex justify-between w-full">
        <p>Properties Management</p>
        <button onClick={() => setOpen(!open) }>Add Property</button>
      </div>
    </div>
  )
}

export default PropertiesForm
