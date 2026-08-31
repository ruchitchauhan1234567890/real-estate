import React, { useState } from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
import LeadOverviewChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'
import { leadStatusChart, lineChart, taskOverviewChart } from '../component/Dashboard/Utils/DashboardData.jsx'
import { employeeLineChart, employeeTaskOverviewChart, employeeLeadStatusChart } from '../component/EmployeeBaseDashboard/utils/EmployeeBaseData.jsx'
import LeadStatusChart from '../component/Dashboard/Charts/LeadStatusChart.jsx'
import TaskOverviewChart from '../component/Dashboard/Charts/TaskOverviewChart.jsx'
import RecentLead from '../component/Dashboard/Charts/RecentLead.jsx'
import TopEmployee from '../component/Dashboard/Charts/TopEmployee.jsx'
import LeadCreationChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'
import EmployeeDashboardCard from '../component/EmployeeBaseDashboard/EmployeeDashboard'
import ImportLead from '../component/ImportAndExport/ImportLead.jsx'
import OverDueFollowUp from '../component/LeadDashboard.jsx/Charts/OverDueFollowUp.jsx'


const Home = () => {

  const [selectedMonth, setSelectedMonth] = useState("2026-08")

  const current = JSON.parse(localStorage.getItem("loggedUser"))

  const emp = JSON.parse(localStorage.getItem("employee"))
  const Employee = emp.filter((emp) => !emp.isAdmin)

  console.log(Employee)
  const leads = JSON.parse(localStorage.getItem("leads"))
  const myLead = leads.filter((lead) => lead.assignedTo === current.name)
  const [data, setData] = useState(leads)
  const myData = leads.filter((lead) => lead.assignedTo === current.name)
  console.log(myData)

  console.log(selectedMonth)

  const task = JSON.parse(localStorage.getItem("tasks"))

  // console.log(leads)
  const lineCharts = lineChart(leads, selectedMonth)
  const leadStatusCharts = leadStatusChart(leads)
  const taskOverviewCharts = taskOverviewChart(task)

  const employeeLeadCharts = employeeLineChart(leads, selectedMonth, current)
  const employeeTaskOverviewCharts = employeeTaskOverviewChart(task, current)
  const employeeLeadStatusCharts = employeeLeadStatusChart(leads, current)
  console.log(employeeTaskOverviewCharts)

 return (
  <div className="w-full">

    {/* Dashboard Heading */}
    <DashboardForm />

    {/* Dashboard Cards */}
    {current.isAdmin && (
      <>
        <DashboardCard />

        {/* ================= FIRST ROW ================= */}
        <div className="grid grid-cols-6 gap-3 mt-3">

          {/* Lead Creation - 4/6 */}
          <div className="col-span-4">
            <div className="bg-white rounded-xl border shadow-sm h-full">
              <LeadCreationChart
                setSelectedMonth={setSelectedMonth}
                data={lineCharts}
              />
            </div>
          </div>

          {/* Task Overview - 2/6 */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl border shadow-sm h-full">
              <TaskOverviewChart
                data={taskOverviewCharts}
              />
            </div>
          </div>

        </div>


        {/* ================= SECOND ROW ================= */}
        <div className="grid grid-cols-6 gap-3 mt-3">

          {/* Recent Leads - 2/6 */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl border shadow-sm h-full">
              <RecentLead data={data} />
            </div>
          </div>

          {/* Lead Status - 2/6 */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl border shadow-sm h-full">
              <LeadStatusChart
                data={leadStatusCharts}
              />
            </div>
          </div>

          {/* Top Employees - 2/6 */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl border shadow-sm h-full">
              <TopEmployee
                employee={Employee}
                lead={leads}
              />
            </div>
          </div>

        </div>


        {/* Import / Export */}
        <div className="mt-3">
          <ImportLead />
        </div>

      </>
    )}

  </div>
)
}
export default Home