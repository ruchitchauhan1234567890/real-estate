export const employeeLineChart = (lead,selectedMonth,current) => {
    const {name} = current
    console.log(name)
    const myLead = lead.filter((lead) => lead.assignedTo === name)
    console.log(myLead)
    const thisMonth = myLead.filter((lead) => lead.date.startsWith(selectedMonth))
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

export const employeeTaskOverviewChart = (task,current) => {
    const myTask = task.filter((task) => task.assign === current.name)
   

    const result = myTask.reduce((acc,curr) => {

        if(!acc[curr.taskStatus]){
            acc[curr.taskStatus] = {
                status : curr.taskStatus,
                count : 0
            }
        }
        acc[curr.taskStatus].count++
    })
}

