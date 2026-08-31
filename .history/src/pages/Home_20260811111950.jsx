import React from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
import LeadOverviewChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'
import { getLeadCreationChart, leadStatusChart, taskOverviewChart } from '../component/Dashboard/Utils/DashboardData.jsx'
import LeadStatusChart from '../component/Dashboard/Charts/LeadStatusChart.jsx'

const Home = () => {

  const leads = JSON.parse(localStorage.getItem("leads"))
  const task = JSON.parse(localStorage.getItem("tasks"))

  const leadChartData = getLeadCreationChart(leads)
  const leadStatusCharts = leadStatusChart(leads)
  const taskOverviewCharts = taskOverviewChart(task)

  console.log(leadStatusCharts)
  console.log(leadChartData)
  console.log(taskOverviewCharts)
  
  return (
    <div>
      <DashboardForm />
      <DashboardCard />
      <div className="grid grid-cols-2 gap-2 mt-2">

        <div className="">
          <LeadOverviewChart data={leadChartData} />
        </div>

        <div>
          <LeadStatusChart data={leadStatusCharts} />
        </div>

        <div>
          <taskOverviewCharts data={taskOverviewCharts}
        </div>

      </div>
    </div>
  )
}

export default Home