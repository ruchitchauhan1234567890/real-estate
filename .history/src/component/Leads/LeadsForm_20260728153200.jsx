import React, { useState } from 'react'
import AddLead from './AddLead'

const LeadsForm = () => {
    const [open,setOpen] = useState(false)
  return (
    <div className="flex justify-between items-center shadow-sm h-12 px-2">
      <p>Leads Management</p>
      <button className="px-2 py-1 m-2 rounded-sm bg-blue-400">Add Lead</button>
      <AddLead/>
    </div>
  )
}

export default LeadsForm
