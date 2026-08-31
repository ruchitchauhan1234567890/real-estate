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

            {/* ================= LEAD PIPELINE ================= */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-2
              min-w-0

              bg-white
              dark:bg-[#1f1f2b]

              border
              border-gray-200
              dark:border-[#303044]

              rounded-xl

              shadow-sm
              dark:shadow-black/20

              overflow-hidden

              transition-colors
            ">
              <LeadPipelineChart
                data={leadPipelineChart}
              />
            </div>


            {/* ================= LEAD BY STATUS ================= */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-2
              min-w-0

              bg-white
              dark:bg-[#1f1f2b]

              border
              border-gray-200
              dark:border-[#303044]

              rounded-xl

              shadow-sm
              dark:shadow-black/20

              overflow-hidden

              transition-colors
            ">
              <LeadByStatus
                data={leadBySourcee}
              />
            </div>


            {/* ================= TODAY'S FOLLOW UP ================= */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-2
              min-w-0

              bg-white
              dark:bg-[#1f1f2b]

              border
              border-gray-200
              dark:border-[#303044]

              rounded-xl

              shadow-sm
              dark:shadow-black/20

              overflow-hidden

              transition-colors
            ">
              <TodaysFollowUp
                data={lead}
              />
            </div>


            {/* ================= RECENT LEADS ================= */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-3
              min-w-0

              bg-white
              dark:bg-[#1f1f2b]

              border
              border-gray-200
              dark:border-[#303044]

              rounded-xl

              shadow-sm
              dark:shadow-black/20

              overflow-hidden

              transition-colors
            ">
              <RecentLead
                data={lead}
              />
            </div>


            {/* ================= OVERDUE FOLLOW UP ================= */}

            <div className="
              col-span-1
              sm:col-span-2
              lg:col-span-3
              min-w-0

              bg-white
              dark:bg-[#1f1f2b]

              border
              border-gray-200
              dark:border-[#303044]

              rounded-xl

              shadow-sm
              dark:shadow-black/20

              overflow-hidden

              transition-colors
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