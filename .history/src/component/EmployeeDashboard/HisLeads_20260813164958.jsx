import React from 'react'

const HisLeads = ({lead}) => {
    const myLeads = [...lead].slice(0, 4)
    console.log(myLeads)
    return (
        <div className="border">
            {myLeads.map((lead) => {
                    <div>
                        <p>{lead.name}</p>
                    </div>
                
            })}
        </div>
    )
}

export default HisLeads
