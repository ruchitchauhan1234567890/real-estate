export const employeeLineChart = (lead,selectedMonth,current) => {
    const {name} = current
    console.log(name)
    const myLead = lead.filter((lead) => lead.assignedTo === name)
    const thisMonth = lead.filter((lead) => lead.date.startsWith(selectedMonth))
    const data = thisMonth.reduce((acc,curr) => {
        const date = curr.date.split("T")[0]
        if(!acc[date]){
            acc[date] = {
                date : date,
                leads : 0
            }
        }
        acc[date].leads++
        return acc
    },{})

    return Object.values(data)
}