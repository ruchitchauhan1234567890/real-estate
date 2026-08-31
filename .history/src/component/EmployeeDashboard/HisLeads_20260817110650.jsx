import React from 'react'

const HisLeads = ({ lead }) => {
    const myLeads = [...lead].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4)
    console.log(myLeads)
    return (
        <div className="rounded-lg shadow-sm w-full h-50">
            <p className="my-2 px-2 font-bold">Recent Lead</p>
            {myLeads.map((lead) => {
                return (
                    <div className="flex justify-between mb-1 px-2 py-1 mx-2 hover:bg-gray-200 rounded-lg">
                        <div>
                            <p className="text-1xl">{lead.name}</p>
                            <p className="text-xs">{lead.interested}</p>
                        </div>
                        <div>
                            <p className="text-sm">{lead.status}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HisLeads
