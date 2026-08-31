import React, { useState } from 'react'
import LeadsForm from '../component/Leads/LeadsForm'
import AddLead from '../component/Leads/AddLead'

const Lead = () => {
  return (
    <div>
      <AddLead />
      <LeadsForm />
    </div>
  )
}

export default Lead
