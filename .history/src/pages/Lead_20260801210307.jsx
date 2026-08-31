import React, { useState } from 'react'
import LeadsForm from '../component/Leads/LeadsForm'
import AddLead from '../component/Leads/AddLead'
import LeadCard from '../component/Leads/LeadCard'
import LeadTable from '../component/Leads/LeadTable'
import UserLeadTable from '../component/Leads/UserLeadTable'

const Lead = () => {
  const [leadData, setLeadData] = useState([])
  const [selectedLead, setSelectedLead] = useState([])  
  const [selectedEmp, setSelectedEmp] = useState(null)

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  console.log(loggedUser)
  console.log(leadData)  
  return (
    <div>
      <LeadsForm setLeadData={setLeadData} selectedLead={selectedLead} setSelectedLead={setSelectedLead} selectedEmp={selectedEmp} setSelectedEmp={setSelectedEmp} />
    /
    </div>
  )
}

export default Lead
