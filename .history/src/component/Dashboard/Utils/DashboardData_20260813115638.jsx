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

export const lineChart = (lead,selectedMonth) => {

}