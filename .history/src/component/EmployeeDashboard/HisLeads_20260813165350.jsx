import React from 'react'

const HisLeads = ({ lead }) => {
    const myLeads = [...lead].slice(0, 4)
    console.log(myLeads)
    return (
        <div className="border">
            {myLeads.map((lead) => {
                return (
                    <div>
                        <div>
                            <p>{lead.name}</p>
                            <p>{lead.interested}</p>
                        </div>
                        <div>
                            <p>{lead.status}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HisLeads
