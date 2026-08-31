import React from "react"

const TodaysFollowUp = ({ data = [] }) => {

    const today = new Date()

    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const day = String(today.getDate()).padStart(2, "0")

    const formattedDate = `${year}-${month}-${day}`

    const todays = data
        ?.filter((item) => item.nextFollowUpDate === formattedDate)
        .slice(0, 3) || []


    const formatTime = (time) => {

        if (!time) return "--"

        // If time is already like 10:30 AM
        if (time.includes("AM") || time.includes("PM")) {
            return time
        }

        // If time is like 10:30
        const [hours, minutes] = time.split(":")

        if (!hours || !minutes) return time

        const date = new Date()
        date.setHours(Number(hours))
        date.setMinutes(Number(minutes))

        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit"
        })
    }


    return (
        <div className="
            w-full
            h-full

            bg-white
            dark:bg-[#1f1f2b]

            rounded-xl

            border
            border-gray-200
            dark:border-[#303044]

            shadow-sm
            dark:shadow-black/20

            overflow-hidden

            transition-colors
        ">

            {/* ================= HEADER ================= */}

            <div className="
                flex
                items-center
                justify-between
                px-4
                py-3
            ">

                <h3 className="
                    text-xs
                    font-semibold
                    text-gray-900
                    dark:text-white
                ">
                    Today's Follow-ups
                </h3>

                <button
                    className="
                        text-[10px]
                        font-medium

                        text-blue-600
                        dark:text-blue-400

                        hover:text-blue-700
                        dark:hover:text-blue-300

                        transition
                    "
                >
                    View All
                </button>

            </div>


            {/* ================= FOLLOW-UPS ================= */}

            <div>

                {todays.length === 0 ? (

                    <div className="
                        flex
                        items-center
                        justify-center
                        py-8
                    ">
                        <p className="
                            text-xs
                            text-gray-400
                            dark:text-gray-500
                        ">
                            No Follow-ups Today
                        </p>
                    </div>

                ) : (

                    todays.map((item, index) => (

                        <div
                            key={
                                item.id ||
                                item._id ||
                                item.phone ||
                                index
                            }
                            className="
                                flex
                                items-center
                                justify-between

                                px-4
                                py-2.5

                                border-t
                                border-gray-100
                                dark:border-[#303044]

                                hover:bg-gray-50
                                dark:hover:bg-[#272738]

                                transition
                            "
                        >

                            {/* ================= LEFT ================= */}

                            <div className="
                                flex
                                items-center
                                gap-2.5
                            ">

                                {/* Avatar */}

                                <div className="
                                    h-7
                                    w-7
                                    shrink-0

                                    rounded-full

                                    bg-gray-100
                                    dark:bg-[#303044]

                                    flex
                                    items-center
                                    justify-center

                                    text-[10px]
                                    font-semibold

                                    text-gray-700
                                    dark:text-gray-300

                                    overflow-hidden
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

                                        item.name
                                            ?.charAt(0)
                                            ?.toUpperCase()

                                    )}

                                </div>


                                {/* Name + Property */}

                                <div className="min-w-0">

                                    <p className="
                                        text-[10px]
                                        font-semibold

                                        text-gray-800
                                        dark:text-gray-100

                                        truncate
                                    ">
                                        {item.name}
                                    </p>

                                    <p className="
                                        text-[9px]

                                        text-gray-500
                                        dark:text-gray-400

                                        truncate
                                        mt-0.5
                                    ">
                                        {item.interested || "-"}
                                    </p>

                                </div>

                            </div>


                            {/* ================= TIME ================= */}

                            <div className="text-right">

                                <p className="
                                    text-[9px]
                                    font-medium

                                    text-gray-600
                                    dark:text-gray-300

                                    whitespace-nowrap
                                ">
                                    {formatTime(
                                        item.nextFollowUpTime ||
                                        item.followUpTime ||
                                        item.time
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

export default TodaysFollowUp