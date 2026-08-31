import React, { useState } from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
// import LeadOverviewChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'
import { leadStatusChart, lineChart, taskOverviewChart } from '../component/Dashboard/Utils/DashboardData.jsx'
import LeadStatusChart from '../component/Dashboard/Charts/LeadStatusChart.jsx'
import TaskOverviewChart from '../component/Dashboard/Charts/TaskOverviewChart.jsx'
import RecentLead from '../component/Dashboard/Charts/RecentLead.jsx'
import TopEmployee from '../component/Dashboard/Charts/TopEmployee.jsx'
import LeadCreationChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'

const Home = () => {

  const [selectedMonth, setSelectedMonth] = useState("2026-08")


  const emp = JSON.parse(localStorage.getItem("employee"))
  const Employee = emp.filter((emp) => !emp.isAdmin)

  console.log(Employee)
  const leads = JSON.parse(localStorage.getItem("leads"))

  const [data, setData] = useState(leads)

  const task = JSON.parse(localStorage.getItem("tasks"))

  console.log(leads)
  const lineCharts = lineChart(leads, selectedMonth)
  const leadStatusCharts = leadStatusChart(leads)
  const taskOverviewCharts = taskOverviewChart(task)

  console.log(leadStatusCharts)
  console.log(taskOverviewCharts)

  console.log(selectedMonth)
  console.log(lineCharts)

  return (
    <div>
      <DashboardForm />
      <DashboardCard />
      <div className="grid grid-cols-6 grid-row-6 gap-2 bg-amber-500  mt-2">

        <div className="space-y-3 col-span-3 row-span-2">
          <LeadCreationChart setSelectedMonth={setSelectedMonth} data={lineCharts} />

        </div>
        <div className="col-span-3">
          <TaskOverviewChart data={taskOverviewCharts} />
        </div>

        <div className="space-y-3" >

          <RecentLead data={data} />
          <LeadStatusChart data={leadStatusCharts} />
          <TopEmployee employee={Employee} lead={leads} />

        </div>
      </div>
    </div>
  )
}

export default Home