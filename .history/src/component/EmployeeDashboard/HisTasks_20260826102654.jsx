import React from "react"

const HisTasks = ({ task = [] }) => {

    const myTask = [...task]
        .sort(
            (a, b) =>
                new Date(b.createdDate) -
                new Date(a.createdDate)
        )
        .slice(0, 5)


    // =====================================================
    // STATUS STYLE
    // =====================================================

    const statusStyle = {

        Pending: `
            bg-orange-50
            text-orange-600
            border
            border-orange-100

            dark:bg-orange-500/10
            dark:text-orange-400
            dark:border-orange-500/20
        `,

        "In Progress": `
            bg-blue-50
            text-blue-600
            border
            border-blue-100

            dark:bg-blue-500/10
            dark:text-blue-400
            dark:border-blue-500/20
        `,

        Processing: `
            bg-blue-50
            text-blue-600
            border
            border-blue-100

            dark:bg-blue-500/10
            dark:text-blue-400
            dark:border-blue-500/20
        `,

        Completed: `
            bg-green-50
            text-green-600
            border
            border-green-100

            dark:bg-green-500/10
            dark:text-green-400
            dark:border-green-500/20
        `,

        Overdue: `
            bg-red-50
            text-red-600
            border
            border-red-100

            dark:bg-red-500/10
            dark:text-red-400
            dark:border-red-500/20
        `
    }


    // =====================================================
    // DATE FORMAT
    // =====================================================

    const formatDate = (date) => {

        if (!date) return "-"

        return new Date(date).toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        )
    }


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

            shadow-sm

            overflow-hidden
        ">


            {/* =================================================
                HEADER
            ================================================= */}

            <div className="
                flex
                items-center
                justify-between

                px-3
                py-2
            ">

                <div>

                    <h3 className="
                        text-[11px]
                        font-semibold

                        text-gray-900
                        dark:text-white
                    ">
                        My Tasks
                    </h3>


                    <p className="
                        text-[9px]

                        text-gray-400
                        dark:text-gray-500

                        mt-0.5
                    ">
                        Recently assigned tasks
                    </p>

                </div>


                {/* VIEW ALL */}

                <button
                    type="button"
                    className="
                        text-[9px]
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


            {/* =================================================
                TABLE HEADER
            ================================================= */}

            <div className="
                grid

                grid-cols-[1.5fr_1.2fr_1.1fr_1fr]

                items-center

                bg-gray-50
                dark:bg-[#2A2A40]

                border-y
                border-gray-100
                dark:border-[#353548]

                px-3
                py-1.5
            ">


                {/* TASK */}

                <p className="
                    text-[8px]
                    font-semibold

                    text-gray-400
                    dark:text-gray-500

                    uppercase
                ">
                    Task
                </p>


                {/* LEAD */}

                <p className="
                    text-[8px]
                    font-semibold

                    text-gray-400
                    dark:text-gray-500

                    uppercase
                ">
                    Lead
                </p>


                {/* DUE DATE */}

                <p className="
                    text-[8px]
                    font-semibold

                    text-gray-400
                    dark:text-gray-500

                    uppercase
                ">
                    Due Date
                </p>


                {/* STATUS */}

                <p className="
                    text-[8px]
                    font-semibold

                    text-gray-400
                    dark:text-gray-500

                    uppercase
                ">
                    Status
                </p>

            </div>


            {/* =================================================
                TASKS
            ================================================= */}

            <div>

                {myTask.length > 0 ? (

                    myTask.map((item, index) => (

                        <div
                            key={
                                item._id ||
                                item.id ||
                                index
                            }

                            className="
                                grid

                                grid-cols-[1.5fr_1.2fr_1.1fr_1fr]

                                items-center

                                px-3
                                py-1.5

                                border-b
                                border-gray-100
                                dark:border-[#353548]

                                last:border-b-0

                                hover:bg-gray-50
                                dark:hover:bg-[#2A2A40]

                                transition
                            "
                        >


                            {/* =================================================
                                TASK
                            ================================================= */}

                            <div className="
                                min-w-0
                            ">

                                <p className="
                                    text-[9px]
                                    font-medium

                                    text-gray-800
                                    dark:text-gray-200

                                    truncate
                                ">
                                    {item.title || "-"}
                                </p>

                            </div>


                            {/* =================================================
                                LEAD
                            ================================================= */}

                            <div className="
                                min-w-0
                            ">

                                <p className="
                                    text-[9px]

                                    text-gray-500
                                    dark:text-gray-400

                                    truncate
                                ">
                                    {item.lead || "-"}
                                </p>

                            </div>


                            {/* =================================================
                                DUE DATE
                            ================================================= */}

                            <div>

                                <p className="
                                    text-[8px]

                                    text-gray-500
                                    dark:text-gray-400

                                    whitespace-nowrap
                                ">
                                    {formatDate(
                                        item.dueDate ||
                                        item.dueDateTime ||
                                        item.createdDate
                                    )}
                                </p>

                            </div>


                            {/* =================================================
                                STATUS
                            ================================================= */}

                            <div>

                                <span
                                    className={`
                                        inline-flex
                                        items-center

                                        rounded

                                        px-1.5
                                        py-0.5

                                        text-[7px]
                                        font-medium

                                        whitespace-nowrap

                                        ${
                                            statusStyle[
                                                item.taskStatus
                                            ] ||
                                            `
                                                bg-gray-50
                                                text-gray-500
                                                border
                                                border-gray-100

                                                dark:bg-gray-500/10
                                                dark:text-gray-400
                                                dark:border-gray-500/20
                                            `
                                        }
                                    `}
                                >
                                    {item.taskStatus || "-"}
                                </span>

                            </div>

                        </div>

                    ))

                ) : (

                    <div className="
                        py-7
                        text-center
                    ">

                        <p className="
                            text-[10px]

                            text-gray-400
                            dark:text-gray-500
                        ">
                            No Task Found
                        </p>

                    </div>

                )}

            </div>

        </div>
    )
}

export default HisTasks