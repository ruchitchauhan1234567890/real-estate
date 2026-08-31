import React, { useState } from 'react'
import AddLead from './AddLead'

const LeadsForm = ({ leadData, setLeadData, selectedLead }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-between items-center shadow-sm h-12 px-2">
      <p>Leads Management</p>
      <div>
        <button disable={!selectedLead > 0} className={` ${selectedLead.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-400 cursor-pointer "}px-2 py-1 m-2 rounded-sm bg-blue-400`}></button>
        <button className="px-2 py-1 m-2 rounded-sm bg-blue-400" onClick={() => setOpen(!open)}>Add Lead</button>
      </div>
      <AddLead open={open} setOpen={setOpen} leadData={leadData} setLeadData={setLeadData} />
    </div>
  )
}

export default LeadsForm
