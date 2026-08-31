import React from 'react'
import AddForm from '../Employee/AddForm'
import AddLead from './AddLead'

const LeadsForm = () => {
  return (
    <div className="flex justify-between items-center shadow-sm h-12 px-2">
      <p>Leads Management</p>
      <button className="px-2 py-1 m-2 rounded-sm bg-blue-400">Add Lead</button>
      <AddLead>
    </div>
  )
}

export default LeadsForm
