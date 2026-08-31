export const leadByStatus = (lead) => {
    const result = lead.reduce((acc, curr) => {
        const status = curr.status
        acc[status] = (acc[status] || 0) + 1;
        return acc[status]
    },{})
}
