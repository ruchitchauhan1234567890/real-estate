import React from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
import LeadOverviewChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'
import { getLeadCreationChart } from '../component/Dashboard/Utils/DashboardData.jsx'

const Home = () => {

  const leads = JSON.parse(localStorage.getItem("leads"))

  const leadChartData = getLeadCreationChart(leads)

  console.log(leadChartData)

  return (
    <div>
      <DashboardForm />
      <DashboardCard />
      <div className="grid grid-cols-2 gap-2 mt-2">

        <div className="">
          <LeadOverviewChart data={leadChartData} />
        </div>
  
      </div>
    </div>
  )
}

export default Home