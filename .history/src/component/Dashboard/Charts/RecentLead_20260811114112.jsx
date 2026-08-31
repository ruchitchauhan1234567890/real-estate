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
                {/* Lead 1 */}
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-[9px] font-semibold text-white">
                        RS
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-semibold text-gray-800">
                            Rahul Sharma
                        </p>
                        <p className="truncate text-[8px] text-gray-400">
                            Interested in 3 BHK Apartment
                        </p>
                    </div>

                    <span className="rounded bg-green-50 px-2 py-1 text-[8px] font-medium text-green-600">
                        New
                    </span>

                    <span className="w-16 text-right text-[8px] text-gray-500">
                        21 May 2024
                    </span>
                </div>

                {/* Lead 2 */}
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-[9px] font-semibold text-white">
                        AM
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-semibold text-gray-800">
                            Amit Patel
                        </p>
                        <p className="truncate text-[8px] text-gray-400">
                            Interested in 2 BHK Flat
                        </p>
                    </div>

                    <span className="rounded bg-blue-50 px-2 py-1 text-[8px] font-medium text-blue-600">
                        Contacted
                    </span>

                    <span className="w-16 text-right text-[8px] text-gray-500">
                        21 May 2024
                    </span>
                </div>

                {/* Lead 3 */}
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[9px] font-semibold text-white">
                        NS
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-semibold text-gray-800">
                            Neha Singh
                        </p>
                        <p className="truncate text-[8px] text-gray-400">
                            Interested in Villa
                        </p>
                    </div>

                    <span className="rounded bg-purple-50 px-2 py-1 text-[8px] font-medium text-purple-600">
                        Site Visit
                    </span>

                    <span className="w-16 text-right text-[8px] text-gray-500">
                        20 May 2024
                    </span>
                </div>

                {/* Lead 4 */}
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-[9px] font-semibold text-white">
                        VM
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-semibold text-gray-800">
                            Vivek Mehta
                        </p>
                        <p className="truncate text-[8px] text-gray-400">
                            Interested in Plot
                        </p>
                    </div>

                    <span className="rounded bg-yellow-50 px-2 py-1 text-[8px] font-medium text-yellow-600">
                        Qualified
                    </span>

                    <span className="w-16 text-right text-[8px] text-gray-500">
                        20 May 2024
                    </span>
                </div>

                {/* Lead 5 */}
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-[9px] font-semibold text-white">
                        PJ
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-semibold text-gray-800">
                            Priya Joshi
                        </p>
                        <p className="truncate text-[8px] text-gray-400">
                            Interested in 4 BHK Apartment
                        </p>
                    </div>

                    <span className="rounded bg-red-50 px-2 py-1 text-[8px] font-medium text-red-500">
                        Lost
                    </span>

                    <span className="w-16 text-right text-[8px] text-gray-500">
                        19 May 2024
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RecentLead
