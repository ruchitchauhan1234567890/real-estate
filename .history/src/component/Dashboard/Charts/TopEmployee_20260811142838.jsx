import React from 'react'

const TopEmployee = ({employee,lead}) => {
    console.log(employee)
    console.log(lead)
    const result ={}

    const data = employee.map((emp) => {
        const converted = lead.reduce((acc,curr) => ({
             acc[!emp.name]{
                name : emp.name,
                totalLead : 0,
                convertedLead : 0,
                conversionRate = totalLead / convertedLead * 100
             }
        }))
    })
  return (
    <div>
      
    </div>
  )
}
export default TopEmployee
