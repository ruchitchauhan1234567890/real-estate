export const leadByStatus = (lead) => {
    const result = {}
    lead.forEach((lead) => {
        const status = lead.status
        result[status] = (result[status] || 0) + 1
    })
    console.log(result)
}