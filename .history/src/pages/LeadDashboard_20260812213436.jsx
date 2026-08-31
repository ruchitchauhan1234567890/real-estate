import React from 'react'
import LeadTitle from '../component/LeadDashboard.jsx/LeadTitle'

const LeadDashboard = () => {
    const lead = JSON.parse(localStorage.getItem("leads"))
  return (
    <div>
      <div>
        <LeadTitle/>
      </div>
    </div>
  )
}

export default LeadDashboard
