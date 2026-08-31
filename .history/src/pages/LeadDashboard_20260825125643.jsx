import React from 'react'
import LeadTitle from '../component/LeadDashboard.jsx/LeadTitle'
import {
  leadBySource,
  leadPipeline
} from '../component/LeadDashboard.jsx/Utils/LeadData'

import LeadByStatus from '../component/LeadDashboard.jsx/Charts/LeadByStatus'
import LeadPipelineChart from '../component/LeadDashboard.jsx/Charts/LeadPipelineChart'
import TodaysFollowUp from '../component/LeadDashboard.jsx/Charts/TodaysFollowUp'
import OverDueFollowUp from '../component/LeadDashboard.jsx/Charts/OverDueFollowUp'
import RecentLead from '../component/Dashboard/Charts/RecentLead'

const LeadDashboard = () => {

  const loggedUser =
    JSON.parse(localStorage.getItem("loggedUser"))

  const lead =
    JSON.parse(localStorage.getItem("leads")) || []

  const leadBySourcee = leadBySource(lead)
  const leadPipelineChart = leadPipeline(lead)

  return (

    <>

      {loggedUser?.isAdmin && (

        <>

          {/* ================= TITLE ================= */}

          <div className="w-full">
            <LeadTitle />
          </div>


          {/* ================= DASHBOARD GRID ================= */}

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-6
            gap-2
            mt-2
          ">

            {/* Lead Pipeline */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-2
              min-w-0
            ">
              <LeadPipelineChart
                data={leadPipelineChart}
              />
            </div>


            {/* Lead By Status */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-2
              min-w-0
            ">
              <LeadByStatus
                data={leadBySourcee}
              />
            </div>


            {/* Today's Follow Up */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-2
              min-w-0
            ">
              <TodaysFollowUp
                data={lead}
              />
            </div>


            {/* Recent Leads */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-3
              min-w-0
            ">
              <RecentLead
                data={lead}
              />
            </div>


            {/* Overdue Follow Up */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-3
              min-w-0
            ">
              <OverDueFollowUp
                data={lead}
              />
            </div>

          </div>

        </>

      )}

    </>

  )
}

export default LeadDashboard