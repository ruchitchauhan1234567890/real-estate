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
    //   <div>
    //     <LeadTitle/>
    //   <div className="mt-2 flex gap-3">
    //     <LeadPipelineChart data={leadPipelineChart}/>
    //     <LeadByStatus data={leadBySourcee}/>
    //     <TodaysFollowUp data={lead} />
    //   </div>
    //   <div className="mt-2 flex gap-3">
    //      <RecentLead data={lead}/>
    //     <OverDueFollowUp data={lead} />
    //   </div>


    // </div>
    <>

      <div>
        <LeadTitle />
      </div>
      <div className="grid grid-cols-6 gap-2 mt-2">

        <div className="col-span-3">
          <LeadPipelineChart data={leadPipelineChart} />
        </div>
        <div className="col-span-2">
          <LeadByStatus data={leadBySourcee} />
        </div>
      </div>
    </>
  )
}

export default LeadDashboard
