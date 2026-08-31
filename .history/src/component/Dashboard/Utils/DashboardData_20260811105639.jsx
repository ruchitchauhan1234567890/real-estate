export const getLeadCreationChart = (lead) => {
    const result = {}

    lead.forEach((lead) => {
        const date = lead.date

        if (!date) return
        if (!result[date]) {
            result[date] = {
                date,
                newLeads: 0,
            }
        }
        result[date].newLeads++
    })

    return Object.values(result)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((item) => ({
            ...item,
            displayDate: new Date(item.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short"
            })
        }))
}

export const leadStatusChart = (lead) => {
    const result = {}

    lead.forEach((lead) => {
        const status = lead.status
        result[status] = (result[status] || 0) + 1

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

export const taskOverviewChart = (task) => {
    const result = {}

    task.reduce((acc, curr) => {


        if (!acc[status]) {
            acc[status] = {
                status: "",
                count: 0
            }
        }

        acc[status].count++
    }

    )
}