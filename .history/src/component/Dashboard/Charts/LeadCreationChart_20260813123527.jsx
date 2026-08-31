import React from 'react'

const LeadCreationChart = (data,setSelectedMonth}) => {
  return (
    <div className="w-200 h-100 border">
      <select onChange={(e) => setSelectedMonth(e.target.value)}>
        <option>2026-08</option>
        <option>2026-09</option>
      </select>
    </div>
  )
}

export default LeadCreationChart
