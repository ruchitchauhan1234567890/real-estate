import React from 'react'

const TopEmployee = ({employee,lead}) => {
    console.log(employee)
    console.log(lead)
   

    const data = employee.map((emp) => {
        const result = lead.reduce((acc,curr) => {
            if(curr.assignedTo === emp.name){
                acc.totalLead ++
                if(curr.status === "Converted"){
                    acc.convertedLead ++
                }
            }

            return acc
        }, {
            name : emp.name,
            totalLead : 0,
            convertedLead : 0
        })

        return { ...result , conversionRate : result.totalLead > 0 ? (result.totalLead / result.convertedLead) * 100 : 0 }
    })

    console.log(data)
  return (
    <div>
      
    </div>
  )
}
export default TopEmployee
