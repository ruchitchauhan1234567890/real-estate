import React, { useState } from 'react'
import LeadsForm from '../component/Leads/LeadsForm'
import AddLead from '../component/Leads/AddLead'
import LeadCard from '../component/Leads/LeadCard'
import LeadTable from '../component/Leads/LeadTable'

const Lead = () => {
  const [leadData, setLeadData] = useState([])
  const [selectedLead, setSelectedLead] = useState([])
  const [selectedEmp, setSelectedEmp] = useState(null)
  return (
    <div>
      <LeadsForm setLeadData={setLeadData} selectedLead={selectedLead} selectedEmp={selectedEmp} setSelectedEmp={setSelectedEmp} />
      <LeadCard leadData={leadData}/>
      <LeadTable leadData={leadData} selectedEmp={selectedEmp} setSelected={setSelectedEmp} selectedLead={selectedLead} setSelectedLead={setSelectedLead} />
    </div>
  )
}

export default Lead
