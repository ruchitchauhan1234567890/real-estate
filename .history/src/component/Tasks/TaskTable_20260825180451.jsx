import React, { useContext, useState } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { HiPencilSquare } from "react-icons/hi2"
import { TaskContext } from "../../ContextAPI/TaskContext"
import Select from "react-select"

const TaskTable = () => {

    const {
        taskData,
        setTaskData,
        open,
        setOpen,
        setEditedTask
    } = useContext(TaskContext)

    const [filters, setFilters] = useState({
        taskStatus: "All",
        priority: "All",
        searchTask: ""
    })

    const filterData = taskData.filter((task) => {

        const statusMatch =
            filters.taskStatus === "All" ||
            task.taskStatus === filters.taskStatus

        const priorityMatch =
            filters.priority === "All" ||
            task.priority === filters.priority

        const searchMatch =
            filters.searchTask === "" ||
            task.title
                ?.toLowerCase()
                .includes(filters.searchTask.toLowerCase())

        return statusMatch && priorityMatch && searchMatch
    })

    const handleDelete = (id) => {

        const updatedTasks = taskData.filter(
            (task) => task.id !== id
        )

        localStorage.setItem(
            "tasks",
            JSON.stringify(updatedTasks)
        )

        setTaskData(updatedTasks)
    }

    const handleUpdate = (task) => {
        setEditedTask(task)
        setOpen(!open)
    }

    const handleReset = () => {
        setFilters({
            taskStatus: "All",
            priority: "All",
            searchTask: ""
        })
    }

    const taskStatusOptions = [
        { value: "All", label: "All Status" },
        { value: "Pending", label: "Pending" },
        { value: "Processing", label: "Processing" },
        { value: "Completed", label: "Completed" }
    ]

    const priorityOptions = [
        { value: "All", label: "All Priority" },
        { value: "High", label: "High" },
        { value: "Medium", label: "Medium" },
        { value: "Low", label: "Low" }
    ]

    const statusStyle = {
        Pending:
            "bg-yellow-50 text-yellow-600 border-yellow-100 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20",

        Processing:
            "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",

        Completed:
            "bg-green-50 text-green-600 border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20"
    }

    const priorityStyle = {
        High:
            "bg-red-50 text-red-600 border-red-100 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20",

        Medium:
            "bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20",

        Low:
            "bg-gray-50 text-gray-600 border-gray-100 dark:bg-gray-700/30 dark:text-gray-400 dark:border-gray-600"
    }

    const selectStyles = {
        control: (base, state) => ({
            ...base,
            minHeight: "30px",
            height: "30px",
            borderRadius: "6px",
            borderColor: state.isFocused
                ? "#93c5fd"
                : "#e5e7eb",
            boxShadow: "none",
            fontSize: "11px",
            backgroundColor: "white",
            color: "#374151",
            "&:hover": {
                borderColor: "#93c5fd"
            }
        }),

        valueContainer: (base) => ({
            ...base,
            padding: "0 8px"
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "30px"
        }),

        dropdownIndicator: (base) => ({
            ...base,
            padding: "4px"
        }),

        clearIndicator: (base) => ({
            ...base,
            padding: "4px"
        }),

        singleValue: (base) => ({
            ...base,
            color: "#374151"
        }),

        placeholder: (base) => ({
            ...base,
            color: "#9ca3af"
        }),

        option: (base, state) => ({
            ...base,
            fontSize: "11px",
            padding: "7px 9px",
            backgroundColor: state.isSelected
                ? "#eff6ff"
                : state.isFocused
                    ? "#f9fafb"
                    : "white",
            color: "#374151"
        }),

        menu: (base) => ({
            ...base,
            zIndex: 20
        })
    }

    return (
        <div className="w-full min-w-0">

            {/* ================= FILTERS ================= */}

            <div className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-2

                bg-white
                dark:bg-[#1f1f2b]

                border
                border-gray-200
                dark:border-[#303044]

                rounded-lg
                mt-2
                px-3
                py-2
                mb-1

                transition-colors
            ">

                {/* Filter Controls */}

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    w-full
                    sm:w-auto
                ">

                    {/* Search */}

                    <div className="
                        relative
                        w-full
                        sm:w-52
                    ">

                        <input
                            type="text"
                            placeholder="Search task..."
                            name="searchTask"
                            value={filters.searchTask}
                            onChange={(e) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    searchTask: e.target.value
                                }))
                            }
                            className="
                                w-full
                                h-[30px]
                                rounded-md

                                border
                                border-gray-200
                                dark:border-[#3a3a4d]

                                bg-white
                                dark:bg-[#181824]

                                px-3
                                text-[11px]

                                text-gray-700
                                dark:text-gray-200

                                outline-none

                                placeholder:text-gray-400
                                dark:placeholder:text-gray-500

                                focus:border-blue-300
                                focus:ring-1
                                focus:ring-blue-100

                                dark:focus:border-blue-500
                                dark:focus:ring-blue-500/20

                                transition-colors
                            "
                        />

                    </div>


                    {/* Priority */}

                    <div className="
                        w-[calc(50%-4px)]
                        sm:w-32
                    ">

                        <Select
                            options={priorityOptions}
                            value={priorityOptions.find(
                                (option) =>
                                    option.value === filters.priority
                            )}
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    priority: selected.value
                                }))
                            }
                            styles={selectStyles}
                            isSearchable={false}
                        />

                    </div>


                    {/* Status */}

                    <div className="
                        w-[calc(50%-4px)]
                        sm:w-36
                    ">

                        <Select
                            options={taskStatusOptions}
                            value={taskStatusOptions.find(
                                (option) =>
                                    option.value === filters.taskStatus
                            )}
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    taskStatus: selected.value
                                }))
                            }
                            styles={selectStyles}
                            isSearchable={false}
                        />

                    </div>


                    {/* Reset */}

                    <button
                        onClick={handleReset}
                        className="
                            h-[30px]
                            px-3
                            rounded-md

                            border
                            border-gray-200
                            dark:border-[#3a3a4d]

                            bg-gray-50
                            dark:bg-[#181824]

                            text-[11px]
                            font-medium

                            text-gray-600
                            dark:text-gray-300

                            hover:bg-gray-100
                            dark:hover:bg-[#252536]

                            transition
                        "
                    >
                        Reset
                    </button>

                </div>


                {/* Count */}

                <p className="
                    text-[10px]
                    text-gray-400
                    dark:text-gray-500

                    whitespace-nowrap
                    sm:ml-auto
                ">
                    {filterData.length} Tasks
                </p>

            </div>


            {/* ================= TABLE ================= */}

            <div className="
                w-full
                overflow-hidden

                bg-white
                dark:bg-[#1f1f2b]

                border
                border-gray-200
                dark:border-[#303044]

                rounded-lg
                shadow-sm

                transition-colors
            ">

                <div className="
                    w-full
                    overflow-x-auto
                ">

                    <table className="
                        w-full
                        min-w-[720px]
                        border-collapse
                    ">

                        {/* Header */}

                        <thead className="
                            bg-gray-50
                            dark:bg-[#181824]

                            border-b
                            border-gray-200
                            dark:border-[#303044]
                        ">

                            <tr>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    whitespace-nowrap
                                ">
                                    #
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    whitespace-nowrap
                                ">
                                    Task Title
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    whitespace-nowrap
                                ">
                                    Related Lead
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    whitespace-nowrap
                                ">
                                    Assigned To
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    whitespace-nowrap
                                ">
                                    Priority
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    whitespace-nowrap
                                ">
                                    Status
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-center
                                    text-[9px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    whitespace-nowrap
                                ">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        {/* Body */}

                        <tbody>

                            {filterData.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="
                                            text-center
                                            py-8

                                            text-xs
                                            text-gray-400
                                            dark:text-gray-500
                                        "
                                    >
                                        No Tasks Found
                                    </td>

                                </tr>

                            ) : (

                                filterData.map((task, index) => (

                                    <tr
                                        key={task.id || index}
                                        className="
                                            border-b
                                            border-gray-100
                                            dark:border-[#303044]

                                            last:border-b-0

                                            hover:bg-gray-50
                                            dark:hover:bg-[#252536]

                                            transition
                                        "
                                    >

                                        {/* Number */}

                                        <td className="
                                            px-3
                                            py-2

                                            text-[10px]
                                            text-gray-400
                                            dark:text-gray-500
                                        ">
                                            {index + 1}
                                        </td>


                                        {/* Title */}

                                        <td className="
                                            px-3
                                            py-2
                                            max-w-[200px]
                                        ">

                                            <p className="
                                                text-[10px]
                                                font-medium

                                                text-gray-800
                                                dark:text-gray-200

                                                truncate
                                            ">
                                                {task.title}
                                            </p>

                                        </td>


                                        {/* Lead */}

                                        <td className="
                                            px-3
                                            py-2
                                            text-[10px]

                                            text-gray-500
                                            dark:text-gray-400

                                            whitespace-nowrap
                                        ">
                                            {task.lead || "-"}
                                        </td>


                                        {/* Assigned */}

                                        <td className="
                                            px-3
                                            py-2
                                            text-[10px]

                                            text-gray-500
                                            dark:text-gray-400

                                            whitespace-nowrap
                                        ">
                                            {task.assign || "-"}
                                        </td>


                                        {/* Priority */}

                                        <td className="
                                            px-3
                                            py-2
                                        ">

                                            <span
                                                className={`
                                                    inline-flex
                                                    px-2
                                                    py-0.5
                                                    rounded
                                                    border
                                                    text-[8px]
                                                    font-medium
                                                    whitespace-nowrap

                                                    ${priorityStyle[task.priority] ||
                                                    "bg-gray-50 text-gray-500 border-gray-100 dark:bg-gray-700/30 dark:text-gray-400 dark:border-gray-600"}
                                                `}
                                            >
                                                {task.priority || "-"}
                                            </span>

                                        </td>


                                        {/* Status */}

                                        <td className="
                                            px-3
                                            py-2
                                        ">

                                            <span
                                                className={`
                                                    inline-flex
                                                    px-2
                                                    py-0.5
                                                    rounded
                                                    border
                                                    text-[8px]
                                                    font-medium
                                                    whitespace-nowrap

                                                    ${statusStyle[task.taskStatus] ||
                                                    "bg-gray-50 text-gray-500 border-gray-100 dark:bg-gray-700/30 dark:text-gray-400 dark:border-gray-600"}
                                                `}
                                            >
                                                {task.taskStatus || "-"}
                                            </span>

                                        </td>


                                        {/* Actions */}

                                        <td className="
                                            px-3
                                            py-2
                                        ">

                                            <div className="
                                                flex
                                                items-center
                                                justify-center
                                                gap-1.5
                                            ">

                                                <button
                                                    onClick={() =>
                                                        handleUpdate(task)
                                                    }
                                                    className="
                                                        w-7
                                                        h-7
                                                        flex
                                                        items-center
                                                        justify-center
                                                        rounded-md

                                                        bg-blue-50
                                                        dark:bg-blue-500/10

                                                        text-blue-600
                                                        dark:text-blue-400

                                                        hover:bg-blue-100
                                                        dark:hover:bg-blue-500/20

                                                        transition
                                                    "
                                                >
                                                    <HiPencilSquare
                                                        size={14}
                                                    />
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        handleDelete(task.id)
                                                    }
                                                    className="
                                                        w-7
                                                        h-7
                                                        flex
                                                        items-center
                                                        justify-center
                                                        rounded-md

                                                        bg-red-50
                                                        dark:bg-red-500/10

                                                        text-red-500
                                                        dark:text-red-400

                                                        hover:bg-red-100
                                                        dark:hover:bg-red-500/20

                                                        transition
                                                    "
                                                >
                                                    <MdDeleteOutline
                                                        size={14}
                                                    />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default TaskTable