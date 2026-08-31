export const leadStatusChart = (lead) => {
    const result = {}

    lead.forEach((lead) => {
        const status = lead.status
        result[status] = (result[status] || 0) + 1
    })

    const colors = {
        New: "#3B82F6",
        Contacted: "#22C55E",
        Qualified: "#F59E0B",
        Converted: "#8B5CF6",
        Closed: "#06B6D4",
        Lost: "#A83D86",
        Negotiation: "#AD2482",
    }

    return Object.entries(result).map(([key, value], index) => ({
        status: key,
        count: value,
        color: colors[key]
    }))
}

export const taskOverviewChart = (task) => {
    const tasks = task.reduce((acc, curr) => {
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
    return Object.values(tasks)
}

export const lineChart = (lead, selectedMonth) => {
    const thisMonth = lead.filter((lead) => lead.date.startsWith(selectedMonth))
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