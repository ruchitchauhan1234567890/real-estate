import React from 'react'

const SelectEmpCard = ({selectEmp}) => {
    const lead = JSON.parse(localStorage.getItem("leads"))
    const hisLeads = lead.filter((lead) => lead.assignedTo === selectEmp)
    console.log(hisLeads)
  return (
    <div>
      
    </div>
  )
}

export default SelectEmpCard
