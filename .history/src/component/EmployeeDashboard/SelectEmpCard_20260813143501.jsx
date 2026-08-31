import React from 'react'

const SelectEmpCard = ({selectEmp}) => {
    const lead = JSON.parse(localStorage.parse("leads"))
    const hisLeads = lead.filter((lead) => lead.assignedTo)
  return (
    <div>
      
    </div>
  )
}

export default SelectEmpCard
