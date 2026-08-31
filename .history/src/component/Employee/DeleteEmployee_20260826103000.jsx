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

    const isDark = theme === "dark"


    // =====================================================
    // LOCAL STORAGE DATA
    // =====================================================

    const lead =
        JSON.parse(localStorage.getItem("leads")) || []

    const emp =
        JSON.parse(localStorage.getItem("employee")) || []

    const task =
        JSON.parse(localStorage.getItem("tasks")) || []


    // =====================================================
    // STATE
    // =====================================================

    const [selectEmp, setSelectEmp] = useState(null)


    // =====================================================
    // MODAL CHECK
    // =====================================================

    if (!deleteModelOpen) return null


    // =====================================================
    // FIND EMPLOYEE
    // =====================================================

    const findEmp = emp.find(
        (employee) => employee.id === deletedEmp
    )


    // =====================================================
    // FIND ASSIGNED RECORDS
    // =====================================================

    const findLeads = lead.filter(
        (leadItem) =>
            leadItem.assignedTo === findEmp?.name
    )

    const findTasks = task.filter(
        (taskItem) =>
            taskItem.assign === findEmp?.name
    )


    // =====================================================
    // EMPLOYEE PHOTO HELPER
    // =====================================================

    const getEmployeePhoto = (employee) => {

        return (
            employee?.photo ||
            employee?.image ||
            employee?.profilePhoto ||
            employee?.profileImage ||
            employee?.avatar ||
            ""
        )
    }


    // =====================================================
    // EMPLOYEE OPTIONS
    // =====================================================

    const empOptions = emp
        .filter(
            (employee) =>
                employee.id !== findEmp?.id
        )
        .map((employee) => ({
            value: employee.name,
            label: employee.name,
            photo: getEmployeePhoto(employee),
            role: employee.role || "Employee"
        }))


    // =====================================================
    // HANDLE DELETE
    // =====================================================

    const handleDelete = () => {

        if (
            findLeads.length > 0 ||
            findTasks.length > 0
        ) {

            if (!selectEmp) return


            // =========================
            // REASSIGN LEADS
            // =========================

            const updatedLead = lead.map(
                (leadItem) => {

                    if (
                        leadItem.assignedTo ===
                        findEmp.name
                    ) {

                        return {
                            ...leadItem,
                            assignedTo: selectEmp
                        }
                    }

                    return leadItem
                }
            )


            // =========================
            // REASSIGN TASKS
            // =========================

            const updateTask = task.map(
                (taskItem) => {

                    if (
                        taskItem.assign ===
                        findEmp.name
                    ) {

                        return {
                            ...taskItem,
                            assign: selectEmp
                        }
                    }

                    return taskItem
                }
            )


            localStorage.setItem(
                "leads",
                JSON.stringify(updatedLead)
            )

            localStorage.setItem(
                "tasks",
                JSON.stringify(updateTask)
            )
        }


        // =========================
        // DELETE EMPLOYEE
        // =========================

        const deleteEmp = emp.filter(
            (employee) =>
                employee.id !== deletedEmp
        )

        localStorage.setItem(
            "employee",
            JSON.stringify(deleteEmp)
        )


        // =========================
        // CLOSE
        // =========================

        setDeleteModelOpen(false)
        setSelectEmp(null)
    }


    // =====================================================
    // CLOSE MODAL
    // =====================================================

    const handleClose = () => {

        setDeleteModelOpen(false)
        setSelectEmp(null)
    }


    // =====================================================
    // SELECT STYLES
    // =====================================================

    const selectStyles = {

        // =================================================
        // CONTROL
        // =================================================

        control: (base, state) => ({
            ...base,

            minHeight: "40px",
            height: "40px",

            padding: "0 2px",

            backgroundColor:
                isDark
                    ? "#2A2A40"
                    : "#ffffff",

            border:
                state.isFocused
                    ? "1px solid #3b82f6"
                    : isDark
                        ? "1px solid #45455A"
                        : "1px solid #d1d5db",

            borderRadius: "7px",

            boxShadow:
                state.isFocused
                    ? "0 0 0 1px #3b82f6"
                    : "none",

            cursor: "pointer",

            "&:hover": {
                borderColor: "#3b82f6"
            }
        }),


        // =================================================
        // VALUE CONTAINER
        // =================================================

        valueContainer: (base) => ({
            ...base,

            padding: "0 10px"
        }),


        // =================================================
        // INPUT
        // =================================================

        input: (base) => ({
            ...base,

            margin: 0,

            padding: 0,

            fontSize: "11px",

            color:
                isDark
                    ? "#f3f4f6"
                    : "#374151"
        }),


        // =================================================
        // PLACEHOLDER
        // =================================================

        placeholder: (base) => ({
            ...base,

            fontSize: "11px",

            color:
                isDark
                    ? "#6b7280"
                    : "#9ca3af"
        }),


        // =================================================
        // SELECTED VALUE
        // =================================================

        singleValue: (base) => ({
            ...base,

            fontSize: "11px",

            color:
                isDark
                    ? "#f3f4f6"
                    : "#374151"
        }),


        // =================================================
        // INDICATORS
        // =================================================

        indicatorsContainer: (base) => ({
            ...base,

            height: "38px"
        }),


        dropdownIndicator: (base) => ({
            ...base,

            padding: "8px",

            color:
                isDark
                    ? "#9ca3af"
                    : "#6b7280",

            "&:hover": {
                color: "#3b82f6"
            }
        }),


        indicatorSeparator: (base) => ({
            ...base,

            backgroundColor:
                isDark
                    ? "#45455A"
                    : "#e5e7eb",

            marginTop: "8px",
            marginBottom: "8px"
        }),


        // =================================================
        // MENU
        // =================================================

        menu: (base) => ({
            ...base,

            marginTop: "5px",

            borderRadius: "7px",

            overflow: "hidden",

            backgroundColor:
                isDark
                    ? "#2A2A40"
                    : "#ffffff",

            border:
                isDark
                    ? "1px solid #45455A"
                    : "1px solid #e5e7eb",

            boxShadow:
                isDark
                    ? "0 12px 30px rgba(0,0,0,0.45)"
                    : "0 12px 30px rgba(0,0,0,0.15)"
        }),


        // =================================================
        // MENU LIST
        // =================================================

        menuList: (base) => ({
            ...base,

            padding: "4px",

            maxHeight: "190px",

            overflowY: "auto",

            overflowX: "hidden",

            backgroundColor:
                isDark
                    ? "#2A2A40"
                    : "#ffffff",

            // Firefox
            scrollbarWidth: "thin",

            // Webkit scrollbar
            "&::-webkit-scrollbar": {
                width: "5px"
            },

            "&::-webkit-scrollbar-track": {
                background:
                    isDark
                        ? "#1F1F30"
                        : "#f3f4f6"
            },

            "&::-webkit-scrollbar-thumb": {
                background:
                    isDark
                        ? "#4B4B63"
                        : "#cbd5e1",

                borderRadius: "10px"
            }
        }),


        // =================================================
        // OPTION
        // =================================================

        option: (base, state) => ({
            ...base,

            padding: "8px 9px",

            borderRadius: "5px",

            fontSize: "10px",

            backgroundColor:
                state.isSelected
                    ? isDark
                        ? "#353548"
                        : "#eff6ff"

                    : state.isFocused
                        ? isDark
                            ? "#353548"
                            : "#f9fafb"

                        : isDark
                            ? "#2A2A40"
                            : "#ffffff",

            color:
                isDark
                    ? "#f3f4f6"
                    : "#374151",

            cursor: "pointer",

            "&:active": {
                backgroundColor:
                    isDark
                        ? "#45455A"
                        : "#dbeafe"
            }
        }),


        // =================================================
        // NO OPTIONS
        // =================================================

        noOptionsMessage: (base) => ({
            ...base,

            fontSize: "10px",

            color:
                isDark
                    ? "#9ca3af"
                    : "#6b7280"
        })
    }


    // =====================================================
    // CUSTOM OPTION
    // =====================================================

    const CustomOption = (props) => {

        const {
            data,
            innerRef,
            innerProps,
            isFocused
        } = props

        return (

            <div
                ref={innerRef}
                {...innerProps}
                className={`
                    flex
                    items-center
                    gap-2

                    px-2
                    py-2

                    rounded-md

                    cursor-pointer

                    transition-colors

                    ${
                        isFocused
                            ? isDark
                                ? "bg-[#353548]"
                                : "bg-gray-50"
                            : ""
                    }
                `}
            >

                {/* PHOTO */}

                <div className="
                    w-7
                    h-7

                    rounded-full

                    overflow-hidden

                    shrink-0

                    bg-blue-100
                    dark:bg-blue-900/30

                    flex
                    items-center
                    justify-center
                ">

                    {data.photo ? (

                        <img
                            src={data.photo}
                            alt={data.label}
                            className="
                                w-full
                                h-full
                                object-cover
                            "
                        />

                    ) : (

                        <span className="
                            text-[10px]
                            font-semibold

                            text-blue-600
                            dark:text-blue-400
                        ">
                            {data.label
                                ?.charAt(0)
                                ?.toUpperCase()}
                        </span>

                    )}

                </div>


                {/* NAME */}

                <div className="min-w-0">

                    <p className={`
                        text-[10px]
                        font-medium
                        truncate

                        ${
                            isDark
                                ? "text-gray-100"
                                : "text-gray-700"
                        }
                    `}>
                        {data.label}
                    </p>

                    <p className={`
                        text-[8px]
                        truncate

                        ${
                            isDark
                                ? "text-gray-500"
                                : "text-gray-400"
                        }
                    `}>
                        {data.role}
                    </p>

                </div>

            </div>
        )
    }


    // =====================================================
    // SELECTED VALUE
    // =====================================================

    const CustomSingleValue = (props) => {

        const {
            data
        } = props

        return (

            <div className="
                flex
                items-center
                gap-2
            ">

                <div className="
                    w-6
                    h-6

                    rounded-full

                    overflow-hidden

                    shrink-0

                    bg-blue-100
                    dark:bg-blue-900/30

                    flex
                    items-center
                    justify-center
                ">

                    {data.photo ? (

                        <img
                            src={data.photo}
                            alt={data.label}
                            className="
                                w-full
                                h-full
                                object-cover
                            "
                        />

                    ) : (

                        <span className="
                            text-[9px]
                            font-semibold

                            text-blue-600
                            dark:text-blue-400
                        ">
                            {data.label
                                ?.charAt(0)
                                ?.toUpperCase()}
                        </span>

                    )}

                </div>


                <span className={`
                    text-[10px]
                    truncate

                    ${
                        isDark
                            ? "text-gray-100"
                            : "text-gray-700"
                    }
                `}>
                    {data.label}
                </span>

            </div>
        )
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

            {/* =================================================
                MODAL
            ================================================= */}

            <div
                className="
                    w-full
                    max-w-[570px]

                    max-h-[90vh]

                    bg-white
                    dark:bg-[#1F1F30]

                    rounded-xl

                    shadow-2xl

                    border
                    border-gray-200
                    dark:border-[#353548]

                    overflow-hidden

                    flex
                    flex-col
                "
            >


                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="
                    flex
                    items-center
                    justify-between

                    px-6
                    py-4

                    border-b
                    border-gray-200
                    dark:border-[#353548]

                    shrink-0
                ">

                    <div>

                        <h2 className="
                            text-[16px]
                            font-semibold

                            text-gray-900
                            dark:text-white
                        ">
                            Delete Employee
                        </h2>

                        <p className="
                            text-[11px]

                            text-gray-500
                            dark:text-gray-400

                            mt-1
                        ">
                            Remove employee from your CRM
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            w-7
                            h-7

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
                        <IoClose size={18} />
                    </button>

                </div>


                {/* =================================================
                    BODY
                ================================================= */}

                <div className="
                    px-6
                    py-5

                    overflow-y-auto
                ">


                    {/* =================================================
                        EMPLOYEE INFO
                    ================================================= */}

                    <div className="
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
                    ">


                        {/* EMPLOYEE PHOTO */}

                        <div className="
                            w-12
                            h-12

                            rounded-full

                            overflow-hidden

                            shrink-0

                            bg-blue-100
                            dark:bg-blue-900/30

                            flex
                            items-center
                            justify-center
                        ">

                            {getEmployeePhoto(
                                findEmp
                            ) ? (

                                <img
                                    src={getEmployeePhoto(
                                        findEmp
                                    )}
                                    alt={findEmp?.name}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                    "
                                />

                            ) : (

                                <span className="
                                    text-[15px]
                                    font-semibold

                                    text-blue-600
                                    dark:text-blue-400
                                ">
                                    {findEmp?.name
                                        ?.charAt(0)
                                        ?.toUpperCase()}
                                </span>

                            )}

                        </div>


                        {/* EMPLOYEE DETAILS */}

                        <div className="min-w-0">

                            <p className="
                                text-[12px]
                                font-semibold

                                text-gray-800
                                dark:text-gray-100

                                truncate
                            ">
                                {findEmp?.name}
                            </p>

                            <p className="
                                text-[10px]

                                text-gray-500
                                dark:text-gray-400

                                mt-0.5
                            ">
                                {findEmp?.role ||
                                    "Employee"}
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        WARNING
                    ================================================= */}

                    {(
                        findTasks.length > 0 ||
                        findLeads.length > 0
                    ) ? (

                        <div className="
                            rounded-lg

                            border
                            border-red-100
                            dark:border-red-900/40

                            bg-red-50
                            dark:bg-red-900/10

                            px-4
                            py-3

                            mb-4
                        ">

                            <p className="
                                text-[11px]
                                leading-5

                                text-red-700
                                dark:text-red-400
                            ">
                                This employee has assigned records
                                that need to be reassigned before
                                deletion.
                            </p>


                            <div className="
                                flex
                                gap-2

                                mt-2
                            ">

                                <span className="
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
                                ">
                                    {findLeads.length} Leads
                                </span>


                                <span className="
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
                                ">
                                    {findTasks.length} Tasks
                                </span>

                            </div>

                        </div>

                    ) : (

                        <div className="
                            rounded-lg

                            bg-gray-50
                            dark:bg-[#2A2A40]

                            border
                            border-gray-100
                            dark:border-[#45455A]

                            px-4
                            py-3

                            mb-4
                        ">

                            <p className="
                                text-[11px]

                                text-gray-600
                                dark:text-gray-300
                            ">
                                Are you sure you want to delete
                                this employee?
                            </p>

                        </div>
                    )}


                    {/* =================================================
                        REASSIGN
                    ================================================= */}

                    {(
                        findLeads.length > 0 ||
                        findTasks.length > 0
                    ) && (

                        <div className="
                            border
                            border-gray-200
                            dark:border-[#45455A]

                            rounded-lg

                            p-4

                            bg-white
                            dark:bg-[#2A2A40]
                        ">

                            <label className="
                                block

                                text-[10px]
                                font-semibold

                                text-gray-600
                                dark:text-gray-300

                                mb-2
                            ">
                                Reassign records to
                            </label>


                            <Select
                                options={empOptions}

                                placeholder="Select employee"

                                value={
                                    empOptions.find(
                                        (option) =>
                                            option.value ===
                                            selectEmp
                                    ) || null
                                }

                                onChange={(
                                    selectedOption
                                ) => {

                                    setSelectEmp(
                                        selectedOption?.value ||
                                        null
                                    )
                                }}

                                styles={selectStyles}

                                isSearchable={true}

                                isClearable={true}

                                components={{
                                    Option:
                                        CustomOption,

                                    SingleValue:
                                        CustomSingleValue
                                }}

                                menuPortalTarget={
                                    document.body
                                }

                                menuPosition="fixed"

                                menuPlacement="auto"

                                maxMenuHeight={190}
                            />


                            <p className="
                                text-[9px]

                                text-gray-400
                                dark:text-gray-500

                                mt-2
                            ">
                                Leads and tasks will be assigned
                                to this employee.
                            </p>

                        </div>
                    )}

                </div>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="
                    flex
                    justify-end
                    items-center
                    gap-2

                    px-6
                    py-3

                    border-t
                    border-gray-200
                    dark:border-[#353548]

                    bg-gray-50
                    dark:bg-[#1A1A29]

                    shrink-0
                ">


                    {/* CANCEL */}

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            px-3.5
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


                    {/* DELETE */}

                    <button
                        type="button"
                        disabled={
                            (
                                findLeads.length > 0 ||
                                findTasks.length > 0
                            ) &&
                            !selectEmp
                        }
                        onClick={handleDelete}
                        className={`
                            px-4
                            py-1.5

                            rounded-md

                            text-[10px]
                            font-medium

                            text-white

                            transition

                            ${
                                (
                                    findLeads.length > 0 ||
                                    findTasks.length > 0
                                ) &&
                                !selectEmp

                                    ? `
                                        bg-gray-300
                                        dark:bg-gray-700
                                        cursor-not-allowed
                                    `

                                    : `
                                        bg-red-600
                                        hover:bg-red-700
                                    `
                            }
                        `}
                    >
                        Delete Employee
                    </button>

                </div>

            </div>

        </div>
    )
}

export default DeleteEmployee