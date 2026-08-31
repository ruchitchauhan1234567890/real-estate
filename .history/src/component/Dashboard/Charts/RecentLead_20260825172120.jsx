import React from "react"

const RecentLead = ({ data = [] }) => {

    const latest = [...data]
        .sort(
            (a, b) =>
                new Date(b.createdAt) - new Date(a.createdAt)
        )
        .slice(0, 5)

    const statusStyle = {
        New: "bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
        Contacted: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
        "Site Visit": "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800",
        Qualified: "bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800",
        Lost: "bg-red-50 text-red-600 border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
        Converted: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800",
    }

    const avatarColors = [
        "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
        "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
        "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
        "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    ]

    return (
        <div className="
            w-full
            h-full
            bg-white
            dark:bg-[#1F1F30]
            rounded-lg
            border
            border-gray-200
            dark:border-[#353548]
            p-3
        ">

            {/* Header */}

            <div className="
                flex
                items-center
                justify-between
                mb-1.5
            ">

                <div>

                    <h3 className="
                        text-[12px]
                        font-semibold
                        text-gray-900
                        dark:text-white
                    ">
                        Recent Leads
                    </h3>

                </div>

                <button
                    className="
                        text-[9px]
                        font-medium
                        text-blue-600
                        dark:text-blue-400
                        hover:text-blue-700
                        dark:hover:text-blue-300
                    "
                >
                    View All
                </button>

            </div>


            {/* Leads */}

            <div className="
                divide-y
                divide-gray-100
                dark:divide-[#353548]
            ">

                {latest.length === 0 ? (

                    <div className="
                        h-[150px]
                        flex
                        items-center
                        justify-center
                    ">

                        <p className="
                            text-[10px]
                            text-gray-400
                            dark:text-gray-500
                        ">
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
                                dark:hover:bg-[#2A2A40]
                                transition
                            "
                        >

                            {/* Lead Information */}

                            <div className="
                                flex
                                items-center
                                gap-2
                                min-w-0
                            ">

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
                                        dark:text-gray-200
                                        truncate
                                    ">
                                        {item.name}
                                    </p>

                                    <p className="
                                        text-[9px]
                                        text-gray-400
                                        dark:text-gray-500
                                        truncate
                                        mt-0
                                    ">
                                        {item.interested}
                                    </p>

                                </div>

                            </div>


                            {/* Status */}

                            <div className="
                                flex
                                items-center
                                gap-2
                                shrink-0
                            ">

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
                                            "bg-gray-50 text-gray-500 border-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                                        }
                                    `}
                                >
                                    {item.status || "New"}
                                </span>


                                {/* Date */}

                                <span className="
                                    text-[8px]
                                    text-gray-400
                                    dark:text-gray-500
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