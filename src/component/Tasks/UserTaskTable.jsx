import React, { useContext, useState } from "react"
import Select from "react-select"
import { ThemeContext } from "../../ContextAPI/ThemeContext"

const UserTaskTable = () => {

    const { theme } = useContext(ThemeContext)

    const isDark = theme === "dark"

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
                .includes(
                    filters.searchTask.toLowerCase()
                )

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


    // =====================================================
    // COMMON SELECT STYLE
    // =====================================================

    const selectStyles = {

        control: (base, state) => ({
            ...base,

            minHeight: "32px",
            height: "32px",

            borderRadius: "6px",

            borderColor:
                state.isFocused
                    ? "#3b82f6"
                    : isDark
                        ? "#3a3a4d"
                        : "#e5e7eb",

            boxShadow:
                state.isFocused
                    ? "0 0 0 1px #3b82f6"
                    : "none",

            backgroundColor:
                isDark
                    ? "#181824"
                    : "#ffffff",

            fontSize: "11px",

            cursor: "pointer",

            "&:hover": {
                borderColor: "#93c5fd"
            }
        }),


        valueContainer: (base) => ({
            ...base,

            padding: "0 9px"
        }),


        singleValue: (base) => ({
            ...base,

            fontSize: "11px",

            color:
                isDark
                    ? "#e5e7eb"
                    : "#4b5563"
        }),


        placeholder: (base) => ({
            ...base,

            fontSize: "11px",

            color:
                isDark
                    ? "#6b7280"
                    : "#9ca3af"
        }),


        input: (base) => ({
            ...base,

            color:
                isDark
                    ? "#e5e7eb"
                    : "#374151"
        }),


        indicatorsContainer: (base) => ({
            ...base,

            height: "30px"
        }),


        dropdownIndicator: (base) => ({
            ...base,

            padding: "4px",

            color:
                isDark
                    ? "#9ca3af"
                    : "#6b7280",

            "&:hover": {
                color:
                    isDark
                        ? "#e5e7eb"
                        : "#374151"
            }
        }),


        clearIndicator: (base) => ({
            ...base,

            padding: "4px",

            color:
                isDark
                    ? "#9ca3af"
                    : "#6b7280"
        }),


        indicatorSeparator: () => ({
            display: "none"
        }),


        // =====================================================
        // DROPDOWN MENU
        // =====================================================

        menu: (base) => ({
            ...base,

            marginTop: "4px",

            borderRadius: "6px",

            overflow: "hidden",

            fontSize: "11px",

            zIndex: 100,

            backgroundColor:
                isDark
                    ? "#1f1f2b"
                    : "#ffffff",

            border:
                isDark
                    ? "1px solid #303044"
                    : "1px solid #e5e7eb",

            boxShadow:
                isDark
                    ? "0 10px 25px rgba(0,0,0,0.35)"
                    : "0 8px 20px rgba(0,0,0,0.10)"
        }),


        // =====================================================
        // MENU LIST
        // =====================================================

        menuList: (base) => ({
            ...base,

            padding: "4px",

            backgroundColor:
                isDark
                    ? "#1f1f2b"
                    : "#ffffff"
        }),


        // =====================================================
        // OPTIONS
        // =====================================================

        option: (base, state) => ({

            ...base,

            fontSize: "11px",

            padding: "7px 9px",

            borderRadius: "4px",

            backgroundColor:

                state.isSelected

                    ? isDark
                        ? "#2563eb"
                        : "#eff6ff"

                    : state.isFocused

                        ? isDark
                            ? "#252536"
                            : "#f9fafb"

                        : isDark
                            ? "#1f1f2b"
                            : "#ffffff",

            color:

                state.isSelected

                    ? isDark
                        ? "#ffffff"
                        : "#2563eb"

                    : isDark
                        ? "#e5e7eb"
                        : "#374151",

            cursor: "pointer",

            "&:active": {

                backgroundColor:
                    isDark
                        ? "#1d4ed8"
                        : "#dbeafe"
            }
        })
    }


    // =====================================================
    // STATUS STYLE
    // =====================================================

    const getStatusStyle = (status) => {

        if (isDark) {

            switch (status) {

                case "Completed":

                    return {
                        background: "#052e16",
                        color: "#4ade80",
                        border: "#166534"
                    }

                case "Processing":

                    return {
                        background: "#172554",
                        color: "#60a5fa",
                        border: "#1e40af"
                    }

                case "Pending":

                    return {
                        background: "#431407",
                        color: "#fb923c",
                        border: "#9a3412"
                    }

                default:

                    return {
                        background: "#181824",
                        color: "#9ca3af",
                        border: "#3a3a4d"
                    }
            }
        }


        // =========================
        // LIGHT MODE
        // =========================

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


    // =====================================================
    // STATUS SELECT STYLES
    // =====================================================

    const getStatusSelectStyles = (statusStyle) => ({

        ...selectStyles,


        control: (base, state) => ({
            ...base,

            minHeight: "28px",
            height: "28px",

            borderRadius: "5px",

            borderColor:
                state.isFocused
                    ? "#3b82f6"
                    : isDark
                        ? "#3a3a4d"
                        : statusStyle.border,

            backgroundColor:
                isDark
                    ? "#181824"
                    : statusStyle.background,

            boxShadow:
                state.isFocused
                    ? "0 0 0 1px #3b82f6"
                    : "none",

            fontSize: "10px",

            cursor: "pointer",

            "&:hover": {
                borderColor: "#3b82f6"
            }
        }),


        singleValue: (base) => ({
            ...base,

            fontSize: "10px",

            fontWeight: 500,

            color:
                isDark
                    ? "#93c5fd"
                    : statusStyle.color
        }),


        valueContainer: (base) => ({
            ...base,

            padding: "0 7px"
        }),


        indicatorsContainer: (base) => ({
            ...base,

            height: "26px"
        }),


        dropdownIndicator: (base) => ({
            ...base,

            padding: "3px",

            color:
                isDark
                    ? "#9ca3af"
                    : statusStyle.color
        }),


        menu: (base) => ({
            ...base,

            backgroundColor:
                isDark
                    ? "#1f1f2b"
                    : "#ffffff",

            border:
                isDark
                    ? "1px solid #303044"
                    : "1px solid #e5e7eb",

            borderRadius: "6px",

            zIndex: 100,

            boxShadow:
                isDark
                    ? "0 10px 25px rgba(0,0,0,0.35)"
                    : "0 8px 20px rgba(0,0,0,0.10)"
        }),


        menuList: (base) => ({
            ...base,

            backgroundColor:
                isDark
                    ? "#1f1f2b"
                    : "#ffffff",

            padding: "4px"
        }),


        option: (base, state) => ({

            ...base,

            fontSize: "10px",

            padding: "6px 8px",

            borderRadius: "4px",

            backgroundColor:

                state.isSelected

                    ? isDark
                        ? "#2563eb"
                        : "#eff6ff"

                    : state.isFocused

                        ? isDark
                            ? "#252536"
                            : "#f9fafb"

                        : isDark
                            ? "#1f1f2b"
                            : "#ffffff",

            color:

                state.isSelected

                    ? "#ffffff"

                    : isDark
                        ? "#e5e7eb"
                        : "#374151",

            cursor: "pointer",

            "&:active": {

                backgroundColor:
                    isDark
                        ? "#1d4ed8"
                        : "#dbeafe"
            }
        })
    })


    return (

        <div className="
            mt-1
            w-full
        ">


            {/* =================================================
                FILTER BAR
            ================================================= */}

            <div className="
                bg-white
                dark:bg-[#1f1f2b]

                border
                border-gray-200
                dark:border-[#303044]

                rounded-lg

                p-3

                mb-1

                shadow-sm
                dark:shadow-black/20

                transition-colors
            ">

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                ">


                    {/* =================================================
                        SEARCH
                    ================================================= */}

                    <div className="
                        w-full
                        sm:w-52
                    ">

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
                                dark:border-[#3a3a4d]

                                rounded-md

                                bg-gray-50
                                dark:bg-[#181824]

                                text-[11px]

                                text-gray-700
                                dark:text-gray-200

                                placeholder:text-gray-400
                                dark:placeholder:text-gray-500

                                outline-none

                                focus:bg-white
                                dark:focus:bg-[#181824]

                                focus:border-blue-500

                                focus:ring-1
                                focus:ring-blue-500

                                dark:focus:ring-blue-500/20

                                transition-colors
                            "
                        />

                    </div>


                    {/* =================================================
                        PRIORITY
                    ================================================= */}

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
                                        selected?.value ||
                                        "All"
                                }))
                            }

                            isSearchable={false}

                            styles={selectStyles}

                            placeholder="Priority"

                            classNamePrefix="task-filter"
                        />

                    </div>


                    {/* =================================================
                        TASK STATUS
                    ================================================= */}

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
                                        selected?.value ||
                                        "All"
                                }))
                            }

                            isSearchable={false}

                            styles={selectStyles}

                            placeholder="Status"

                            classNamePrefix="task-filter"
                        />

                    </div>


                    {/* =================================================
                        RESET
                    ================================================= */}

                    <button
                        type="button"
                        onClick={handleReset}
                        className="
                            h-8

                            px-3

                            rounded-md

                            bg-gray-100
                            dark:bg-[#181824]

                            border
                            border-gray-200
                            dark:border-[#3a3a4d]

                            text-[11px]
                            font-medium

                            text-gray-600
                            dark:text-gray-300

                            hover:bg-gray-200
                            dark:hover:bg-[#252536]

                            transition
                        "
                    >
                        Reset Filter
                    </button>

                </div>

            </div>


            {/* =================================================
                TABLE
            ================================================= */}

            <div className="
                bg-white
                dark:bg-[#1f1f2b]

                border
                border-gray-200
                dark:border-[#303044]

                rounded-lg

                overflow-hidden

                shadow-sm
                dark:shadow-black/20

                transition-colors
            ">


                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="
                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    border-b
                    border-gray-100
                    dark:border-[#303044]
                ">

                    <div>

                        <h2 className="
                            text-sm
                            font-semibold

                            text-gray-900
                            dark:text-white
                        ">
                            My Tasks
                        </h2>

                        <p className="
                            text-[10px]

                            text-gray-400
                            dark:text-gray-500

                            mt-0.5
                        ">
                            Tasks assigned to you
                        </p>

                    </div>


                    {/* TASK COUNT */}

                    <span className="
                        px-2
                        py-1

                        rounded-md

                        bg-blue-50
                        dark:bg-blue-500/10

                        text-blue-600
                        dark:text-blue-400

                        text-[10px]
                        font-medium
                    ">
                        {filterData.length} Tasks
                    </span>

                </div>


                {/* =================================================
                    TABLE SCROLL
                ================================================= */}

                <div className="
                    overflow-x-auto
                ">

                    <table className="
                        w-full
                        border-collapse
                    ">


                        {/* =================================================
                            TABLE HEADER
                        ================================================= */}

                        <thead>

                            <tr className="
                                bg-gray-50
                                dark:bg-[#181824]

                                border-b
                                border-gray-100
                                dark:border-[#303044]
                            ">

                                {/* # */}

                                <th className="
                                    px-3
                                    py-2.5

                                    text-center

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide

                                    w-12
                                ">
                                    #
                                </th>


                                {/* TASK TITLE */}

                                <th className="
                                    px-4
                                    py-2.5

                                    text-left

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide
                                ">
                                    Task Title
                                </th>


                                {/* RELATED LEAD */}

                                <th className="
                                    px-4
                                    py-2.5

                                    text-left

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide
                                ">
                                    Related Lead
                                </th>


                                {/* PRIORITY */}

                                <th className="
                                    px-4
                                    py-2.5

                                    text-left

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide
                                ">
                                    Priority
                                </th>


                                {/* STATUS */}

                                <th className="
                                    px-4
                                    py-2.5

                                    text-left

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide
                                ">
                                    Status
                                </th>

                            </tr>

                        </thead>


                        {/* =================================================
                            TABLE BODY
                        ================================================= */}

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
                                            dark:text-gray-400
                                        ">
                                            No Tasks Found
                                        </p>

                                        <p className="
                                            text-[10px]

                                            text-gray-400
                                            dark:text-gray-500

                                            mt-1
                                        ">
                                            Try changing your filters
                                        </p>

                                    </td>

                                </tr>

                            ) : (

                                filterData.map(
                                    (task, index) => {

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
                                                    dark:border-[#303044]

                                                    last:border-b-0

                                                    hover:bg-gray-50
                                                    dark:hover:bg-[#252536]

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
                                                        dark:text-gray-500
                                                    ">
                                                        {index + 1}
                                                    </span>

                                                </td>


                                                {/* TASK TITLE */}

                                                <td className="
                                                    px-4
                                                    py-2.5
                                                ">

                                                    <p className="
                                                        text-[11px]
                                                        font-medium

                                                        text-gray-800
                                                        dark:text-gray-200

                                                        max-w-[250px]

                                                        truncate
                                                    ">
                                                        {task.title}
                                                    </p>

                                                </td>


                                                {/* RELATED LEAD */}

                                                <td className="
                                                    px-4
                                                    py-2.5
                                                ">

                                                    <p className="
                                                        text-[10px]

                                                        text-gray-600
                                                        dark:text-gray-400

                                                        max-w-[180px]

                                                        truncate
                                                    ">
                                                        {task.lead || "-"}
                                                    </p>

                                                </td>


                                                {/* PRIORITY */}

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

                                                                    ? `
                                                                        bg-red-50
                                                                        text-red-600
                                                                        border-red-100

                                                                        dark:bg-red-500/10
                                                                        dark:text-red-400
                                                                        dark:border-red-500/20
                                                                    `

                                                                    : task.priority ===
                                                                        "Medium"

                                                                        ? `
                                                                            bg-orange-50
                                                                            text-orange-600
                                                                            border-orange-100

                                                                            dark:bg-orange-500/10
                                                                            dark:text-orange-400
                                                                            dark:border-orange-500/20
                                                                        `

                                                                        : task.priority ===
                                                                            "Low"

                                                                            ? `
                                                                                bg-green-50
                                                                                text-green-600
                                                                                border-green-100

                                                                                dark:bg-green-500/10
                                                                                dark:text-green-400
                                                                                dark:border-green-500/20
                                                                            `

                                                                            : `
                                                                                bg-gray-50
                                                                                text-gray-500
                                                                                border-gray-200

                                                                                dark:bg-gray-700/30
                                                                                dark:text-gray-400
                                                                                dark:border-gray-600
                                                                            `
                                                            }
                                                        `}
                                                    >
                                                        {task.priority}
                                                    </span>

                                                </td>


                                                {/* STATUS */}

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

                                                        styles={
                                                            getStatusSelectStyles(
                                                                statusStyle
                                                            )
                                                        }

                                                        placeholder="Status"

                                                        classNamePrefix="status-select"
                                                    />

                                                </td>

                                            </tr>

                                        )
                                    }
                                )

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default UserTaskTable