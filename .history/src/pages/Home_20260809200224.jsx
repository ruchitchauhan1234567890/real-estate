import React from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
import LeadOverviewChart from '../component/Dashboard/Charts/LeadOverviewCharts.jsx'

const Home = () => {


  return (
    <div>
      <DashboardForm />
      <DashboardCard />
      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2">
          <LeadOverviewChart />
        </div>


      </div>
    </div>
  )
}

export default Home