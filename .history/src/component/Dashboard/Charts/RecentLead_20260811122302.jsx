import React from 'react'

const RecentLead = ({ data }) => {

    const latest = [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ).slice(0,4)
     console.log(latest)
    return (
        <div className="w-full rounded-xl  p-4 shadow-sm">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">
                    Recent Leads
                </h3>
                <button className="text-[10px] font-medium text-blue-600 hover:text-blue-700">
                    View All
                </button>
            </div>


            <div className="space-y-3">
                {latest.map((item) => {
                    return (
                        <div>
                            <p>{item.name}</p>
                            <p>{item.interested}</p>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecentLead
