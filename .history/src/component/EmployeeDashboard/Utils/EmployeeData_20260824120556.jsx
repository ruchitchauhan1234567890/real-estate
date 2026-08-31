export const leadByStatus = (lead) => {
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
        Negotiation: "#0D3808",
    }

    console.log(result)
    return Object.entries(result).map(([key, value], index) => ({
        status: key,
        count: value,
        color: colors[key] || "#30B521"
    }))
}

export const taskByStatus = (task) => {
    const result = {}
    task.forEach((task) => {
        const status = task.taskStatus
        result[status] = (result[task] || 0) + 1
    })
    const colors = [
        "#3B82F6",
        "#22C55E",
        "#F59E0B",
        "#8B5CF6",
        "#06B6D4",
        "#EF4444"
    ];
    return Object.entries(result).map(([key, value], index) => ({
        status: key,
        count: value,
        color: colors[index]
    }))
}

export const monthlyConversionRate = (lead, selectedMonth) => {
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

