import React from 'react'

const HisLeads = (lead) => {
    const myLeads = [...lead].slice(0, 4)
    return (
        <div className="border">
            {myLeads.map((lead) => {
                (
                    <div>

                    </div>
                )
            })}
        </div>
    )
}

export default HisLeads
