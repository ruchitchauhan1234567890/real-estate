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
    const result =  {}

    lead.forEach((lead) => {
        const status = lead.status
        result[status] = (result[status] || 0) + 1

    })

    return Object.fromEntries(result)
}