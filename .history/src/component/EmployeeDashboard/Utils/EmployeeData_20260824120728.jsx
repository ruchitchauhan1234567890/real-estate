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

export const monthlyConversionRate = (lead = []) => {

    const data = lead.reduce((acc, curr) => {

        // createdAt example:
        // "2026-08-13T06:39:41.520Z"

        const month = curr.createdAt.slice(0, 7)

        if (!acc[month]) {
            acc[month] = {
                month: month,
                totalLeads: 0,
                convertedLeads: 0
            }
        }

        // Total leads
        acc[month].totalLeads++

        // Converted leads
        if (curr.status === "Converted") {
            acc[month].convertedLeads++
        }

        return acc

    }, {})

    return Object.values(data).map((item) => ({
        ...item,
        conversionRate:
            item.totalLeads > 0
                ? Number(
                    ((item.convertedLeads / item.totalLeads) * 100).toFixed(2)
                )
                : 0
    }))
}

