import React from 'react'
import LeadTitle from '../component/LeadDashboard.jsx/LeadTitle'
import { leadByStatus } from '../component/LeadDashboard.jsx/Utils/LeadData'

const LeadDashboard = () => {
    const lead = JSON.parse(localStorage.getItem("leads"))

    const leadByStatus = leadByStatus(lead)
  return (
    <div>
      <div>
        <LeadTitle/>
      </div>
    </div>
  )
}

export default LeadDashboard
