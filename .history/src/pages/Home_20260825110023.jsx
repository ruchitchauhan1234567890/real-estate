import React, { useState } from "react"
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
import {
  leadStatusChart,
  lineChart,
  taskOverviewChart
} from "../component/Dashboard/Utils/DashboardData.jsx"

import {
  employeeLineChart,
  employeeTaskOverviewChart,
  employeeLeadStatusChart
} from "../component/EmployeeBaseDashboard/utils/EmployeeBaseData.jsx"

import LeadStatusChart from "../component/Dashboard/Charts/LeadStatusChart.jsx"
import TaskOverviewChart from "../component/Dashboard/Charts/TaskOverviewChart.jsx"
import RecentLead from "../component/Dashboard/Charts/RecentLead.jsx"
import TopEmployee from "../component/Dashboard/Charts/TopEmployee.jsx"
import LeadCreationChart from "../component/Dashboard/Charts/LeadCreationChart.jsx"
import EmployeeDashboardCard from "../component/EmployeeBaseDashboard/EmployeeDashboard"
import OverDueFollowUp from "../component/LeadDashboard.jsx/Charts/OverDueFollowUp.jsx"
import TodaysFollowUp from "../component/LeadDashboard.jsx/Charts/TodaysFollowUp.jsx"


const Home = () => {

  const [selectedMonth, setSelectedMonth] = useState("2026-08")

  const current =
    JSON.parse(localStorage.getItem("loggedUser")) || {}

  const emp =
    JSON.parse(localStorage.getItem("employee")) || []

  const Employee = emp.filter(
    (emp) => !emp.isAdmin
  )

  const leads =
    JSON.parse(localStorage.getItem("leads")) || []

  const myLead = leads.filter(
    (lead) => lead.assignedTo === current.name
  )

  const [data, setData] = useState(leads)

  const myData = leads.filter(
    (lead) => lead.assignedTo === current.name
  )

  const task =
    JSON.parse(localStorage.getItem("tasks")) || []


  const lineCharts =
    lineChart(leads, selectedMonth)

  const leadStatusCharts =
    leadStatusChart(leads)

  const taskOverviewCharts =
    taskOverviewChart(task)


  const employeeLeadCharts =
    employeeLineChart(
      leads,
      selectedMonth,
      current
    )

  const employeeTaskOverviewCharts =
    employeeTaskOverviewChart(
      task,
      current
    )

  const employeeLeadStatusCharts =
    employeeLeadStatusChart(
      leads,
      current
    )


  return (
    <div className="w-full min-w-0">

      {/* ================= DASHBOARD FORM ================= */}

      <DashboardForm
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />


      {/* ===================================================== */}
      {/* ================= ADMIN DASHBOARD =================== */}
      {/* ===================================================== */}

      {current.isAdmin && (
        <>

          <DashboardCard />


          {/* ================= CHART ROW ================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-6
              gap-2
              mt-2
            "
          >

            {/* Lead Creation */}

            <div
              className="
                col-span-1
                sm:col-span-2
                lg:col-span-4
                min-w-0
              "
            >

              <div
                className="
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                  h-full
                  min-h-[260px]
                "
              >

                <LeadCreationChart
                  selectedMonth={selectedMonth}
                  setSelectedMonth={setSelectedMonth}
                  data={lineCharts}
                />

              </div>

            </div>


            {/* Lead Status */}

            <div
              className="
                col-span-1
                sm:col-span-2
                lg:col-span-2
                min-w-0
              "
            >

              <div
                className="
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                  h-full
                  min-h-[260px]
                "
              >

                <LeadStatusChart
                  data={leadStatusCharts}
                />

              </div>

            </div>

          </div>


          {/* ================= LISTS ================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-2
              mt-2
            "
          >

            {/* Recent Leads */}

            <div className="min-w-0">

              <div
                className="
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                  h-full
                "
              >

                <RecentLead
                  data={data}
                />

              </div>

            </div>


            {/* Top Employees */}

            <div className="min-w-0">

              <div
                className="
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                  h-full
                "
              >

                <TopEmployee
                  employee={Employee}
                  lead={leads}
                />

              </div>

            </div>


            {/* Task Overview */}

            <div className="min-w-0">

              <div
                className="
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                  h-full
                "
              >

                <TaskOverviewChart
                  data={taskOverviewCharts}
                />

              </div>

            </div>

          </div>

        </>
      )}


      {/* ===================================================== */}
      {/* ================= EMPLOYEE DASHBOARD ================ */}
      {/* ===================================================== */}

      {!current.isAdmin && (
        <>

          <EmployeeDashboardCard />


          {/* ================= FIRST ROW ================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-6
              gap-2
              mt-2
            "
          >

            {/* Lead Creation */}

            <div
              className="
                col-span-1
                sm:col-span-2
                lg:col-span-4
                min-w-0
              "
            >

              <div
                className="
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                  h-full
                  min-h-[260px]
                "
              >

                <LeadCreationChart
                  data={employeeLeadCharts}
                  setSelectedMonth={setSelectedMonth}
                />

              </div>

            </div>


            {/* Task Overview */}

            <div
              className="
                col-span-1
                sm:col-span-2
                lg:col-span-2
                min-w-0
              "
            >

              <div
                className="
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                  h-full
                  min-h-[260px]
                "
              >

                <TaskOverviewChart
                  data={employeeTaskOverviewCharts}
                />

              </div>

            </div>

          </div>


          {/* ================= SECOND ROW ================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-6
              gap-2
              mt-2
            "
          >

            {/* Lead Status */}

            <div
              className="
                col-span-1
                sm:col-span-2
                lg:col-span-2
                min-w-0
              "
            >

              <div
                className="
                  min-h-[220px]
                  h-full
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                "
              >

                <LeadStatusChart
                  data={employeeLeadStatusCharts}
                />

              </div>

            </div>


            {/* Overdue Follow Up */}

            <div
              className="
                col-span-1
                sm:col-span-1
                lg:col-span-2
                min-w-0
              "
            >

              <div className="h-full">

                <OverDueFollowUp
                  data={myLead}
                />

              </div>

            </div>


            {/* Today's Follow Up */}

            <div
              className="
                col-span-1
                sm:col-span-1
                lg:col-span-2
                min-w-0
              "
            >

              <div className="h-full">

                <TodaysFollowUp
                  data={myLead}
                />

              </div>

            </div>

          </div>

        </>
      )}

    </div>
  )
}

export default Home