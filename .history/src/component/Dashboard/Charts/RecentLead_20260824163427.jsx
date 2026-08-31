import React from "react"

const RecentLead = ({ data = [] }) => {

    const latest = [...data]
        .sort(
            (a, b) =>
                new Date(b.createdAt) - new Date(a.createdAt)
        )
        .slice(0, 4)

    const statusStyle = {
        New: "bg-green-50 text-green-600 border-green-100",
        Contacted: "bg-blue-50 text-blue-600 border-blue-100",
        "Site Visit": "bg-purple-50 text-purple-600 border-purple-100",
        Qualified: "bg-orange-50 text-orange-600 border-orange-100",
        Lost: "bg-red-50 text-red-600 border-red-100",
        Converted: "bg-emerald-50 text-emerald-600 border-emerald-100",
    }

    const avatarColors = [
        "bg-purple-100 text-purple-600",
        "bg-green-100 text-green-600",
        "bg-orange-100 text-orange-600",
        "bg-cyan-100 text-cyan-600",
        "bg-red-100 text-red-600",
    ]

    return (
        <div className="w-full h-full bg-white rounded-lg border border-gray-200 p-3">

            {/* Header */}
            <div className="flex items-center justify-between mb-1.5">

                <div>
                    <h3 className="text-[12px] font-semibold text-gray-900">
                        Recent Leads
                    </h3>
                </div>

                <button
                    className="
                        text-[9px]
                        font-medium
                        text-blue-600
                        hover:text-blue-700
                    "
                >
                    View All
                </button>

            </div>

            {/* Leads */}
            <div className="divide-y divide-gray-100">

                {latest.length === 0 ? (

                    <div className="h-[150px] flex items-center justify-center">
                        <p className="text-[10px] text-gray-400">
                            No leads found
                        </p>
                    </div>

                ) : (

                    latest.map((item, index) => (

                        <div
                            key={item._id || index}
                            className="
                                flex
                                items-center
                                justify-between
                                py-1.5
                                hover:bg-gray-50
                                transition
                            "
                        >

                            {/* Lead Information */}
                            <div className="flex items-center gap-2 min-w-0">

                                {/* Avatar */}
                                <div
                                    className={`
                                        flex
                                        h-7
                                        w-7
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        text-[9px]
                                        font-semibold
                                        ${avatarColors[index % avatarColors.length]}
                                    `}
                                >
                                    {item.name
                                        ?.charAt(0)
                                        ?.toUpperCase()}
                                </div>

                                {/* Name + Interest */}
                                <div className="min-w-0">

                                    <p className="
                                        text-[10px]
                                        font-semibold
                                        text-gray-800
                                        truncate
                                    ">
                                        {item.name}
                                    </p>

                                    <p className="
                                        text-[9px]
                                        text-gray-400
                                        truncate
                                        mt-0
                                    ">
                                        {item.interested}
                                    </p>

                                </div>

                            </div>

                            {/* Status */}
                            <div className="flex items-center gap-2 shrink-0">

                                <span
                                    className={`
                                        px-1.5
                                        py-0.5
                                        rounded
                                        border
                                        text-[8px]
                                        font-medium
                                        ${
                                            statusStyle[item.status] ||
                                            "bg-gray-50 text-gray-500 border-gray-100"
                                        }
                                    `}
                                >
                                    {item.status || "New"}
                                </span>

                                {/* Date */}
                                <span className="
                                    text-[8px]
                                    text-gray-400
                                    w-[58px]
                                    text-right
                                ">
                                    {item.createdAt
                                        ? new Date(
                                            item.createdAt
                                        ).toLocaleDateString(
                                            "en-GB",
                                            {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            }
                                        )
                                        : "-"}
                                </span>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>
    )
}

export default RecentLead