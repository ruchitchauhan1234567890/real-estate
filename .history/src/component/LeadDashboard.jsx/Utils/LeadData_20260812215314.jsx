export const leadByStatus = (lead) => {
    const result = {}

    lead.forEach((lead) => {
        const status = lead.status
        result[status] = (result[status] || 0) + 1

    })
    
    return Object.entries(result).map(([key,value]) => ({
        status : key,
        count : value
    }))
}
