import React from 'react'

const HisLeads = ({ lead }) => {
    const myLeads = [...lead].slice(0, 4)
    console.log(myLeads)
    return (
        <div className="border">
            {myLeads.map((lead) => {
                return (
                    <div>
                    </div>
                )
            })}
        </div>
    )
}

export default HisLeads
