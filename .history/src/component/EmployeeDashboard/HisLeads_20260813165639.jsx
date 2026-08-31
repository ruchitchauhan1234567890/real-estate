import React from 'react'

const HisLeads = ({ lead }) => {
    const myLeads = [...lead].slice(0, 4)
    console.log(myLeads)
    return (
        <div className="border">
            <p className="my-2 px-2 font-bold">Recent Lead</p>
            {myLeads.map((lead) => {
                return (
                    <div className="flex justify-between mb-1 px-2 mx-2 hover:bg-gray-400">
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
