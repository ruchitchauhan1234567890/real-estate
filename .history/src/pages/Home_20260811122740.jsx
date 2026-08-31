import React, { useState } from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
import LeadOverviewChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'
import { getLeadCreationChart, leadStatusChart, taskOverviewChart } from '../component/Dashboard/Utils/DashboardData.jsx'
import LeadStatusChart from '../component/Dashboard/Charts/LeadStatusChart.jsx'
import TaskOverviewChart from '../component/Dashboard/Charts/TaskOverviewChart.jsx'
import RecentLead from '../component/Dashboard/Charts/RecentLead.jsx'

const Home = () => {

  const leads = JSON.parse(localStorage.getItem("leads"))

  const [data,setData] = useState(leads)

  const task = JSON.parse(localStorage.getItem("tasks"))

  console.log(leads)
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
      <div className="grid grid-cols gap-2 mt-2">
        <div className="">
          <LeadOverviewChart data={leadChartData} />
        </div>

        <div>
          <LeadStatusChart data={leadStatusCharts} />
        </div>

        <div>
          <TaskOverviewChart data={taskOverviewCharts}/>
        </div>
        
        <div>
          <RecentLead data={data} />
        </div>

      </div>
    </div>
  )
}

export default Home