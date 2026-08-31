import React from "react"

const OverDueFollowUp = ({ data = [] }) => {

    const current =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

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
                dark:bg-[#1f1f2b]

                rounded-lg

                border
                border-gray-200
                dark:border-[#303044]

                shadow-sm
                dark:shadow-black/20

                overflow-hidden

                transition-colors
            "
        >

            {/* ================= HEADER ================= */}

            <div className="
                flex
                items-center
                justify-between
                px-3
                py-2.5
            ">

                <h3 className="
                    text-xs
                    font-semibold
                    text-gray-900
                    dark:text-white
                ">
                    Overdue Follow-ups
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


            {/* ================= LIST ================= */}

            <div>

                {overDue.length === 0 ? (

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
                            No Overdue Follow-Up
                        </p>
                    </div>

                ) : (

                    overDue.map((item, index) => {

                        const overdueDays =
                            getOverdueDays(
                                item.nextFollowUpDate
                            )

                        return (
                            <div
                                key={
                                    item._id ||
                                    item.id ||
                                    item.phone ||
                                    index
                                }
                                className="
                                    flex
                                    items-center
                                    justify-between

                                    px-3
                                    py-2

                                    border-t
                                    border-gray-100
                                    dark:border-[#303044]

                                    hover:bg-gray-50
                                    dark:hover:bg-[#272738]

                                    transition
                                "
                            >

                                {/* ================= LEFT SIDE ================= */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2.5
                                    min-w-0
                                ">

                                    {/* Avatar */}

                                    <div
                                        className="
                                            h-8
                                            w-8
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
                                                dark:text-gray-100

                                                truncate
                                            "
                                        >
                                            {item.name}
                                        </p>


                                        <p
                                            className="
                                                text-[9px]

                                                text-gray-500
                                                dark:text-gray-400

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
                                                    dark:text-gray-500

                                                    truncate
                                                    mt-0.5
                                                "
                                            >
                                                Assigned to:{" "}

                                                <span className="
                                                    text-gray-500
                                                    dark:text-gray-400
                                                ">
                                                    {item.assignedTo || "-"}
                                                </span>

                                            </p>

                                        )}

                                    </div>

                                </div>


                                {/* ================= RIGHT SIDE ================= */}

                                <div className="
                                    text-right
                                    shrink-0
                                    ml-2
                                ">

                                    <p
                                        className="
                                            text-[9px]
                                            font-medium

                                            text-red-500
                                            dark:text-red-400

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