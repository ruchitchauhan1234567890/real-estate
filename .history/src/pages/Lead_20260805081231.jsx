import React, { useState } from 'react'
import LeadsForm from '../component/Leads/LeadsForm'
import AddLead from '../component/Leads/AddLead'
import LeadCard from '../component/Leads/LeadCard'
import LeadTable from '../component/Leads/LeadTable'
import UserLeadTable from '../component/Leads/UserLeadTable'

const Lead = () => {
  const [open, setOpen] = useState(false)
  const [editedLead, setEditedLead] = useState(null)

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(loggedUser)

  

  return (
    <div>
      <LeadsForm open={open} setOpen={setOpen} />
      <LeadCard />
      {loggedUser.isAdmin && <LeadTable open={open} setOpen={setOpen} />}
      {!loggedUser.isAdmin && <UserLeadTable />}
    </div>
  )
}

export default Lead
