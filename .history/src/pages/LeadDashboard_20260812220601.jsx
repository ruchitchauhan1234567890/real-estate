import React from 'react'
import LeadTitle from '../component/LeadDashboard.jsx/LeadTitle'
import { leadBySource, leadByStatus } from '../component/LeadDashboard.jsx/Utils/LeadData'
import LeadBySource from '../component/LeadDashboard.jsx/Charts/LeadBySource'

const LeadDashboard = () => {
    const lead = JSON.parse(localStorage.getItem("leads"))

    const leadByStatuss = leadByStatus(lead)
    const leadBySourcee = leadBySource(lead)

  return (
      <div>
        <LeadTitle/>
      <div className="mt-2">
        <LeadBySource data={leadByStatuss}/>
        <LeadByStatus data={leadBySourcee}/>
      </div>


    </div>
  )
}

export default LeadDashboard
