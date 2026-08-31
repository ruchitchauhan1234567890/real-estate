export const leadByStatus = (lead) => {
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


    return Object.entries(result).map(([key,value],index) => ({
        status : key,
        count : value,
        color : colors[index]
    }))
}
