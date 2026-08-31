export const getLeadCreationChart = (lead) => {
    const  result = {}

    lead.forEach((lead) => {
        const date = lead.date

        if(!date) return

        if(!result[date]){
            result[date] = {
                date,
                newLeads : 0,
            }
        }

        if(lead.status === "New"){
            result[date].newLeads++
        }
       
    })

    return Object.values(result)

}