import React, { useContext, useState } from "react"
import Select from "react-select"
import { MdDeleteOutline } from "react-icons/md"
import { HiPencilSquare } from "react-icons/hi2"
import { FiSearch, FiRotateCcw } from "react-icons/fi"
import { EmployeeContext } from "../../ContextAPI/EmployeeContext"
import DeleteEmployee from "./DeleteEmployee"
import { ThemeContext } from "../../ContextAPI/ThemeContext"

const EmployeeTable = () => {

    const {
        setEditedEmp,
        open,
        setOpen
    } = useContext(EmployeeContext)

    const { theme } = useContext(ThemeContext)

    const [deleteModelOpen, setDeleteModelOpen] = useState(false)
    const [deletedEmp, setDeletedEmp] = useState(null)

    const [filters, setFilters] = useState({
        department: null,
        role: null,
        employeeName: ""
    })

    const employee =
        JSON.parse(localStorage.getItem("employee")) || []


    // ================= OPTIONS =================

    const departmentOptions = [
        { value: "Sales", label: "Sales" },
        { value: "Marketing", label: "Marketing" },
        { value: "Support", label: "Support" }
    ]

    const roleOptions = [
        { value: "Sales Executive", label: "Sales Executive" },
        { value: "Sales Manager", label: "Sales Manager" },
        { value: "Digital Marketer", label: "Digital Marketer" },
        { value: "Marketing Executive", label: "Marketing Executive" },
        { value: "Support Executive", label: "Support Executive" }
    ]


    // ================= FILTER =================

    const filterData = employee.filter((emp) => {

        if (emp.isAdmin) return false

        const department =
            !filters.department ||
            emp.department === filters.department.value

        const role =
            !filters.role ||
            emp.role === filters.role.value

        const employeeName =
            filters.employeeName === "" ||
            emp.name
                ?.toLowerCase()
                .includes(filters.employeeName.toLowerCase())

        return department && role && employeeName
    })


    const handleReset = () => {

        setFilters({
            department: null,
            role: null,
            employeeName: ""
        })
    }


    const handleDelete = (id) => {
        setDeletedEmp(id)
        setDeleteModelOpen(true)
    }


    const handleUpdate = (emp) => {
        setEditedEmp(emp)
        setOpen(!open)
    }


    const statusStyle = {
        Active:
            "bg-green-50 text-green-600 border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20",

        Inactive:
            "bg-red-50 text-red-500 border-red-100 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20"
    }


    // ================= SELECT STYLE =================

    const selectStyles = {

        control: (base, state) => ({
            ...base,

            minHeight: "32px",

            borderColor:
                state.isFocused
                    ? "#3b82f6"
                    : theme === "dark"
                        ? "#45455A"
                        : "#e5e7eb",

            borderRadius: "6px",

            boxShadow:
                state.isFocused
                    ? "0 0 0 1px #3b82f6"
                    : "none",

            fontSize: "11px",

            backgroundColor:
                theme === "dark"
                    ? "#2A2A40"
                    : "#fff",

            cursor: "pointer",

            "&:hover": {
                borderColor:
                    theme === "dark"
                        ? "#55556B"
                        : "#d1d5db"
            }
        }),

        valueContainer: (base) => ({
            ...base,
            padding: "0 9px"
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "30px"
        }),

        dropdownIndicator: (base) => ({
            ...base,
            padding: "4px",
            color:
                theme === "dark"
                    ? "#9ca3af"
                    : "#6b7280"
        }),

        clearIndicator: (base) => ({
            ...base,
            padding: "4px",
            color:
                theme === "dark"
                    ? "#9ca3af"
                    : "#6b7280"
        }),

        indicatorSeparator: () => ({
            display: "none"
        }),

        placeholder: (base) => ({
            ...base,
            fontSize: "11px",
            color:
                theme === "dark"
                    ? "#9ca3af"
                    : "#9ca3af"
        }),

        singleValue: (base) => ({
            ...base,
            fontSize: "11px",
            color:
                theme === "dark"
                    ? "#e5e7eb"
                    : "#4b5563"
        }),

        option: (base, state) => ({
            ...base,

            fontSize: "11px",
            padding: "8px 9px",

            backgroundColor:
                state.isSelected
                    ? theme === "dark"
                        ? "#1d4ed8"
                        : "#eff6ff"
                    : state.isFocused
                        ? theme === "dark"
                            ? "#353548"
                            : "#f9fafb"
                        : theme === "dark"
                            ? "#2A2A40"
                            : "#ffffff",

            color:
                state.isSelected
                    ? "#ffffff"
                    : theme === "dark"
                        ? "#e5e7eb"
                        : "#374151",

            cursor: "pointer"
        }),

        menu: (base) => ({
            ...base,
            zIndex: 50,
            borderRadius: "6px",
            overflow: "hidden",
            backgroundColor:
                theme === "dark"
                    ? "#2A2A40"
                    : "#ffffff"
        })
    }


    return (
        <div className="mt-3 w-full">

            {/* ================================================= */}
            {/* FILTERS */}
            {/* ================================================= */}

            <div className="
                bg-white
                dark:bg-[#1F1F30]

                border
                border-gray-200
                dark:border-[#353548]

                rounded-lg
                shadow-sm
                p-2.5
                sm:p-3
            ">

                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:flex
                    lg:flex-wrap
                    items-center
                    gap-2
                ">


                    {/* SEARCH */}

                    <div className="
                        relative
                        w-full
                        sm:col-span-2
                        lg:col-span-auto
                        lg:w-52
                    ">

                        <FiSearch className="
                            absolute
                            left-2.5
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                            w-3.5
                            h-3.5
                            pointer-events-none
                        " />

                        <input
                            type="text"
                            name="employeeName"
                            value={filters.employeeName}
                            onChange={(e) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    employeeName:
                                        e.target.value
                                }))
                            }
                            placeholder="Search employee..."
                            className="
                                w-full
                                h-8

                                border
                                border-gray-200
                                dark:border-[#45455A]

                                rounded-md
                                pl-8
                                pr-3

                                text-[11px]

                                text-gray-700
                                dark:text-gray-200

                                bg-white
                                dark:bg-[#2A2A40]

                                outline-none

                                placeholder:text-gray-400

                                focus:border-blue-400
                                focus:ring-1
                                focus:ring-blue-100
                                dark:focus:ring-blue-900
                            "
                        />

                    </div>


                    {/* DEPARTMENT */}

                    <div className="
                        w-full
                        sm:w-full
                        lg:w-40
                    ">

                        <Select
                            options={departmentOptions}
                            value={filters.department}
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    department: selected
                                }))
                            }
                            placeholder="Department"
                            isClearable
                            isSearchable={false}
                            styles={selectStyles}
                        />

                    </div>


                    {/* ROLE */}

                    <div className="
                        w-full
                        sm:w-full
                        lg:w-44
                    ">

                        <Select
                            options={roleOptions}
                            value={filters.role}
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    role: selected
                                }))
                            }
                            placeholder="Role"
                            isClearable
                            isSearchable={false}
                            styles={selectStyles}
                        />

                    </div>


                    {/* RESET */}

                    <button
                        onClick={handleReset}
                        className="
                            w-full
                            sm:w-auto
                            h-8
                            px-3

                            flex
                            items-center
                            justify-center
                            gap-1.5

                            rounded-md

                            border
                            border-gray-200
                            dark:border-[#45455A]

                            bg-white
                            dark:bg-[#2A2A40]

                            text-[10px]
                            font-medium

                            text-gray-600
                            dark:text-gray-300

                            hover:bg-gray-50
                            dark:hover:bg-[#353548]

                            active:bg-gray-100
                            dark:active:bg-[#404057]

                            transition
                        "
                    >

                        <FiRotateCcw className="w-3 h-3" />

                        <span>
                            Reset
                        </span>

                    </button>

                </div>

            </div>


            {/* ================================================= */}
            {/* TABLE CONTAINER */}
            {/* ================================================= */}

            <div className="
                mt-2

                bg-white
                dark:bg-[#1F1F30]

                border
                border-gray-200
                dark:border-[#353548]

                rounded-lg
                shadow-sm
                overflow-hidden
            ">

                {/* Mobile hint */}

                <div className="
                    flex
                    sm:hidden
                    items-center
                    justify-between

                    px-3
                    py-2

                    bg-gray-50
                    dark:bg-[#2A2A40]

                    border-b
                    border-gray-100
                    dark:border-[#353548]
                ">

                    <p className="
                        text-[9px]
                        text-gray-400
                    ">
                        Employee List
                    </p>

                    <p className="
                        text-[9px]
                        text-gray-400
                    ">
                        Swipe to view →
                    </p>

                </div>


                {/* Horizontal scroll */}

                <div className="
                    overflow-x-auto
                    overscroll-x-contain
                    scrollbar-thin
                ">

                    <table className="
                        w-full
                        min-w-[850px]
                        border-collapse
                    ">

                        {/* HEADER */}

                        <thead>

                            <tr className="
                                bg-gray-50
                                dark:bg-[#2A2A40]

                                border-b
                                border-gray-200
                                dark:border-[#353548]
                            ">

                                <th className="
                                    min-w-[190px]
                                    px-3
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-300

                                    whitespace-nowrap
                                ">
                                    Employee
                                </th>

                                <th className="
                                    min-w-[120px]
                                    px-3
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-300

                                    whitespace-nowrap
                                ">
                                    Department
                                </th>

                                <th className="
                                    min-w-[170px]
                                    px-3
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-300

                                    whitespace-nowrap
                                ">
                                    Role
                                </th>

                                <th className="
                                    min-w-[120px]
                                    px-3
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-300

                                    whitespace-nowrap
                                ">
                                    Phone
                                </th>

                                <th className="
                                    min-w-[100px]
                                    px-3
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-300

                                    whitespace-nowrap
                                ">
                                    Status
                                </th>

                                <th className="
                                    min-w-[110px]
                                    px-3
                                    py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-300

                                    whitespace-nowrap
                                ">
                                    Join Date
                                </th>

                                <th className="
                                    min-w-[90px]
                                    px-3
                                    py-2.5
                                    text-center
                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-300

                                    whitespace-nowrap
                                ">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        {/* BODY */}

                        <tbody>

                            {filterData.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="py-10 text-center"
                                    >

                                        <p className="
                                            text-xs
                                            font-medium
                                            text-gray-500
                                            dark:text-gray-300
                                        ">
                                            No employees found
                                        </p>

                                        <p className="
                                            text-[9px]
                                            text-gray-400
                                            mt-1
                                        ">
                                            Try changing your filters
                                        </p>

                                    </td>

                                </tr>

                            ) : (

                                filterData.map((curr, index) => (

                                    <tr
                                        key={curr.id || index}
                                        className="
                                            border-b
                                            border-gray-100
                                            dark:border-[#353548]

                                            last:border-0

                                            hover:bg-gray-50
                                            dark:hover:bg-[#2A2A40]

                                            transition-colors
                                        "
                                    >

                                        {/* EMPLOYEE */}

                                        <td className="
                                            px-3
                                            py-2.5
                                        ">

                                            <div className="
                                                flex
                                                items-center
                                                gap-2
                                            ">

                                                <div className="
                                                    w-8
                                                    h-8
                                                    rounded-full

                                                    bg-blue-50
                                                    dark:bg-blue-500/10

                                                    text-blue-600
                                                    dark:text-blue-400

                                                    flex
                                                    items-center
                                                    justify-center

                                                    text-[10px]
                                                    font-semibold
                                                    shrink-0
                                                ">
                                                    {curr.name
                                                        ?.charAt(0)
                                                        ?.toUpperCase()}
                                                </div>

                                                <div className="min-w-0">

                                                    <p className="
                                                        text-[10px]
                                                        font-medium

                                                        text-gray-800
                                                        dark:text-gray-100

                                                        truncate
                                                        max-w-[130px]
                                                    ">
                                                        {curr.name}
                                                    </p>

                                                    <p className="
                                                        text-[8px]
                                                        text-gray-400
                                                        truncate
                                                        max-w-[130px]
                                                        mt-0.5
                                                    ">
                                                        {curr.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>


                                        {/* DEPARTMENT */}

                                        <td className="
                                            px-3
                                            py-2.5
                                            text-[10px]

                                            text-gray-600
                                            dark:text-gray-300

                                            whitespace-nowrap
                                        ">
                                            {curr.department}
                                        </td>


                                        {/* ROLE */}

                                        <td className="
                                            px-3
                                            py-2.5
                                            text-[10px]

                                            text-gray-600
                                            dark:text-gray-300

                                            whitespace-nowrap
                                        ">
                                            {curr.role}
                                        </td>


                                        {/* PHONE */}

                                        <td className="
                                            px-3
                                            py-2.5
                                            text-[10px]

                                            text-gray-600
                                            dark:text-gray-300

                                            whitespace-nowrap
                                        ">
                                            {curr.phone}
                                        </td>


                                        {/* STATUS */}

                                        <td className="px-3 py-2.5">

                                            <span
                                                className={`
                                                    inline-flex
                                                    items-center
                                                    px-2
                                                    py-1
                                                    rounded-md
                                                    border
                                                    text-[9px]
                                                    font-medium
                                                    whitespace-nowrap

                                                    ${
                                                        statusStyle[
                                                            curr.status
                                                        ] ||
                                                        "bg-gray-50 text-gray-500 border-gray-100 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20"
                                                    }
                                                `}
                                            >
                                                {curr.status}
                                            </span>

                                        </td>


                                        {/* JOIN DATE */}

                                        <td className="
                                            px-3
                                            py-2.5
                                            text-[10px]

                                            text-gray-500
                                            dark:text-gray-400

                                            whitespace-nowrap
                                        ">
                                            {curr.date || "-"}
                                        </td>


                                        {/* ACTIONS */}

                                        <td className="px-3 py-2.5">

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
                                                        handleUpdate(curr)
                                                    }
                                                    className="
                                                        w-8
                                                        h-8

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

                                                        active:bg-blue-200

                                                        transition
                                                    "
                                                >
                                                    <HiPencilSquare className="
                                                        w-3.5
                                                        h-3.5
                                                    " />
                                                </button>


                                                {/* DELETE */}

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDelete(
                                                            curr.id
                                                        )
                                                    }
                                                    className="
                                                        w-8
                                                        h-8

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

                                                        active:bg-red-200

                                                        transition
                                                    "
                                                >
                                                    <MdDeleteOutline className="
                                                        w-4
                                                        h-4
                                                    " />
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


            {/* DELETE MODAL */}

            <DeleteEmployee
                setDeleteModelOpen={setDeleteModelOpen}
                deleteModelOpen={deleteModelOpen}
                deletedEmp={deletedEmp}
                setDeletedEmp={setDeletedEmp}
            />

        </div>
    )
}

export default EmployeeTable