export const leadBySource = (lead) => {
    const result = {}

    lead.forEach((lead) => {
        const source = lead.source
        result[source] = (result[source] || 0) + 1
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
        source: key,
        count: value,
        color: colors[index]
    }))
}

export const leadPipelineChart = (lead) => {
    const status = lead.status
    const result = lead.reduce((acc, curr) => {
        acc[status] = (acc[status] || 0) + 1
        return acc[status]
    },{})

console.log(result)    
}