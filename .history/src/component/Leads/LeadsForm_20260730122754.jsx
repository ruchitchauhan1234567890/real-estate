import React, { useState } from 'react'
import AddLead from './AddLead'
import AssignedModel from './AssignedModel'

const LeadsForm = ({ leadData, setLeadData, selectedLead, setSelectedLead, selectedEmp, setSelectedEmp }) => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(loggedUser)
  const [open, setOpen] = useState(false)
  const [openModel, setOpenModel] = useState(false)
  const item = selectedLead.length
  return (
    <div className="flex justify-between items-center shadow-sm h-12 px-2">
      <p className="font-bold text-2xl">Leads Management</p>
      <div>
        <button disabled={selectedLead.length == 0} onClick={() => setOpenModel(!openModel)} className={` ${selectedLead.length == 0 ? " px-2 w-auto h-auto py-1 m-2 rounded-sm bg-gray-400 cursor-not-allowed" : " px-2 py-1 m-2 rounded-sm  bg-blue-400 cursor-pointer "}`}>Assigned
        </button>
        <button className="px-2 py-1 m-2 rounded-sm bg-blue-400" onClick={() => setOpen(!open)}>Add Lead</button>
      </div>
      { loggedUser.isAdmin && <AddLead open={open} setOpen={setOpen} leadData={leadData} setLeadData={setLeadData} />}
      {openModel && <AssignedModel openModel={openModel} selectedLead={selectedLead} setSelectedLead={setSelectedLead} selectedEmp={selectedEmp} setSelectedEmp={setSelectedEmp} setOpenModel={setOpenModel} item={item} />}
    </div>
  )
}

export default LeadsForm
