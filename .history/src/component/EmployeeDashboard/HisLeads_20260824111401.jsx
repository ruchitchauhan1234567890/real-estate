import React from "react"

const HisLeads = ({ lead = [] }) => {

    const myLeads = [...lead]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)

    const statusStyle = {
        New: "bg-green-50 text-green-600 border border-green-100",
        Contacted: "bg-blue-50 text-blue-600 border border-blue-100",
        "Site Visit": "bg-purple-50 text-purple-600 border border-purple-100",
        Qualified: "bg-orange-50 text-orange-600 border border-orange-100",
        Converted: "bg-emerald-50 text-emerald-600 border border-emerald-100",
        Lost: "bg-red-50 text-red-600 border border-red-100",
    }

    const formatDate = (date) => {
        if (!date) return "-"

        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    }

    return (
        <div className="w-full h-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2.5">
                <h3 className="text-xs font-semibold text-gray-900">
                    My Leads
                </h3>

                <button
                    className="
                        text-[10px]
                        font-medium
                        text-blue-600
                        hover:text-blue-700
                    "
                >
                    View All
                </button>
            </div>

            {/* Table Header */}
            <div className="
                grid
                grid-cols-[1.2fr_1.4fr_1fr_1.2fr]
                items-center
                bg-gray-50
                border-y border-gray-100
                px-3
                py-1.5
            ">
                <p className="text-[9px] font-semibold text-gray-500">
                    Lead Name
                </p>

                <p className="text-[9px] font-semibold text-gray-500">
                    Property Interest
                </p>

                <p className="text-[9px] font-semibold text-gray-500">
                    Status
                </p>

                <p className="text-[9px] font-semibold text-gray-500">
                    Next Follow-up
                </p>
            </div>

            {/* Leads */}
            <div>
                {myLeads.length === 0 ? (
                    <div className="flex items-center justify-center py-8">
                        <p className="text-xs text-gray-400">
                            No Leads Found
                        </p>
                    </div>
                ) : (
                    myLeads.map((item, index) => (
                        <div
                            key={item._id || index}
                            className="
                                grid
                                grid-cols-[1.2fr_1.4fr_1fr_1.2fr]
                                items-center
                                px-3
                                py-1.5
                                border-b
                                border-gray-100
                                last:border-b-0
                                hover:bg-gray-50
                                transition
                            "
                        >

                            {/* Lead Name */}
                            <div className="min-w-0">
                                <p className="
                                    text-[10px]
                                    font-medium
                                    text-gray-800
                                    truncate
                                ">
                                    {item.name}
                                </p>
                            </div>

                            {/* Property */}
                            <div className="min-w-0">
                                <p className="
                                    text-[10px]
                                    text-gray-500
                                    truncate
                                ">
                                    {item.interested || "-"}
                                </p>
                            </div>

                            {/* Status */}
                            <div>
                                <span
                                    className={`
                                        inline-flex
                                        items-center
                                        rounded
                                        px-2
                                        py-0.5
                                        text-[8px]
                                        font-medium
                                        whitespace-nowrap
                                        ${statusStyle[item.status] ||
                                        "bg-gray-50 text-gray-500 border border-gray-100"}
                                    `}
                                >
                                    {item.status}
                                </span>
                            </div>

                            {/* Follow Up */}
                            <div>
                                <p className="
                                    text-[9px]
                                    text-gray-500
                                    whitespace-nowrap
                                ">
                                    {formatDate(
                                        item.nextFollowUp ||
                                        item.followUpDate ||
                                        item.createdAt
                                    )}
                                </p>
                            </div>

                        </div>
                    ))
                )}
            </div>

        </div>
    )
}

export default HisLeads