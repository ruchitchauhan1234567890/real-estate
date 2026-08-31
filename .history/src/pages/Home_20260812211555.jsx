import React, { useState } from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
// import LeadOverviewChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'
import { getLeadCreationChart, leadStatusChart, taskOverviewChart } from '../component/Dashboard/Utils/DashboardData.jsx'
import LeadStatusChart from '../component/Dashboard/Charts/LeadStatusChart.jsx'
import TaskOverviewChart from '../component/Dashboard/Charts/TaskOverviewChart.jsx'
import RecentLead from '../component/Dashboard/Charts/RecentLead.jsx'
import TopEmployee from '../component/Dashboard/Charts/TopEmployee.jsx'

const Home = () => {

  const [selectedMonth,setSelectedMonth] = useState("2026-08")
  

  const emp = JSON.parse(localStorage.getItem("employee"))
  const Employee = emp.filter((emp) => !emp.isAdmin)

  console.log(Employee)
  const leads = JSON.parse(localStorage.getItem("leads"))

  const [data, setData] = useState(leads)

  const task = JSON.parse(localStorage.getItem("tasks"))

  console.log(leads)
  const leadChartData = getLeadCreationChart(leads,selectedMonth)
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

        <div className="space-y-3">
          {/* <LeadOverviewChart data={leadChartData} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} /> */}

          <TaskOverviewChart data={taskOverviewCharts} />
        </div>

        <div className="space-y-3" >

          <LeadStatusChart data={leadStatusCharts} />

          <RecentLead data={data} />

        </div>

        <div space-y-3>
          <TopEmployee employee={Employee} lead={leads} />
        </div>

      </div>
    </div>
  )
}

export default Home