import React from 'react'

const RecentLead = ({ data }) => {
    return (
        <div className="w-full rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">
                    Recent Leads
                </h3>

                <button className="text-[10px] font-medium text-blue-600 hover:text-blue-700">
                    View All
                </button>
            </div>

            {/* Leads */}
            <div className="space-y-3">
                {data.map((item) => {
                    return (
                        <div>
                            <p>{item.name}</p>
                            <p>{item.interested}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecentLead
