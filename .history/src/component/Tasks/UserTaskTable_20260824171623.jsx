import React, { useState } from "react"
import Select from "react-select"

const UserTaskTable = () => {

    const [task, setTask] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    )

    const [filters, setFilters] = useState({
        taskStatus: "All",
        priority: "All",
        searchTask: ""
    })


    // =========================
    // LOGGED USER
    // =========================

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}


    // =========================
    // OPTIONS
    // =========================

    const priorityOptions = [
        { value: "All", label: "All" },
        { value: "High", label: "High" },
        { value: "Medium", label: "Medium" },
        { value: "Low", label: "Low" }
    ]


    const statusOptions = [
        { value: "All", label: "All" },
        { value: "Pending", label: "Pending" },
        { value: "Processing", label: "Processing" },
        { value: "Completed", label: "Completed" }
    ]


    // =========================
    // FILTER CHANGE
    // =========================

    const handleChange = (e) => {

        const { value, name } = e.target

        setFilters((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    // =========================
    // MY TASKS
    // =========================

    const myTask = task.filter(
        (task) => task.assign === loggedUser.name
    )


    // =========================
    // FILTER TASKS
    // =========================

    const filterData = myTask.filter((task) => {

        const tasks =
            filters.taskStatus === "All" ||
            task.taskStatus === filters.taskStatus

        const prioritys =
            filters.priority === "All" ||
            task.priority === filters.priority

        const searchTask =
            filters.searchTask === "" ||
            task.title
                ?.toLowerCase()
                .includes(filters.searchTask.toLowerCase())

        return (
            tasks &&
            prioritys &&
            searchTask
        )
    })


    // =========================
    // STATUS CHANGE
    // =========================

    const handleTaskChange = (value, id) => {

        const updateTask = task.map((task) => {

            if (task.id === id) {

                return {
                    ...task,
                    taskStatus: value
                }
            }

            return task
        })

        localStorage.setItem(
            "tasks",
            JSON.stringify(updateTask)
        )

        setTask(updateTask)
    }


    // =========================
    // RESET
    // =========================

    const handleReset = () => {

        setFilters({
            taskStatus: "All",
            priority: "All",
            searchTask: ""
        })
    }


    // =========================
    // COMMON SELECT STYLE
    // =========================

    const selectStyles = {

        control: (base, state) => ({
            ...base,

            minHeight: "32px",
            height: "32px",

            borderRadius: "6px",

            borderColor: state.isFocused
                ? "#3b82f6"
                : "#e5e7eb",

            boxShadow: state.isFocused
                ? "0 0 0 1px #3b82f6"
                : "none",

            backgroundColor: "#f9fafb",

            fontSize: "11px",

            cursor: "pointer",

            "&:hover": {
                borderColor: "#d1d5db"
            }
        }),

        valueContainer: (base) => ({
            ...base,
            padding: "0 9px"
        }),

        singleValue: (base) => ({
            ...base,
            fontSize: "11px",
            color: "#4b5563"
        }),

        placeholder: (base) => ({
            ...base,
            fontSize: "11px",
            color: "#9ca3af"
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "30px"
        }),

        dropdownIndicator: (base) => ({
            ...base,
            padding: "4px",
            color: "#6b7280"
        }),

        indicatorSeparator: () => ({
            display: "none"
        }),

        menu: (base) => ({
            ...base,
            borderRadius: "6px",
            overflow: "hidden",
            fontSize: "11px",
            zIndex: 100
        }),

        option: (base, state) => ({
            ...base,

            fontSize: "11px",
            padding: "7px 9px",

            backgroundColor:
                state.isSelected
                    ? "#eff6ff"
                    : state.isFocused
                        ? "#f9fafb"
                        : "#ffffff",

            color:
                state.isSelected
                    ? "#2563eb"
                    : "#374151",

            cursor: "pointer"
        })
    }


    // =========================
    // STATUS STYLE
    // =========================

    const getStatusStyle = (status) => {

        switch (status) {

            case "Completed":
                return {
                    background: "#f0fdf4",
                    color: "#16a34a",
                    border: "#bbf7d0"
                }

            case "Processing":
                return {
                    background: "#eff6ff",
                    color: "#2563eb",
                    border: "#bfdbfe"
                }

            case "Pending":
                return {
                    background: "#fff7ed",
                    color: "#ea580c",
                    border: "#fed7aa"
                }

            default:
                return {
                    background: "#f9fafb",
                    color: "#4b5563",
                    border: "#e5e7eb"
                }
        }
    }


    return (

        <div className="mt-3 w-full">


            {/* ================= FILTER BAR ================= */}

            <div className="
                bg-white
                border
                border-gray-200
                rounded-lg
                p-3
                mb-3
            ">

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                ">


                    {/* Search */}

                    <div className="w-full sm:w-52">

                        <input
                            type="text"
                            name="searchTask"
                            value={filters.searchTask}
                            onChange={handleChange}
                            placeholder="Search task..."
                            className="
                                w-full
                                h-8
                                px-3
                                border
                                border-gray-200
                                rounded-md
                                bg-gray-50
                                text-[11px]
                                text-gray-700
                                placeholder:text-gray-400
                                outline-none
                                focus:bg-white
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-500
                            "
                        />

                    </div>


                    {/* Priority */}

                    <div className="w-36">

                        <Select
                            options={priorityOptions}
                            value={
                                priorityOptions.find(
                                    (option) =>
                                        option.value ===
                                        filters.priority
                                )
                            }
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    priority:
                                        selected?.value || "All"
                                }))
                            }
                            isSearchable={false}
                            styles={selectStyles}
                            placeholder="Priority"
                        />

                    </div>


                    {/* Task Status */}

                    <div className="w-36">

                        <Select
                            options={statusOptions}
                            value={
                                statusOptions.find(
                                    (option) =>
                                        option.value ===
                                        filters.taskStatus
                                )
                            }
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    taskStatus:
                                        selected?.value || "All"
                                }))
                            }
                            isSearchable={false}
                            styles={selectStyles}
                            placeholder="Status"
                        />

                    </div>


                    {/* Reset */}

                    <button
                        onClick={handleReset}
                        className="
                            h-8
                            px-3
                            rounded-md
                            bg-gray-100
                            border
                            border-gray-200
                            text-[11px]
                            font-medium
                            text-gray-600
                            hover:bg-gray-200
                            transition
                        "
                    >
                        Reset Filter
                    </button>

                </div>

            </div>


            {/* ================= TABLE ================= */}

            <div className="
                bg-white
                border
                border-gray-200
                rounded-lg">


                {/* Header */}

                <div className="
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    border-b
                    border-gray-100
                ">

                    <div>

                        <h2 className="
                            text-sm
                            font-semibold
                            text-gray-900
                        ">
                            My Tasks
                        </h2>

                        <p className="
                            text-[10px]
                            text-gray-400
                            mt-0.5
                        ">
                            Tasks assigned to you
                        </p>

                    </div>


                    <span className="
                        px-2
                        py-1
                        rounded-md
                        bg-blue-50
                        text-blue-600
                        text-[10px]
                        font-medium
                    ">
                        {filterData.length} Tasks
                    </span>

                </div>


                {/* Table */}

                <div className="overflow-x-auto">

                    <table className="
                        w-full
                        border-collapse
                        // min-w-[750px]
                    ">

                        <thead>

                            <tr className="
                                bg-gray-50
                                border-b
                                border-gray-100
                            ">

                                <th className="
                                    px-3
                                    py-2.5
                                    text-center
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                    w-12
                                ">
                                    #
                                </th>


                                <th className="
                                    px-4
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                ">
                                    Task Title
                                </th>


                                <th className="
                                    px-4
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                ">
                                    Related Lead
                                </th>


                                <th className="
                                    px-4
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                ">
                                    Priority
                                </th>


                                <th className="
                                    px-4
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                ">
                                    Status
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {filterData.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="
                                            py-12
                                            text-center
                                        "
                                    >

                                        <p className="
                                            text-xs
                                            font-medium
                                            text-gray-500
                                        ">
                                            No Tasks Found
                                        </p>

                                        <p className="
                                            text-[10px]
                                            text-gray-400
                                            mt-1
                                        ">
                                            Try changing your filters
                                        </p>

                                    </td>

                                </tr>

                            ) : (

                                filterData.map((task, index) => {

                                    const statusStyle =
                                        getStatusStyle(
                                            task.taskStatus
                                        )

                                    return (

                                        <tr
                                            key={
                                                task.id ||
                                                index
                                            }
                                            className="
                                                border-b
                                                border-gray-100
                                                last:border-b-0
                                                hover:bg-gray-50
                                                transition-colors
                                            "
                                        >


                                            {/* # */}

                                            <td className="
                                                px-3
                                                py-2.5
                                                text-center
                                            ">

                                                <span className="
                                                    text-[10px]
                                                    font-medium
                                                    text-gray-400
                                                ">
                                                    {index + 1}
                                                </span>

                                            </td>


                                            {/* Task Title */}

                                            <td className="
                                                px-4
                                                py-2.5
                                            ">

                                                <p className="
                                                    text-[11px]
                                                    font-medium
                                                    text-gray-800
                                                    max-w-[250px]
                                                    truncate
                                                ">
                                                    {task.title}
                                                </p>

                                            </td>


                                            {/* Related Lead */}

                                            <td className="
                                                px-4
                                                py-2.5
                                            ">

                                                <p className="
                                                    text-[10px]
                                                    text-gray-600
                                                    max-w-[180px]
                                                    truncate
                                                ">
                                                    {task.lead || "-"}
                                                </p>

                                            </td>


                                            {/* Priority */}

                                            <td className="
                                                px-4
                                                py-2.5
                                            ">

                                                <span
                                                    className={`
                                                        inline-flex
                                                        items-center
                                                        px-2
                                                        py-1
                                                        rounded-md
                                                        text-[9px]
                                                        font-medium
                                                        border

                                                        ${
                                                            task.priority ===
                                                            "High"
                                                                ? "bg-red-50 text-red-600 border-red-100"
                                                                : task.priority ===
                                                                  "Medium"
                                                                    ? "bg-orange-50 text-orange-600 border-orange-100"
                                                                    : task.priority ===
                                                                      "Low"
                                                                        ? "bg-green-50 text-green-600 border-green-100"
                                                                        : "bg-gray-50 text-gray-500 border-gray-200"
                                                        }
                                                    `}
                                                >
                                                    {task.priority}
                                                </span>

                                            </td>


                                            {/* Status */}

                                            <td className="
                                                px-4
                                                py-2.5
                                                w-40
                                            ">

                                                <Select
                                                    options={
                                                        statusOptions.filter(
                                                            (option) =>
                                                                option.value !==
                                                                "All"
                                                        )
                                                    }
                                                    value={
                                                        statusOptions.find(
                                                            (option) =>
                                                                option.value ===
                                                                task.taskStatus
                                                        ) || null
                                                    }
                                                    onChange={(selected) =>
                                                        handleTaskChange(
                                                            selected?.value,
                                                            task.id
                                                        )
                                                    }
                                                    isSearchable={false}
                                                    styles={{
                                                        ...selectStyles,

                                                        control: (
                                                            base,
                                                            state
                                                        ) => ({
                                                            ...base,

                                                            minHeight: "28px",
                                                            height: "28px",

                                                            borderRadius:
                                                                "5px",

                                                            borderColor:
                                                                state.isFocused
                                                                    ? "#3b82f6"
                                                                    : statusStyle.border,

                                                            backgroundColor:
                                                                statusStyle.background,

                                                            boxShadow:
                                                                state.isFocused
                                                                    ? "0 0 0 1px #3b82f6"
                                                                    : "none",

                                                            fontSize: "10px",

                                                            cursor:
                                                                "pointer"
                                                        }),

                                                        singleValue: (
                                                            base
                                                        ) => ({
                                                            ...base,

                                                            fontSize:
                                                                "10px",

                                                            fontWeight: 500,

                                                            color:
                                                                statusStyle.color
                                                        }),

                                                        valueContainer: (
                                                            base
                                                        ) => ({
                                                            ...base,

                                                            padding:
                                                                "0 7px"
                                                        }),

                                                        indicatorsContainer: (
                                                            base
                                                        ) => ({
                                                            ...base,

                                                            height: "26px"
                                                        }),

                                                        dropdownIndicator: (
                                                            base
                                                        ) => ({
                                                            ...base,

                                                            padding: "3px",

                                                            color:
                                                                statusStyle.color
                                                        }),

                                                        option: (
                                                            base,
                                                            state
                                                        ) => ({
                                                            ...base,

                                                            fontSize:
                                                                "10px",

                                                            padding:
                                                                "6px 8px",

                                                            backgroundColor:
                                                                state.isSelected
                                                                    ? "#eff6ff"
                                                                    : state.isFocused
                                                                        ? "#f9fafb"
                                                                        : "#fff",

                                                            color:
                                                                state.isSelected
                                                                    ? "#2563eb"
                                                                    : "#374151"
                                                        })
                                                    }}
                                                />

                                            </td>

                                        </tr>

                                    )
                                })

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default UserTaskTable