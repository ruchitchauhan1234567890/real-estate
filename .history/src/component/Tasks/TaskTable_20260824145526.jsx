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
            "bg-yellow-50 text-yellow-600 border-yellow-100",

        Processing:
            "bg-blue-50 text-blue-600 border-blue-100",

        Completed:
            "bg-green-50 text-green-600 border-green-100"
    }

    const priorityStyle = {
        High:
            "bg-red-50 text-red-600 border-red-100",

        Medium:
            "bg-orange-50 text-orange-600 border-orange-100",

        Low:
            "bg-gray-50 text-gray-600 border-gray-100"
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
        <div className="w-full">

            {/* Filters */}
            <div className="
                flex
                items-center
                justify-between
                gap-2
                bg-white
                border
                border-gray-200
                rounded-lg
                px-3
                py-2
                mb-2
            ">

                <div className="flex items-center gap-2 mt-1">

                    {/* Search */}
                    <div className="relative">

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
                                w-52
                                h-[30px]
                                rounded-md
                                border
                                border-gray-200
                                px-3
                                text-[11px]
                                text-gray-700
                                outline-none
                                placeholder:text-gray-400
                                focus:border-blue-300
                                focus:ring-1
                                focus:ring-blue-100
                            "
                        />

                    </div>

                    {/* Priority */}
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
                        className="w-32"
                    />

                    {/* Status */}
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
                        className="w-36"
                    />

                    {/* Reset */}
                    <button
                        onClick={handleReset}
                        className="
                            h-[30px]
                            px-3
                            rounded-md
                            border
                            border-gray-200
                            bg-gray-50
                            text-[11px]
                            font-medium
                            text-gray-600
                            hover:bg-gray-100
                            transition
                        "
                    >
                        Reset
                    </button>

                </div>

                {/* Count */}
                <p className="text-[10px] text-gray-400">
                    {filterData.length} Tasks
                </p>

            </div>


            {/* Table */}
            <div className="
                w-full
                overflow-hidden
                bg-white
                border
                border-gray-200
                rounded-lg
                shadow-sm
            ">

                <div className="overflow-x-auto">

                    <table className="w-full border-collapse">

                        {/* Header */}
                        <thead className="bg-gray-50 border-b border-gray-200">

                            <tr>

                                <th className="
                                    px-3 py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    #
                                </th>

                                <th className="
                                    px-3 py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Task Title
                                </th>

                                <th className="
                                    px-3 py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Related Lead
                                </th>

                                <th className="
                                    px-3 py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Assigned To
                                </th>

                                <th className="
                                    px-3 py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Priority
                                </th>

                                <th className="
                                    px-3 py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Status
                                </th>

                                <th className="
                                    px-3 py-2
                                    text-center
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
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
                                            last:border-b-0
                                            hover:bg-gray-50
                                            transition
                                        "
                                    >

                                        {/* Number */}
                                        <td className="
                                            px-3 py-2
                                            text-[10px]
                                            text-gray-400
                                        ">
                                            {index + 1}
                                        </td>


                                        {/* Title */}
                                        <td className="
                                            px-3 py-2
                                            max-w-[200px]
                                        ">
                                            <p className="
                                                text-[10px]
                                                font-medium
                                                text-gray-800
                                                truncate
                                            ">
                                                {task.title}
                                            </p>
                                        </td>


                                        {/* Lead */}
                                        <td className="
                                            px-3 py-2
                                            text-[10px]
                                            text-gray-500
                                        ">
                                            {task.lead || "-"}
                                        </td>


                                        {/* Assigned */}
                                        <td className="
                                            px-3 py-2
                                            text-[10px]
                                            text-gray-500
                                        ">
                                            {task.assign || "-"}
                                        </td>


                                        {/* Priority */}
                                        <td className="px-3 py-2">

                                            <span
                                                className={`
                                                    inline-flex
                                                    px-2
                                                    py-0.5
                                                    rounded
                                                    border
                                                    text-[8px]
                                                    font-medium
                                                    ${priorityStyle[task.priority] ||
                                                    "bg-gray-50 text-gray-500 border-gray-100"}
                                                `}
                                            >
                                                {task.priority || "-"}
                                            </span>

                                        </td>


                                        {/* Status */}
                                        <td className="px-3 py-2">

                                            <span
                                                className={`
                                                    inline-flex
                                                    px-2
                                                    py-0.5
                                                    rounded
                                                    border
                                                    text-[8px]
                                                    font-medium
                                                    ${statusStyle[task.taskStatus] ||
                                                    "bg-gray-50 text-gray-500 border-gray-100"}
                                                `}
                                            >
                                                {task.taskStatus || "-"}
                                            </span>

                                        </td>


                                        {/* Actions */}
                                        <td className="px-3 py-2">

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
                                                        p-1.5
                                                        rounded-md
                                                        bg-blue-50
                                                        text-blue-600
                                                        hover:bg-blue-100
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
                                                        p-1.5
                                                        rounded-md
                                                        bg-red-50
                                                        text-red-500
                                                        hover:bg-red-100
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