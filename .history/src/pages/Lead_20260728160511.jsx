import React, { useState } from 'react'
import LeadsForm from '../component/Leads/LeadsForm'
import AddLead from '../component/Leads/AddLead'
import LeadCard from '../component/Leads/LeadCard'

const Lead = () => {
  const [leadData, setLeadData] = useState([])
  return (
    <div>
      <LeadsForm setLeadData={setLeadData} />
      <LeadCard/>
    </div>
  )
}

export default Lead
