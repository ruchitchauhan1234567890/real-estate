import React, { useState, useContext } from "react"
import { IoClose } from "react-icons/io5"
import Select from "react-select"
import { ThemeContext } from "../../ContextAPI/ThemeContext"

const DeleteEmployee = ({
    setDeleteModelOpen,
    deleteModelOpen,
    deletedEmp
}) => {

    const { theme } = useContext(ThemeContext)

    const lead =
        JSON.parse(localStorage.getItem("leads")) || []

    const emp =
        JSON.parse(localStorage.getItem("employee")) || []

    const task =
        JSON.parse(localStorage.getItem("tasks")) || []

    const [selectEmp, setSelectEmp] = useState(null)

    if (!deleteModelOpen) return null

    const findEmp = emp.find(
        (emp) => emp.id === deletedEmp
    )

    const findLeads = lead.filter(
        (lead) => lead.assignedTo === findEmp?.name
    )

    const findTasks = task.filter(
        (task) => task.assign === findEmp?.name
    )

    const empOptions = emp
        .filter((emp) => emp.id !== findEmp?.id)
        .map((emp) => ({
            value: emp.name,
            label: emp.name
        }))


    const handleDelete = () => {

        if (findLeads.length > 0 || findTasks.length > 0) {

            const updatedLead = lead.map((lead) => {

                if (lead.assignedTo === findEmp.name) {
                    return {
                        ...lead,
                        assignedTo: selectEmp
                    }
                }

                return lead
            })

            const updateTask = task.map((task) => {

                if (task.assign === findEmp.name) {
                    return {
                        ...task,
                        assign: selectEmp
                    }
                }

                return task
            })

            localStorage.setItem(
                "leads",
                JSON.stringify(updatedLead)
            )

            localStorage.setItem(
                "tasks",
                JSON.stringify(updateTask)
            )
        }


        const deleteEmp = emp.filter(
            (emp) => emp.id !== deletedEmp
        )

        localStorage.setItem(
            "employee",
            JSON.stringify(deleteEmp)
        )

        setDeleteModelOpen(false)
        setSelectEmp(null)
    }


    /* ================= SELECT STYLES ================= */

    const selectStyles = {

        control: (base, state) => ({
            ...base,

            minHeight: "32px",
            height: "32px",

            fontSize: "10px",

            backgroundColor:
                theme === "dark"
                    ? "#2A2A40"
                    : "#ffffff",

            borderColor:
                state.isFocused
                    ? "#3b82f6"
                    : theme === "dark"
                        ? "#45455A"
                        : "#e5e7eb",

            boxShadow:
                state.isFocused
                    ? "0 0 0 1px #3b82f6"
                    : "none",

            borderRadius: "6px",

            "&:hover": {
                borderColor:
                    theme === "dark"
                        ? "#5B5B72"
                        : "#d1d5db"
            }
        }),


        valueContainer: (base) => ({
            ...base,
            height: "30px",
            padding: "0 8px"
        }),


        input: (base) => ({
            ...base,
            fontSize: "10px",
            color:
                theme === "dark"
                    ? "#f3f4f6"
                    : "#374151"
        }),


        placeholder: (base) => ({
            ...base,
            fontSize: "10px",
            color:
                theme === "dark"
                    ? "#6b7280"
                    : "#9ca3af"
        }),


        singleValue: (base) => ({
            ...base,
            fontSize: "10px",
            color:
                theme === "dark"
                    ? "#f3f4f6"
                    : "#374151"
        }),


        menu: (base) => ({
            ...base,

            backgroundColor:
                theme === "dark"
                    ? "#2A2A40"
                    : "#ffffff",

            border:
                theme === "dark"
                    ? "1px solid #45455A"
                    : "1px solid #e5e7eb",

            zIndex: 100
        }),


        option: (base, state) => ({
            ...base,

            fontSize: "10px",
            padding: "7px 9px",

            backgroundColor:
                state.isSelected
                    ? "#eff6ff"
                    : state.isFocused
                        ? theme === "dark"
                            ? "#353548"
                            : "#f9fafb"
                        : theme === "dark"
                            ? "#2A2A40"
                            : "#ffffff",

            color:
                state.isSelected
                    ? "#2563eb"
                    : theme === "dark"
                        ? "#f3f4f6"
                        : "#374151",

            cursor: "pointer"
        })
    }


    return (
        <div
            className="
                fixed
                inset-0
                bg-black/30
                dark:bg-black/60
                flex
                items-center
                justify-center
                z-50
                p-4
            "
        >

            {/* ================= MODAL ================= */}

            <div
                className="
                    w-full
                    max-w-[380px]

                    bg-white
                    dark:bg-[#1F1F30]

                    rounded-xl
                    shadow-2xl

                    border
                    border-gray-200
                    dark:border-[#353548]

                    overflow-hidden
                "
            >

                {/* ================= HEADER ================= */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-4
                        py-3

                        border-b
                        border-gray-200
                        dark:border-[#353548]
                    "
                >

                    <div>

                        <h2
                            className="
                                text-[13px]
                                font-semibold
                                text-gray-900
                                dark:text-white
                            "
                        >
                            Delete Employee
                        </h2>

                        <p
                            className="
                                text-[9px]
                                text-gray-500
                                dark:text-gray-400
                                mt-0.5
                            "
                        >
                            Remove employee from your CRM
                        </p>

                    </div>


                    <button
                        onClick={() => {
                            setDeleteModelOpen(false)
                            setSelectEmp(null)
                        }}
                        className="
                            w-6
                            h-6
                            flex
                            items-center
                            justify-center
                            rounded-md

                            text-gray-400
                            dark:text-gray-500

                            hover:bg-gray-100
                            dark:hover:bg-[#2A2A40]

                            hover:text-gray-700
                            dark:hover:text-gray-200

                            transition
                        "
                    >
                        <IoClose size={17} />
                    </button>

                </div>


                {/* ================= BODY ================= */}

                <div className="px-4 py-4">

                    {/* Employee Info */}

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            p-3
                            rounded-lg

                            bg-gray-50
                            dark:bg-[#2A2A40]

                            border
                            border-gray-100
                            dark:border-[#45455A]

                            mb-4
                        "
                    >

                        <div
                            className="
                                w-9
                                h-9
                                rounded-full

                                bg-blue-100
                                dark:bg-blue-900/30

                                text-blue-600
                                dark:text-blue-400

                                flex
                                items-center
                                justify-center

                                text-[12px]
                                font-semibold
                            "
                        >
                            {findEmp?.name
                                ?.charAt(0)
                                ?.toUpperCase()}
                        </div>


                        <div>

                            <p
                                className="
                                    text-[11px]
                                    font-semibold

                                    text-gray-800
                                    dark:text-gray-100
                                "
                            >
                                {findEmp?.name}
                            </p>

                            <p
                                className="
                                    text-[9px]
                                    text-gray-500
                                    dark:text-gray-400
                                    mt-0.5
                                "
                            >
                                {findEmp?.role || "Employee"}
                            </p>

                        </div>

                    </div>


                    {/* ================= WARNING ================= */}

                    {
                        (findTasks.length > 0 ||
                            findLeads.length > 0)

                            ?

                            <div
                                className="
                                    rounded-lg

                                    border
                                    border-red-100
                                    dark:border-red-900/40

                                    bg-red-50
                                    dark:bg-red-900/10

                                    px-3
                                    py-2.5
                                    mb-4
                                "
                            >

                                <p
                                    className="
                                        text-[10px]
                                        leading-4

                                        text-red-700
                                        dark:text-red-400
                                    "
                                >
                                    This employee has assigned records that
                                    need to be reassigned before deletion.
                                </p>


                                <div className="
                                    flex
                                    gap-2
                                    mt-2
                                ">

                                    <span
                                        className="
                                            px-2
                                            py-1
                                            rounded-md

                                            bg-white
                                            dark:bg-[#2A2A40]

                                            border
                                            border-red-100
                                            dark:border-red-900/40

                                            text-[9px]
                                            font-medium
                                            text-red-600
                                            dark:text-red-400
                                        "
                                    >
                                        {findLeads.length} Leads
                                    </span>


                                    <span
                                        className="
                                            px-2
                                            py-1
                                            rounded-md

                                            bg-white
                                            dark:bg-[#2A2A40]

                                            border
                                            border-red-100
                                            dark:border-red-900/40

                                            text-[9px]
                                            font-medium
                                            text-red-600
                                            dark:text-red-400
                                        "
                                    >
                                        {findTasks.length} Tasks
                                    </span>

                                </div>

                            </div>

                            :

                            <div
                                className="
                                    rounded-lg

                                    bg-gray-50
                                    dark:bg-[#2A2A40]

                                    border
                                    border-gray-100
                                    dark:border-[#45455A]

                                    px-3
                                    py-2.5
                                    mb-4
                                "
                            >

                                <p
                                    className="
                                        text-[10px]

                                        text-gray-600
                                        dark:text-gray-300
                                    "
                                >
                                    Are you sure you want to delete this
                                    employee?
                                </p>

                            </div>
                    }


                    {/* ================= REASSIGN ================= */}

                    {
                        (findLeads.length > 0 ||
                            findTasks.length > 0) &&

                        <div
                            className="
                                border
                                border-gray-200
                                dark:border-[#45455A]

                                rounded-lg
                                p-3

                                bg-white
                                dark:bg-[#2A2A40]
                            "
                        >

                            <label
                                className="
                                    block
                                    text-[9px]
                                    font-semibold

                                    text-gray-600
                                    dark:text-gray-300

                                    mb-1.5
                                "
                            >
                                Reassign records to
                            </label>


                            <Select
                                options={empOptions}
                                placeholder="Select employee"

                                value={
                                    empOptions.find(
                                        option =>
                                            option.value === selectEmp
                                    ) || null
                                }

                                onChange={(selectedOption) =>
                                    setSelectEmp(
                                        selectedOption?.value || null
                                    )
                                }

                                styles={selectStyles}
                            />


                            <p
                                className="
                                    text-[8px]

                                    text-gray-400
                                    dark:text-gray-500

                                    mt-1.5
                                "
                            >
                                Leads and tasks will be assigned to this
                                employee.
                            </p>

                        </div>
                    }

                </div>


                {/* ================= FOOTER ================= */}

                <div
                    className="
                        flex
                        justify-end
                        items-center
                        gap-2
                        px-4
                        py-3

                        border-t
                        border-gray-200
                        dark:border-[#353548]

                        bg-gray-50
                        dark:bg-[#1A1A29]
                    "
                >

                    {/* Cancel */}

                    <button
                        onClick={() => {
                            setDeleteModelOpen(false)
                            setSelectEmp(null)
                        }}
                        className="
                            px-3
                            py-1.5
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

                            hover:bg-gray-100
                            dark:hover:bg-[#353548]

                            transition
                        "
                    >
                        Cancel
                    </button>


                    {/* Delete */}

                    {
                        (findLeads.length > 0 ||
                            findTasks.length > 0)

                            ?

                            <button
                                disabled={!selectEmp}
                                className={`
                                    px-3.5
                                    py-1.5
                                    rounded-md
                                    text-[10px]
                                    font-medium
                                    text-white
                                    transition

                                    ${
                                        !selectEmp
                                            ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                                            : "bg-red-600 hover:bg-red-700"
                                    }
                                `}
                                onClick={handleDelete}
                            >
                                Delete Employee
                            </button>

                            :

                            <button
                                className="
                                    px-3.5
                                    py-1.5
                                    rounded-md
                                    bg-red-600
                                    hover:bg-red-700
                                    text-white
                                    text-[10px]
                                    font-medium
                                    transition
                                "
                                onClick={handleDelete}
                            >
                                Delete Employee
                            </button>
                    }

                </div>

            </div>

        </div>
    )
}

export default DeleteEmployee