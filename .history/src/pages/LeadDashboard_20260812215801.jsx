import React from 'react'
import LeadTitle from '../component/LeadDashboard.jsx/LeadTitle'
import { leadByStatus } from '../component/LeadDashboard.jsx/Utils/LeadData'
import LeadBySource from '../component/LeadDashboard.jsx/Charts/LeadBySource'

const LeadDashboard = () => {
    const lead = JSON.parse(localStorage.getItem("leads"))

    const leadByStatuss = leadByStatus(lead)

  return (
      <div>
        <LeadTitle/>
      <div className="mt-2">
        <LeadBySource data={leadByStatuss}/>
      </div>


    </div>
  )
}

export default LeadDashboard
