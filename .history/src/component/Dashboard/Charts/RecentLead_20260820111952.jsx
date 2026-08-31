import React from 'react'

const RecentLead = ({ data }) => {

    const latest = [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ).slice(0, 3)

    console.log(latest)

    return (
        <div className="w-full h-[100%] rounded-xl  p-5 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
                <div>
                    <h3 className="text-base font-semibold text-gray-900">
                        Recent Leads
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                        Latest leads added
                    </p>
                </div>

                <button className="rounded-md px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition">
                    View All
                </button>
            </div>

            {/* Leads */}
            <div className="space-y-2">
                {latest.map((item) => {
                    return (
                        <div
                            key={item._id}
                            className="flex items-center justify-between rounded-lg px-1 py-1 hover:bg-gray-50 transition"
                        >

                            {/* Left */}
                            <div className="flex items-center gap-3">

                                {/* Avatar */}
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
                                    {item.name?.charAt(0)?.toUpperCase()}
                                </div>

                                {/* Name + Interest */}
                                <div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {item.name}
                                    </p>

                                    <p className="mt-0.5 text-xs text-gray-400">
                                        {item.interested}
                                    </p>
                                </div>

                            </div>

                            {/* Arrow */}
                            <div className="text-gray-300">
                                →
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default RecentLead