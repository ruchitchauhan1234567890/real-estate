import React, { useContext, useState } from "react"
import Select from "react-select"
import { MdDeleteOutline } from "react-icons/md"
import { HiPencilSquare } from "react-icons/hi2"
import { FiSearch, FiRotateCcw } from "react-icons/fi"
import { EmployeeContext } from "../../ContextAPI/EmployeeContext"
import DeleteEmployee from "./DeleteEmployee"

const EmployeeTable = () => {

    const {
        setEditedEmp,
        open,
        setOpen
    } = useContext(EmployeeContext)

    const [deleteModelOpen, setDeleteModelOpen] = useState(false)
    const [deletedEmp, setDeletedEmp] = useState(null)

    const [filters, setFilters] = useState({
        department: null,
        role: null,
        employeeName: ""
    })

    const employee =
        JSON.parse(localStorage.getItem("employee")) || []


    // Department options
    const departmentOptions = [
        { value: "Sales", label: "Sales" },
        { value: "Marketing", label: "Marketing" },
        { value: "Support", label: "Support" }
    ]

    // Role options
    const roleOptions = [
        { value: "Sales Executive", label: "Sales Executive" },
        { value: "Sales Manager", label: "Sales Manager" },
        { value: "Digital Marketer", label: "Digital Marketer" },
        { value: "Marketing Executive", label: "Marketing Executive" },
        { value: "Support Executive", label: "Support Executive" }
    ]


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
        Active: "bg-green-50 text-green-600 border-green-100",
        Inactive: "bg-red-50 text-red-500 border-red-100"
    }


    return (
        <div className="mt-2">

            {/* ================= FILTERS ================= */}
            <div className="
                bg-white
                border
                border-gray-200
                rounded-lg
                shadow-sm
                p-2
            ">

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                ">

                    {/* Search */}
                    <div className="
                        relative
                        w-full
                        sm:w-52
                    ">

                        <FiSearch className="
                            absolute
                            left-2.5
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                            w-3.5
                            h-3.5
                        " />

                        <input
                            type="text"
                            name="employeeName"
                            value={filters.employeeName}
                            onChange={(e) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    employeeName: e.target.value
                                }))
                            }
                            placeholder="Search employee..."
                            className="
                                w-full
                                border
                                border-gray-200
                                rounded-md
                                pl-8
                                pr-2
                                py-1.5
                                text-[11px]
                                text-gray-700
                                outline-none
                                focus:border-blue-400
                                focus:ring-1
                                focus:ring-blue-100
                            "
                        />

                    </div>


                    {/* Department */}
                    <div className="w-40">

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
                            className="text-[11px]"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minHeight: "30px",
                                    height: "30px",
                                    borderColor: "#e5e7eb",
                                    borderRadius: "6px",
                                    boxShadow: "none",
                                    fontSize: "11px"
                                }),
                                valueContainer: (base) => ({
                                    ...base,
                                    padding: "0 8px"
                                }),
                                indicatorsContainer: (base) => ({
                                    ...base,
                                    height: "30px"
                                }),
                                option: (base) => ({
                                    ...base,
                                    fontSize: "11px"
                                }),
                                menu: (base) => ({
                                    ...base,
                                    zIndex: 20
                                })
                            }}
                        />

                    </div>


                    {/* Role */}
                    <div className="w-44">

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
                            className="text-[11px]"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minHeight: "30px",
                                    height: "30px",
                                    borderColor: "#e5e7eb",
                                    borderRadius: "6px",
                                    boxShadow: "none",
                                    fontSize: "11px"
                                }),
                                valueContainer: (base) => ({
                                    ...base,
                                    padding: "0 8px"
                                }),
                                indicatorsContainer: (base) => ({
                                    ...base,
                                    height: "30px"
                                }),
                                option: (base) => ({
                                    ...base,
                                    fontSize: "11px"
                                }),
                                menu: (base) => ({
                                    ...base,
                                    zIndex: 20
                                })
                            }}
                        />

                    </div>


                    {/* Reset */}
                    <button
                        onClick={handleReset}
                        className="
                            flex
                            items-center
                            gap-1
                            px-2.5
                            py-1.5
                            rounded-md
                            border
                            border-gray-200
                            bg-white
                            text-[10px]
                            font-medium
                            text-gray-600
                            hover:bg-gray-50
                            transition
                        "
                    >
                        <FiRotateCcw className="w-3 h-3" />
                        Reset
                    </button>

                </div>

            </div>


            {/* ================= TABLE ================= */}
            <div className="
                mt-2
                bg-white
                border
                border-gray-200
                rounded-lg
                shadow-sm
                overflow-hidden
            ">

                <div className="overflow-x-auto">

                    <table className="w-full border-collapse">

                        {/* Header */}
                        <thead>

                            <tr className="bg-gray-50 border-b border-gray-200">

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Employee
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Department
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Role
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Phone
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Status
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Join Date
                                </th>

                                <th className="
                                    px-3
                                    py-2
                                    text-center
                                    text-[10px]
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
                                        No employees found
                                    </td>

                                </tr>

                            ) : (

                                filterData.map((curr, index) => (

                                    <tr
                                        key={curr.id || index}
                                        className="
                                            border-b
                                            border-gray-100
                                            last:border-0
                                            hover:bg-gray-50
                                            transition
                                        "
                                    >

                                        {/* Employee */}
                                        <td className="px-3 py-2">

                                            <div className="flex items-center gap-2">

                                                <div className="
                                                    w-7
                                                    h-7
                                                    rounded-full
                                                    bg-blue-50
                                                    text-blue-600
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-[10px]
                                                    font-semibold
                                                ">
                                                    {curr.name
                                                        ?.charAt(0)
                                                        ?.toUpperCase()}
                                                </div>

                                                <p className="
                                                    text-[10px]
                                                    font-medium
                                                    text-gray-800
                                                ">
                                                    {curr.name}
                                                </p>

                                            </div>

                                        </td>


                                        {/* Department */}
                                        <td className="
                                            px-3
                                            py-2
                                            text-[10px]
                                            text-gray-600
                                        ">
                                            {curr.department}
                                        </td>


                                        {/* Role */}
                                        <td className="
                                            px-3
                                            py-2
                                            text-[10px]
                                            text-gray-600
                                        ">
                                            {curr.role}
                                        </td>


                                        {/* Phone */}
                                        <td className="
                                            px-3
                                            py-2
                                            text-[10px]
                                            text-gray-600
                                        ">
                                            {curr.phone}
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
                                                    text-[9px]
                                                    font-medium
                                                    ${statusStyle[curr.status] ||
                                                    "bg-gray-50 text-gray-500 border-gray-100"}
                                                `}
                                            >
                                                {curr.status}
                                            </span>

                                        </td>


                                        {/* Date */}
                                        <td className="
                                            px-3
                                            py-2
                                            text-[10px]
                                            text-gray-500
                                        ">
                                            {curr.date}
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
                                                        handleUpdate(curr)
                                                    }
                                                    className="
                                                        w-7
                                                        h-7
                                                        flex
                                                        items-center
                                                        justify-center
                                                        rounded-md
                                                        bg-blue-50
                                                        text-blue-600
                                                        hover:bg-blue-100
                                                        transition
                                                    "
                                                >
                                                    <HiPencilSquare className="w-3.5 h-3.5" />
                                                </button>


                                                <button
                                                    onClick={() =>
                                                        handleDelete(curr.id)
                                                    }
                                                    className="
                                                        w-7
                                                        h-7
                                                        flex
                                                        items-center
                                                        justify-center
                                                        rounded-md
                                                        bg-red-50
                                                        text-red-500
                                                        hover:bg-red-100
                                                        transition
                                                    "
                                                >
                                                    <MdDeleteOutline className="w-4 h-4" />
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