import React from "react"

const HisTasks = ({ task = [] }) => {

    const myTask = [...task]
        .sort(
            (a, b) =>
                new Date(b.createdDate) - new Date(a.createdDate)
        )
        .slice(0, 5)

    const statusStyle = {
        Pending:
            "bg-orange-50 text-orange-600 border border-orange-100",

        "In Progress":
            "bg-blue-50 text-blue-600 border border-blue-100",

        Completed:
            "bg-green-50 text-green-600 border border-green-100",

        Overdue:
            "bg-red-50 text-red-600 border border-red-100"
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
            <div className="flex items-center justify-between px-3 py-2.5">

                <h3 className="text-xs font-semibold text-gray-900">
                    My Tasks
                </h3>

                <button className="
                    text-[10px]
                    font-medium
                    text-blue-600
                    hover:text-blue-700
                ">
                    View All
                </button>

            </div>


            {/* Table Header */}
            <div className="
                grid
                grid-cols-[1.5fr_1.2fr_1.1fr_1fr]
                items-center
                bg-gray-50
                border-y
                border-gray-100
                px-3
                py-1.5
            ">

                <p className="text-[9px] font-semibold text-gray-500">
                    Task
                </p>

                <p className="text-[9px] font-semibold text-gray-500">
                    Lead
                </p>

                <p className="text-[9px] font-semibold text-gray-500">
                    Due Date
                </p>

                <p className="text-[9px] font-semibold text-gray-500">
                    Status
                </p>

            </div>


            {/* Tasks */}
            <div>

                {myTask.length > 0 ? (

                    myTask.map((item, index) => (

                        <div
                            key={item._id || index}
                            className="
                                grid
                                grid-cols-[1.5fr_1.2fr_1.1fr_1fr]
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

                            {/* Task */}
                            <div className="min-w-0">

                                <p className="
                                    text-[10px]
                                    font-medium
                                    text-gray-800
                                    truncate
                                ">
                                    {item.title}
                                </p>

                            </div>


                            {/* Lead */}
                            <div className="min-w-0">

                                <p className="
                                    text-[10px]
                                    text-gray-500
                                    truncate
                                ">
                                    {item.lead || "-"}
                                </p>

                            </div>


                            {/* Due Date */}
                            <div>

                                <p className="
                                    text-[9px]
                                    text-gray-500
                                    whitespace-nowrap
                                ">
                                    {formatDate(
                                        item.dueDate ||
                                        item.dueDateTime ||
                                        item.createdDate
                                    )}
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
                                        ${
                                            statusStyle[item.taskStatus] ||
                                            "bg-gray-50 text-gray-500 border border-gray-100"
                                        }
                                    `}
                                >
                                    {item.taskStatus}
                                </span>

                            </div>

                        </div>

                    ))

                ) : (

                    <div className="py-8 text-center">
                        <p className="text-xs text-gray-400">
                            No Task Found
                        </p>
                    </div>

                )}

            </div>

        </div>
    )
}

export default HisTasks