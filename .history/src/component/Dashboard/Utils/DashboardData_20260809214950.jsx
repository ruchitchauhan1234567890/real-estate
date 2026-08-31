export const getLeadOverviewData = (lead) => {
    const  result = {}

    lead.forEach((lead) => {
        const date = lead.date

        if(!date) return

        if(!result[date]){
            result[date] = {
                date,
                newLeads : 0,
                convertedLead : 0,
                lostLeads : 0
            }
        }

        if(lead.status === "New"){
            result[date].newLeads++
        }

        if(lead.status === "Converted"){
            result[date].convertedLead++
        }

        if(lead.status === "Lost"){
            result[date].lostLeads++
        }
    })

    return Object.values

}