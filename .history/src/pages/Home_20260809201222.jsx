import React from 'react'
import DashboardForm from "../component/Dashboard/DashboardForm.jsx"
import DashboardCard from "../component/Dashboard/DashboardCard.jsx"
import LeadOverviewChart from '../component/Dashboard/Charts/LeadOverviewCharts.jsx'

const Home = () => {


  return (
    <div>
      <DashboardForm />
      <DashboardCard />
      <div className="grid grid-cols-2 gap-2 mt-2">

        <div className="">
          <LeadOverviewChart />
        </div>
  
      </div>
    </div>
  )
}

export default Home