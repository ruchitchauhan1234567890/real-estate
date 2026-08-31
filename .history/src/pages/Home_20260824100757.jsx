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

  return (
    <div className="w-full pb-8">

      {/* Dashboard Heading with Date Picker */}
      <DashboardForm
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      {/* Dashboard Cards (KPIs) */}
      {current.isAdmin && (
        <>
          <DashboardCard />

         
          <div className="grid grid-cols6 md:grid-cols-6 gap-4 mt-6">

            {/* Leads Overview (Line Chart) */}
            <div className="col-span-1 md:col-span-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                <LeadCreationChart
                  setSelectedMonth={setSelectedMonth}
                  data={lineCharts}
                />
              </div>
            </div>

            {/* Leads by Status (Donut Chart) */}
            <div className="col-span-1 md:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full">
                <LeadStatusChart
                  data={leadStatusCharts}
                />
              </div>
            </div>

          </div>


          {/* ================= LISTS ROW (3 Columns) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

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
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full p-4">
                <h3 className="font-semibold text-gray-800 mb-4">Recent Tasks</h3>
                <OverDueFollowUp />
              </div>
            </div>

          </div>

          {/* Import / Export */}
          <div className="mt-8">
            <ImportLead />
          </div>

        </>
      )}

    </div>
  )
}
export default Home