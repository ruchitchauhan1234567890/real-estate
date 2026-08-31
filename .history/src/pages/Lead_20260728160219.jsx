import React, { useState } from 'react'
import LeadsForm from '../component/Leads/LeadsForm'
import AddLead from '../component/Leads/AddLead'
import LeadCard from '../component/Leads/LeadCard'

const Lead = () => {
  return (
    <div>
      <LeadsForm />
      <LeadCard/>
    </div>
  )
}

export default Lead
