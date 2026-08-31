export const employeeLineChart = (lead, selectedMonth, current) => {
    const { name } = current
    console.log(name)
    const myLead = lead.filter((lead) => lead.assignedTo === name)
    console.log(myLead)
    const thisMonth = myLead.filter((lead) => lead.date.startsWith(selectedMonth))
    const data = thisMonth.reduce((acc, curr) => {
        const date = curr.date.split("T")[0]
        if (!acc[date]) {
            acc[date] = {
                date: date,
                leads: 0
            }
        }
        acc[date].leads++
        return acc
    }, {})

    return Object.values(data)
}

export const employeeTaskOverviewChart = (task, current) => {
    const myTask = task.filter((task) => task.assign === current.name)
    const result = myTask.reduce((acc, curr) => {
        const colors = {
            Pending: "#FFDE00",
            Processing: "#3B82F6",
            Completed: "#10B981"
        };
        if (!acc[curr.taskStatus]) {
            acc[curr.taskStatus] = {
                status: curr.taskStatus,
                count: 0,
                color: colors[curr.taskStatus]
            }
        }
        acc[curr.taskStatus].count++
        return acc
    }, {})
    return Object.values(result)
}

export const employeeLeadStatusChart = (lead, current) => {
    const myLead = lead.filter((lead) => lead.assignedTo === current.name)
    const result = myLead.reduce((acc, curr) => {
        if (!acc[curr.status]) {
            acc[curr.status] = {
                status: curr.status,
                count: 0
            }
        }

        acc[curr.status].count++
    }, {})
}

