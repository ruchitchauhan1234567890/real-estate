import React from 'react'
import LeadTitle from '../component/LeadDashboard.jsx/LeadTitle'
import { leadBySource, leadPipeline } from '../component/LeadDashboard.jsx/Utils/LeadData'
import LeadByStatus from '../component/LeadDashboard.jsx/Charts/LeadByStatus'
import LeadPipelineChart from '../component/LeadDashboard.jsx/Charts/LeadPipelineChart'
import TodaysFollowUp from '../component/LeadDashboard.jsx/Charts/TodaysFollowUp'
import OverDueFollowUp from '../component/LeadDashboard.jsx/Charts/OverDueFollowUp'
import RecentLead from '../component/Dashboard/Charts/RecentLead'

const LeadDashboard = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  const lead = JSON.parse(localStorage.getItem("leads"))


  const leadBySourcee = leadBySource(lead)
  console.log(leadBySourcee)
  const leadPipelineChart = leadPipeline(lead)

  return (

    <>

      {
        loggedUser.isAdmin && (
          <>
            <div>
              <LeadTitle />
            </div>
            <div className="grid grid-cols-6 gap-2 mt-2">
              <div className="col-span-3">
                <LeadPipelineChart data={leadPipelineChart} />
              </div>
              <div className="col-span-3">
                <LeadByStatus data={leadBySourcee} />
              </div>
              <div className="col-span-2">
                <TodaysFollowUp data={lead} />
              </div>
              <div className="col-span-2">
                <RecentLead data={lead} />
              </div>
              <div className="col-span-2">
                <OverDueFollowUp data={lead} />
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default LeadDashboard
