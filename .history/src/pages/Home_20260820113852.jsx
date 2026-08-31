import React, { useState } from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
import LeadOverviewChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'
import { leadStatusChart, lineChart, taskOverviewChart } from '../component/Dashboard/Utils/DashboardData.jsx'
import { employeeLineChart, employeeTaskOverviewChart,employeeLeadStatusChart } from '../component/EmployeeBaseDashboard/utils/EmployeeBaseData.jsx'
import LeadStatusChart from '../component/Dashboard/Charts/LeadStatusChart.jsx'
import TaskOverviewChart from '../component/Dashboard/Charts/TaskOverviewChart.jsx'
import RecentLead from '../component/Dashboard/Charts/RecentLead.jsx'
import TopEmployee from '../component/Dashboard/Charts/TopEmployee.jsx'
import LeadCreationChart from '../component/Dashboard/Charts/LeadCreationChart.jsx'
import EmployeeDashboardCard from '../component/EmployeeBaseDashboard/EmployeeDashboard'
import ImportLead from '../component/ImportAndExport/ImportLead.jsx'


const Home = () => {

  const [selectedMonth, setSelectedMonth] = useState("2026-08")

  const current = JSON.parse(localStorage.getItem("loggedUser"))

  const emp = JSON.parse(localStorage.getItem("employee"))
  const Employee = emp.filter((emp) => !emp.isAdmin)

  console.log(Employee)
  const leads = JSON.parse(localStorage.getItem("leads"))
  const myLead = leads.filter((lead) => lead.assignedTo === current)

  const [data, setData] = useState(leads)
  const myData = leads.filter((lead) => lead.assignedTo === current.name)
  console.log(myData)

  const task = JSON.parse(localStorage.getItem("tasks"))

  // console.log(leads)
  const lineCharts = lineChart(leads, selectedMonth)
  const leadStatusCharts = leadStatusChart(leads)
  const taskOverviewCharts = taskOverviewChart(task)

  const employeeLeadCharts = employeeLineChart(leads, selectedMonth, current)
  const employeeTaskOverviewCharts = employeeTaskOverviewChart(task, current)
  const employeeLeadStatusCharts = employeeLeadStatusChart(leads,current)
  console.log(employeeTaskOverviewCharts)

  return (
    <>
      <div>
        <DashboardForm />
        {
          current.isAdmin ? <DashboardCard/> : <EmployeeDashboardCard/>
        }
        {
          current.isAdmin && (
            <div>
              <div className="grid grid-cols-6 gap-2 mt-2">
                <div className="col-span-4">
                  <LeadCreationChart setSelectedMonth={setSelectedMonth} data={lineCharts} />
                </div>
                <div className='col-span-2'>
                  <TaskOverviewChart data={taskOverviewCharts} />
                </div>
                <div className="col-span-2">
                  <RecentLead data={data} />
                </div>
                <div className="col-span-2">
                  <LeadStatusChart data={leadStatusCharts} />
                </div>
                <div className="col-span-2">
                  <TopEmployee employee={Employee} lead={leads} />
                </div>
              </div>
              <ImportLead />
            </div>)
        }
        {
          !current.isAdmin && (
            <div className="grid grid-cols-6 gap-2 mt-2">
              <div className="col-span-4">
                <LeadCreationChart setSelectedMonth={setSelectedMonth} data={employeeLeadCharts} />
              </div>
              <div className="col-span-2">
                <TaskOverviewChart data={employeeTaskOverviewCharts} />
              </div>
              <div className="col-span-3">
                <LeadStatusChart data={employeeLeadStatusCharts} />
              </div>
              <div className="col-span-3">
                <RecentLead data={myData} />
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
export default Home