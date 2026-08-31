import React, { useState } from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
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

  const current = JSON.parse(localStorage.getItem("loggedUser")) || {}

  const emp = JSON.parse(localStorage.getItem("employee")) || []
  const Employee = emp.filter((emp) => !emp.isAdmin)

  const leads = JSON.parse(localStorage.getItem("leads")) || []
  const myLead = leads.filter((lead) => lead.assignedTo === current.name)
  const [data, setData] = useState(leads)
  const myData = leads.filter((lead) => lead.assignedTo === current.name)

  const task = JSON.parse(localStorage.getItem("tasks")) || []

  const lineCharts = lineChart(leads, selectedMonth)
  const leadStatusCharts = leadStatusChart(leads)
  const taskOverviewCharts = taskOverviewChart(task)

  const employeeLeadCharts = employeeLineChart(leads, selectedMonth, current)
  const employeeTaskOverviewCharts = employeeTaskOverviewChart(task, current)
  const employeeLeadStatusCharts = employeeLeadStatusChart(leads, current)
  console.log(employeeLeadStatusCharts)

  return (
    <div className="w-full">

      {/* Dashboard Heading with Date Picker */}
      <DashboardForm
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      {/* Dashboard Cards (KPIs) */}
      {current.isAdmin && (
        <>
          <DashboardCard />


          <div className="grid grid-cols-6 md:grid-cols-6 gap-2 mt-2">

            {/* Leads Overview (Line Chart) */}
            <div className="col-span-4 md:col-span-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                <LeadCreationChart
                  setSelectedMonth={setSelectedMonth}
                  data={lineCharts}
                />
              </div>
            </div>

            {/* Leads by Status (Donut Chart) */}
            <div className="col-span-2 md:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                <LeadStatusChart
                  data={leadStatusCharts}
                />
              </div>
            </div>

          </div>


          {/* ================= LISTS ROW (3 Columns) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">

            {/* Recent Leads */}
            <div className="col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                <RecentLead data={data} />
              </div>
            </div>

            {/* Top Employees */}
            <div className="col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                <TopEmployee
                  employee={Employee}
                  lead={leads}
                />
              </div>
            </div>

            {/* Recent Tasks / Overdue Follow Ups */}
            <div className="col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                <TaskOverviewChart data={taskOverviewCharts} />
              </div>
            </div>
          </div>
        </>
      )}

      {
        !current.isAdmin && (
          <>
            <EmployeeDashboardCard />

            <div className="grid grid-cols-6 gap-2 mt-2">
              <div className="bg-white rounded-xl border col-span-4 border-gray-200 shadow-sm h-full">
                <LeadCreationChart data={employeeLeadCharts} setSelectedMonth={setSelectedMonth} />
              </div>
              <div className='col-span-2'>
                <TaskOverviewChart data={employeeTaskOverviewCharts} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-2 mt-2">
              <div className="col-span-2 md:col-span-2">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                  <LeadStatusChart
                    data={leadStatusCharts}
                  />
                </div>
              </div>
            </div>
          </>
        )
      }

    </div>
  )
}
export default Home