import React from 'react'
import LeadTitle from '../component/LeadDashboard.jsx/LeadTitle'
import { leadBySource, leadPipeline } from '../component/LeadDashboard.jsx/Utils/LeadData'
import LeadByStatus from '../component/LeadDashboard.jsx/Charts/LeadByStatus'
import LeadPipelineChart from '../component/LeadDashboard.jsx/Charts/LeadPipelineChart'
import TodaysFollowUp from '../component/LeadDashboard.jsx/Charts/TodaysFollowUp'
import OverDueFollowUp from '../component/LeadDashboard.jsx/Charts/OverDueFollowUp'
import RecentLead from '../component/Dashboard/Charts/RecentLead'

const LeadDashboard = () => {
    const lead = JSON.parse(localStorage.getItem("leads"))

    
    const leadBySourcee = leadBySource(lead)
    const leadPipelineChart = leadPipeline(lead)

  return (
    //   
    
    <div>
      
    </div>
  )
}

export default LeadDashboard
