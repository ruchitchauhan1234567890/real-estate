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
            rounded-xl
            border
            border-gray-200
            shadow-sm
            overflow-hidden
        ">

            {/* Header */}
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
                ">
                    Today's Follow-ups
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


            {/* Follow-ups */}
            <div>

                {todays.length === 0 ? (

                    <div className="
                        flex
                        items-center
                        justify-center
                        py-8
                    ">
                        <p className="text-xs text-gray-400">
                            No Follow-ups Today
                        </p>
                    </div>

                ) : (

                    todays.map((item, index) => (

                        <div
                            key={item.id || item._id || item.phone || index}
                            className="
                                flex
                                items-center
                                justify-between
                                px-4
                                py-2.5
                                border-t
                                border-gray-100
                                hover:bg-gray-50
                                transition
                            "
                        >

                            {/* Left */}
                            <div className="flex items-center gap-2.5">

                                {/* Avatar */}
                                <div className="
                                    h-7
                                    w-7
                                    shrink-0
                                    rounded-full
                                    bg-gray-100
                                    flex
                                    items-center
                                    justify-center
                                    text-[10px]
                                    font-semibold
                                    text-gray-700
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
                                        truncate
                                    ">
                                        {item.name}
                                    </p>

                                    <p className="
                                        text-[9px]
                                        text-gray-500
                                        truncate
                                        mt-0.5
                                    ">
                                        {item.interested || "-"}
                                    </p>

                                </div>

                            </div>


                            {/* Time */}
                            <div className="text-right">

                                <p className="
                                    text-[9px]
                                    font-medium
                                    text-gray-600
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