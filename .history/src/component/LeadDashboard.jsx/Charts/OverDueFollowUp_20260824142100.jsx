import React from "react"

const OverDueFollowUp = ({ data = [] }) => {

    const current = JSON.parse(localStorage.getItem("loggedUser")) || {}

    // Today's date
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const day = String(today.getDate()).padStart(2, "0")

    const formattedDate = `${year}-${month}-${day}`

    // Get overdue follow-ups
    const overDue = data
        ?.filter((item) => {
            if (!item.nextFollowUpDate) return false
            return item.nextFollowUpDate < formattedDate
        })
        .sort(
            (a, b) =>
                new Date(a.nextFollowUpDate) -
                new Date(b.nextFollowUpDate)
        )
        .slice(0, 3) || []


    // Calculate overdue days
    const getOverdueDays = (date) => {
        const todayDate = new Date(formattedDate)
        const followUpDate = new Date(date)

        return Math.ceil(
            (todayDate - followUpDate) /
            (1000 * 60 * 60 * 24)
        )
    }


    return (
        <div
            className="
                w-full
                h-full
                bg-white
                rounded-xl
                border
                border-gray-200
                shadow-sm
                overflow-hidden
            "
        >

            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2.5">

                <h3 className="text-xs font-semibold text-gray-900">
                    Overdue Follow-ups
                </h3>

                <button
                    className="
                        text-[10px]
                        font-medium
                        text-blue-600
                        hover:text-blue-700
                        transition
                    "
                >
                    View All
                </button>

            </div>


            {/* List */}
            <div>

                {overDue.length === 0 ? (

                    <div className="flex items-center justify-center py-8">
                        <p className="text-xs text-gray-400">
                            No Overdue Follow-Up
                        </p>
                    </div>

                ) : (

                    overDue.map((item, index) => {

                        const overdueDays =
                            getOverdueDays(item.nextFollowUpDate)

                        return (
                            <div
                                key={item._id || item.id || item.phone || index}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    px-3
                                    py-2
                                    border-t
                                    border-gray-100
                                    hover:bg-gray-50
                                    transition
                                "
                            >

                                {/* Left Side */}
                                <div className="flex items-center gap-2.5 min-w-0">

                                    {/* Avatar */}
                                    <div
                                        className="
                                            h-8
                                            w-8
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
                                        "
                                    >
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


                                    {/* Lead Info */}
                                    <div className="min-w-0">

                                        <p
                                            className="
                                                text-[10px]
                                                font-semibold
                                                text-gray-800
                                                truncate
                                            "
                                        >
                                            {item.name}
                                        </p>

                                        <p
                                            className="
                                                text-[9px]
                                                text-gray-500
                                                truncate
                                                mt-0.5
                                            "
                                        >
                                            {item.interested || "-"}
                                        </p>

                                        {/* Show assigned employee only for admin */}
                                        {current?.isAdmin && (
                                            <p
                                                className="
                                                    text-[8px]
                                                    text-gray-400
                                                    truncate
                                                    mt-0.5
                                                "
                                            >
                                                Assigned to:{" "}
                                                <span className="text-gray-500">
                                                    {item.assignedTo || "-"}
                                                </span>
                                            </p>
                                        )}

                                    </div>

                                </div>


                                {/* Right Side */}
                                <div className="text-right shrink-0 ml-2">

                                    <p
                                        className="
                                            text-[9px]
                                            font-medium
                                            text-red-500
                                            whitespace-nowrap
                                        "
                                    >
                                        {overdueDays}{" "}
                                        {overdueDays === 1
                                            ? "Day"
                                            : "Days"}{" "}
                                        Overdue
                                    </p>

                                </div>

                            </div>
                        )
                    })
                )}

            </div>

        </div>
    )
}

export default OverDueFollowUp