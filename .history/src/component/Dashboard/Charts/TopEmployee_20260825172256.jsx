import React, { useState } from "react"

const TopEmployee = ({ employee = [], lead = [] }) => {

    const [showAll, setShowAll] = useState(false)

    const data = employee
        .map((emp) => {

            const result = lead.reduce(
                (acc, curr) => {

                    if (curr.assignedTo === emp.name) {
                        acc.totalLead++

                        if (curr.status === "Converted") {
                            acc.convertedLead++
                        }
                    }

                    return acc

                },
                {
                    name: emp.name,
                    photo: emp.photo,
                    totalLead: 0,
                    convertedLead: 0
                }
            )

            return {
                ...result,
                conversionRate:
                    result.totalLead > 0
                        ? (
                            (result.convertedLead / result.totalLead) *
                            100
                        ).toFixed(2)
                        : 0
            }
        })
        .sort(
            (a, b) =>
                Number(b.conversionRate) -
                Number(a.conversionRate)
        )

    const displayData = showAll
        ? data
        : data.slice(0, 5)

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
                mb-2
            ">

                <h3 className="
                    text-[11px]
                    font-semibold
                    text-gray-900
                    dark:text-white
                ">
                    Top Performing Employees
                </h3>

                <button
                    onClick={() => setShowAll(!showAll)}
                    className="
                        text-[9px]
                        font-medium
                        text-blue-600
                        dark:text-blue-400
                        hover:text-blue-700
                        dark:hover:text-blue-300
                    "
                >
                    {showAll ? "Show Less" : "View All"}
                </button>

            </div>


            {/* Employee List */}

            <div className="
                divide-y
                divide-gray-100
                dark:divide-[#353548]
            ">

                {displayData.length === 0 ? (

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
                            No employees found
                        </p>

                    </div>

                ) : (

                    displayData.map((item, index) => (

                        <div
                            key={item.name}
                            className="
                                flex
                                items-center
                                justify-between
                                py-[5px]
                                px-1
                                hover:bg-gray-50
                                dark:hover:bg-[#2A2A40]
                                transition
                            "
                        >

                            {/* Employee */}

                            <div className="
                                flex
                                items-center
                                gap-2
                                min-w-0
                            ">

                                {/* Profile */}

                                <div className="
                                    h-7
                                    w-7
                                    shrink-0
                                    overflow-hidden
                                    rounded-full
                                    bg-gray-100
                                    dark:bg-[#2A2A40]
                                ">

                                    {item.photo ? (

                                        <img
                                            src={item.photo}
                                            alt={item.name}
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                            "
                                        />

                                    ) : (

                                        <div className="
                                            h-full
                                            w-full
                                            flex
                                            items-center
                                            justify-center
                                            text-[9px]
                                            font-semibold
                                            text-blue-600
                                            dark:text-blue-400
                                        ">
                                            {item.name
                                                ?.charAt(0)
                                                ?.toUpperCase()}
                                        </div>

                                    )}

                                </div>


                                {/* Name */}

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
                                        text-[8px]
                                        text-gray-400
                                        dark:text-gray-500
                                        mt-[1px]
                                    ">
                                        Converted Leads:

                                        <span className="
                                            ml-1
                                            text-gray-600
                                            dark:text-gray-300
                                            font-medium
                                        ">
                                            {item.convertedLead}
                                        </span>

                                    </p>

                                </div>

                            </div>


                            {/* Conversion */}

                            <div className="
                                text-right
                                shrink-0
                                ml-2
                            ">

                                <p className="
                                    text-[10px]
                                    font-semibold
                                    text-green-600
                                    dark:text-green-400
                                ">
                                    {item.conversionRate}%
                                </p>

                                <p className="
                                    text-[7px]
                                    text-gray-400
                                    dark:text-gray-500
                                    mt-[1px]
                                ">
                                    Conversion Rate
                                </p>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>
    )
}

export default TopEmployee