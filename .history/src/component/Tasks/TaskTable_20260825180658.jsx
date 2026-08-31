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


    /* =================================================
       FILTER DATA
    ================================================= */

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
                .includes(
                    filters.searchTask.toLowerCase()
                )

        return (
            statusMatch &&
            priorityMatch &&
            searchMatch
        )
    })


    /* =================================================
       DELETE
    ================================================= */

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


    /* =================================================
       UPDATE
    ================================================= */

    const handleUpdate = (task) => {

        setEditedTask(task)

        setOpen(!open)
    }


    /* =================================================
       RESET
    ================================================= */

    const handleReset = () => {

        setFilters({
            taskStatus: "All",
            priority: "All",
            searchTask: ""
        })
    }


    /* =================================================
       STATUS OPTIONS
    ================================================= */

    const taskStatusOptions = [
        {
            value: "All",
            label: "All Status"
        },
        {
            value: "Pending",
            label: "Pending"
        },
        {
            value: "Processing",
            label: "Processing"
        },
        {
            value: "Completed",
            label: "Completed"
        }
    ]


    /* =================================================
       PRIORITY OPTIONS
    ================================================= */

    const priorityOptions = [
        {
            value: "All",
            label: "All Priority"
        },
        {
            value: "High",
            label: "High"
        },
        {
            value: "Medium",
            label: "Medium"
        },
        {
            value: "Low",
            label: "Low"
        }
    ]


    /* =================================================
       STATUS BADGE STYLE
    ================================================= */

    const statusStyle = {

        Pending:
            `
                bg-yellow-50
                text-yellow-600
                border-yellow-100

                dark:bg-yellow-500/10
                dark:text-yellow-400
                dark:border-yellow-500/20
            `,

        Processing:
            `
                bg-blue-50
                text-blue-600
                border-blue-100

                dark:bg-blue-500/10
                dark:text-blue-400
                dark:border-blue-500/20
            `,

        Completed:
            `
                bg-green-50
                text-green-600
                border-green-100

                dark:bg-green-500/10
                dark:text-green-400
                dark:border-green-500/20
            `
    }


    /* =================================================
       PRIORITY BADGE STYLE
    ================================================= */

    const priorityStyle = {

        High:
            `
                bg-red-50
                text-red-600
                border-red-100

                dark:bg-red-500/10
                dark:text-red-400
                dark:border-red-500/20
            `,

        Medium:
            `
                bg-orange-50
                text-orange-600
                border-orange-100

                dark:bg-orange-500/10
                dark:text-orange-400
                dark:border-orange-500/20
            `,

        Low:
            `
                bg-gray-50
                text-gray-600
                border-gray-100

                dark:bg-gray-700/30
                dark:text-gray-400
                dark:border-gray-600
            `
    }


    /* =================================================
       REACT SELECT DARK MODE STYLE
    ================================================= */

    const selectStyles = {

        /* ================= CONTROL ================= */

        control: (base, state) => ({
            ...base,

            minHeight: "30px",
            height: "30px",

            borderRadius: "6px",

            borderColor:
                state.isFocused
                    ? "#3b82f6"
                    : "#3a3a4d",

            boxShadow: "none",

            fontSize: "11px",

            backgroundColor: "#181824",

            color: "#e5e7eb",

            cursor: "pointer",

            "&:hover": {
                borderColor: "#4b5563"
            }
        }),


        /* ================= VALUE ================= */

        valueContainer: (base) => ({
            ...base,

            padding: "0 8px"
        }),


        /* ================= INDICATORS ================= */

        indicatorsContainer: (base) => ({
            ...base,

            height: "30px"
        }),


        /* ================= DROPDOWN ICON ================= */

        dropdownIndicator: (base) => ({
            ...base,

            padding: "4px",

            color: "#9ca3af",

            "&:hover": {
                color: "#e5e7eb"
            }
        }),


        /* ================= CLEAR ICON ================= */

        clearIndicator: (base) => ({
            ...base,

            padding: "4px",

            color: "#9ca3af",

            "&:hover": {
                color: "#e5e7eb"
            }
        }),


        /* ================= SEPARATOR ================= */

        indicatorSeparator: (base) => ({
            ...base,

            backgroundColor: "#3a3a4d"
        }),


        /* ================= SELECTED VALUE ================= */

        singleValue: (base) => ({
            ...base,

            color: "#e5e7eb"
        }),


        /* ================= PLACEHOLDER ================= */

        placeholder: (base) => ({
            ...base,

            color: "#6b7280"
        }),


        /* ================= INPUT ================= */

        input: (base) => ({
            ...base,

            color: "#e5e7eb"
        }),


        /* ================= OPTIONS ================= */

        option: (base, state) => ({

            ...base,

            fontSize: "11px",

            padding: "7px 9px",

            cursor: "pointer",

            backgroundColor:
                state.isSelected
                    ? "#2563eb"
                    : state.isFocused
                        ? "#252536"
                        : "#1f1f2b",

            color:
                state.isSelected
                    ? "#ffffff"
                    : "#e5e7eb",

            "&:active": {
                backgroundColor: "#1d4ed8"
            }
        }),


        /* ================= MENU ================= */

        menu: (base) => ({

            ...base,

            zIndex: 50,

            backgroundColor: "#1f1f2b",

            border:
                "1px solid #303044",

            borderRadius: "6px",

            overflow: "hidden",

            boxShadow:
                "0 10px 25px rgba(0,0,0,0.35)"
        }),


        /* ================= MENU LIST ================= */

        menuList: (base) => ({

            ...base,

            backgroundColor: "#1f1f2b",

            padding: "4px"
        })
    }


    return (

        <div className="
            w-full
            min-w-0
        ">


            {/* =================================================
                FILTERS
            ================================================= */}

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

                shadow-sm
                dark:shadow-black/20

                transition-colors
            ">


                {/* =================================================
                    FILTER CONTROLS
                ================================================= */}

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-2

                    w-full
                    sm:w-auto
                ">


                    {/* =================================================
                        SEARCH
                    ================================================= */}

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
                                    searchTask:
                                        e.target.value
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


                    {/* =================================================
                        PRIORITY
                    ================================================= */}

                    <div className="
                        w-[calc(50%-4px)]
                        sm:w-32
                    ">

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

                            styles={selectStyles}

                            isSearchable={false}

                            className="text-[11px]"
                        />

                    </div>


                    {/* =================================================
                        STATUS
                    ================================================= */}

                    <div className="
                        w-[calc(50%-4px)]
                        sm:w-36
                    ">

                        <Select
                            options={taskStatusOptions}

                            value={
                                taskStatusOptions.find(
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

                            styles={selectStyles}

                            isSearchable={false}

                            className="text-[11px]"
                        />

                    </div>


                    {/* =================================================
                        RESET
                    ================================================= */}

                    <button
                        type="button"
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


                {/* =================================================
                    COUNT
                ================================================= */}

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


            {/* =================================================
                TABLE
            ================================================= */}

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


                {/* Horizontal Scroll */}

                <div className="
                    w-full
                    overflow-x-auto
                ">


                    <table className="
                        w-full
                        min-w-[720px]
                        border-collapse
                    ">


                        {/* =================================================
                            TABLE HEADER
                        ================================================= */}

                        <thead className="
                            bg-gray-50
                            dark:bg-[#181824]

                            border-b
                            border-gray-200
                            dark:border-[#303044]
                        ">

                            <tr>


                                {/* # */}

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


                                {/* TASK TITLE */}

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


                                {/* RELATED LEAD */}

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


                                {/* ASSIGNED */}

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


                                {/* PRIORITY */}

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


                                {/* STATUS */}

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


                                {/* ACTIONS */}

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


                        {/* =================================================
                            TABLE BODY
                        ================================================= */}

                        <tbody>


                            {/* NO DATA */}

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


                                /* =================================================
                                   TASK ROWS
                                ================================================= */

                                filterData.map(
                                    (task, index) => (

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

                                                transition
                                            "
                                        >


                                            {/* NUMBER */}

                                            <td className="
                                                px-3
                                                py-2

                                                text-[10px]

                                                text-gray-400
                                                dark:text-gray-500
                                            ">
                                                {index + 1}
                                            </td>


                                            {/* TASK TITLE */}

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


                                            {/* RELATED LEAD */}

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


                                            {/* ASSIGNED TO */}

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


                                            {/* PRIORITY */}

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

                                                        ${
                                                            priorityStyle[
                                                                task.priority
                                                            ] ||

                                                            `
                                                                bg-gray-50
                                                                text-gray-500
                                                                border-gray-100

                                                                dark:bg-gray-700/30
                                                                dark:text-gray-400
                                                                dark:border-gray-600
                                                            `
                                                        }
                                                    `}
                                                >
                                                    {
                                                        task.priority ||
                                                        "-"
                                                    }
                                                </span>

                                            </td>


                                            {/* STATUS */}

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

                                                        ${
                                                            statusStyle[
                                                                task.taskStatus
                                                            ] ||

                                                            `
                                                                bg-gray-50
                                                                text-gray-500
                                                                border-gray-100

                                                                dark:bg-gray-700/30
                                                                dark:text-gray-400
                                                                dark:border-gray-600
                                                            `
                                                        }
                                                    `}
                                                >
                                                    {
                                                        task.taskStatus ||
                                                        "-"
                                                    }
                                                </span>

                                            </td>


                                            {/* ACTIONS */}

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


                                                    {/* EDIT */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleUpdate(
                                                                task
                                                            )
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


                                                    {/* DELETE */}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleDelete(
                                                                task.id
                                                            )
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

                                    )
                                )

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default TaskTable