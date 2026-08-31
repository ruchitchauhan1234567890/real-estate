export const leadByStatus = (lead) => {
    const result = lead.reduce((acc, curr) => {
        if(acc.status === curr.status){
            acc.status++
        }
    }, 
    {
        status : "",
        count : 0
    })
}
