import React from 'react'

const HisLeads = ({ lead }) => {
    const myLeads = [...lead].slice(0, 4)
    console.log(myLeads)
    return (
        <div className="border">
            <p className="mt-2">Recent Lead</p>
            {myLeads.map((lead) => {
                return (
                    <div className="flex justify-between mb-1 bg-amber-600">
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
