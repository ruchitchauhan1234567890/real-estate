import React, { useContext, useState } from "react"
import { IoClose } from "react-icons/io5"
import Select, { components } from "react-select"
import { ThemeContext } from "../../ContextAPI/ThemeContext"

const DeleteEmployee = ({
    setDeleteModelOpen,
    deleteModelOpen,
    deletedEmp
}) => {

    const { theme } = useContext(ThemeContext)

    const isDark = theme === "dark"

    const lead =
        JSON.parse(localStorage.getItem("leads")) || []

    const emp =
        JSON.parse(localStorage.getItem("employee")) || []

    const task =
        JSON.parse(localStorage.getItem("tasks")) || []


    const [selectEmp, setSelectEmp] = useState(null)


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
        (item) =>
            item.assignedTo === findEmp?.name
    )


    const findTasks = task.filter(
        (item) =>
            item.assign === findEmp?.name
    )


    // =====================================================
    // EMPLOYEE PHOTO
    // Supports different possible image property names
    // =====================================================

    const getEmployeePhoto = (employee) => {

        if (!employee) return null

        return (
            employee.photo ||
            employee.profilePhoto ||
            employee.profileImage ||
            employee.image ||
            employee.imageUrl ||
            employee.avatar ||
            null
        )
    }


    // =====================================================
    // INITIAL
    // =====================================================

    const getInitial = (employee) => {

        return (
            employee?.name
                ?.charAt(0)
                ?.toUpperCase() || "E"
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
            value: employee.id,
            label: employee.name,
            employee
        }))


    // =====================================================
    // DELETE
    // =====================================================

    const handleDelete = () => {

        if (!findEmp) return


        // =============================================
        // REASSIGN RECORDS
        // =============================================

        if (
            findLeads.length > 0 ||
            findTasks.length > 0
        ) {

            if (!selectEmp) return


            const selectedEmployee =
                emp.find(
                    (employee) =>
                        employee.id === selectEmp
                )


            if (!selectedEmployee) return


            // =============================================
            // UPDATE LEADS
            // =============================================

            const updatedLead = lead.map(
                (item) => {

                    if (
                        item.assignedTo ===
                        findEmp.name
                    ) {

                        return {
                            ...item,
                            assignedTo:
                                selectedEmployee.name
                        }
                    }

                    return item
                }
            )


            // =============================================
            // UPDATE TASKS
            // =============================================

            const updatedTask = task.map(
                (item) => {

                    if (
                        item.assign ===
                        findEmp.name
                    ) {

                        return {
                            ...item,
                            assign:
                                selectedEmployee.name
                        }
                    }

                    return item
                }
            )


            localStorage.setItem(
                "leads",
                JSON.stringify(updatedLead)
            )


            localStorage.setItem(
                "tasks",
                JSON.stringify(updatedTask)
            )
        }


        // =============================================
        // DELETE EMPLOYEE
        // =============================================

        const updatedEmployees =
            emp.filter(
                (employee) =>
                    employee.id !== deletedEmp
            )


        localStorage.setItem(
            "employee",
            JSON.stringify(updatedEmployees)
        )


        setSelectEmp(null)
        setDeleteModelOpen(false)
    }


    // =====================================================
    // CLOSE
    // =====================================================

    const handleClose = () => {

        setSelectEmp(null)
        setDeleteModelOpen(false)
    }


    // =====================================================
    // CUSTOM OPTION
    // =====================================================

    const CustomOption = (props) => {

        const employee =
            props.data.employee

        const photo =
            getEmployeePhoto(employee)

        return (
            <components.Option {...props}>

                <div className="
                    flex
                    items-center
                    gap-2
                    min-w-0
                ">

                    {/* PHOTO */}

                    {photo ? (

                        <img
                            src={photo}
                            alt={employee?.name}
                            className="
                                w-7
                                h-7
                                rounded-full
                                object-cover
                                flex-shrink-0
                                border
                                border-gray-200
                                dark:border-[#45455A]
                            "
                            onError={(e) => {
                                e.currentTarget.style.display =
                                    "none"
                            }}
                        />

                    ) : (

                        <div className="
                            w-7
                            h-7
                            rounded-full
                            flex
                            items-center
                            justify-center
                            flex-shrink-0
                            bg-blue-100
                            dark:bg-blue-500/20
                            text-blue-600
                            dark:text-blue-400
                            text-[10px]
                            font-semibold
                        ">
                            {getInitial(employee)}
                        </div>

                    )}


                    {/* NAME + ROLE */}

                    <div className="min-w-0">

                        <p className="
                            text-[10px]
                            font-medium
                            truncate
                        ">
                            {employee?.name}
                        </p>

                        <p className="
                            text-[8px]
                            text-gray-400
                            dark:text-gray-500
                            truncate
                            mt-0.5
                        ">
                            {employee?.role || "Employee"}
                        </p>

                    </div>

                </div>

            </components.Option>
        )
    }


    // =====================================================
    // SELECT STYLES
    // =====================================================

    const selectStyles = {

        // =============================================
        // CONTROL
        // =============================================

        control: (base, state) => ({
            ...base,

            minHeight: "34px",
            height: "34px",

            borderRadius: "6px",

            backgroundColor:
                isDark
                    ? "#2A2A40"
                    : "#ffffff",

            borderColor:
                state.isFocused
                    ? "#3b82f6"
                    : isDark
                        ? "#45455A"
                        : "#e5e7eb",

            boxShadow:
                state.isFocused
                    ? "0 0 0 1px #3b82f6"
                    : "none",

            cursor: "pointer",

            fontSize: "10px",

            "&:hover": {
                borderColor:
                    "#3b82f6"
            }
        }),


        // =============================================
        // VALUE CONTAINER
        // =============================================

        valueContainer: (base) => ({
            ...base,

            minHeight: "32px",

            padding: "0 9px"
        }),


        // =============================================
        // SINGLE VALUE
        // =============================================

        singleValue: (base) => ({
            ...base,

            color:
                isDark
                    ? "#f3f4f6"
                    : "#374151",

            fontSize: "10px"
        }),


        // =============================================
        // PLACEHOLDER
        // =============================================

        placeholder: (base) => ({
            ...base,

            color:
                isDark
                    ? "#6b7280"
                    : "#9ca3af",

            fontSize: "10px"
        }),


        // =============================================
        // INPUT
        // =============================================

        input: (base) => ({
            ...base,

            color:
                isDark
                    ? "#f3f4f6"
                    : "#374151",

            fontSize: "10px"
        }),


        // =============================================
        // INDICATORS
        // =============================================

        indicatorsContainer: (base) => ({
            ...base,

            height: "32px"
        }),


        dropdownIndicator: (base) => ({
            ...base,

            padding: "5px",

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


        indicatorSeparator: (base) => ({
            ...base,

            backgroundColor:
                isDark
                    ? "#45455A"
                    : "#e5e7eb",

            marginTop: "7px",
            marginBottom: "7px"
        }),


        // =============================================
        // MENU
        // =============================================

        menu: (base) => ({
            ...base,

            marginTop: "4px",

            backgroundColor:
                isDark
                    ? "#2A2A40"
                    : "#ffffff",

            border:
                isDark
                    ? "1px solid #45455A"
                    : "1px solid #e5e7eb",

            borderRadius: "6px",

            overflow: "hidden",

            zIndex: 99999,

            boxShadow:
                isDark
                    ? "0 12px 30px rgba(0,0,0,0.45)"
                    : "0 10px 25px rgba(0,0,0,0.12)"
        }),


        // =============================================
        // MENU LIST
        // IMPORTANT:
        // maxHeight + overflowY fixes dropdown scrolling
        // =============================================

        menuList: (base) => ({
            ...base,

            padding: "4px",

            maxHeight: "170px",

            overflowY: "auto",

            overflowX: "hidden",

            backgroundColor:
                isDark
                    ? "#2A2A40"
                    : "#ffffff",

            scrollbarWidth: "thin"
        }),


        // =============================================
        // OPTION
        // =============================================

        option: (base, state) => ({
            ...base,

            padding: "7px 8px",

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


        // =============================================
        // NO OPTIONS
        // =============================================

        noOptionsMessage: (base) => ({
            ...base,

            fontSize: "9px",

            color:
                isDark
                    ? "#9ca3af"
                    : "#6b7280"
        })
    }


    return (

        <div
            className="
                fixed
                inset-0
                z-[9999]

                flex
                items-center
                justify-center

                bg-black/40
                dark:bg-black/65

                px-3
                py-4
            "
        >

            {/* =================================================
                MODAL
            ================================================= */}

            <div
                className="
                    relative

                    w-full
                    max-w-[420px]

                    max-h-[90vh]

                    flex
                    flex-col

                    bg-white
                    dark:bg-[#1F1F30]

                    border
                    border-gray-200
                    dark:border-[#353548]

                    rounded-xl

                    shadow-2xl

                    overflow-hidden
                "
            >


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
                    border-gray-200
                    dark:border-[#353548]

                    flex-shrink-0
                ">

                    <div>

                        <h2 className="
                            text-[14px]
                            font-semibold
                            text-gray-900
                            dark:text-white
                        ">
                            Delete Employee
                        </h2>

                        <p className="
                            text-[9px]
                            text-gray-500
                            dark:text-gray-400
                            mt-0.5
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
                        <IoClose size={17} />
                    </button>

                </div>


                {/* =================================================
                    BODY
                ================================================= */}

                <div className="
                    px-4
                    py-3

                    overflow-y-auto
                    overflow-x-hidden

                    flex-1

                    scrollbar-thin
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

                        mb-3
                    ">


                        {/* PHOTO */}

                        {getEmployeePhoto(findEmp) ? (

                            <img
                                src={getEmployeePhoto(findEmp)}
                                alt={findEmp?.name}
                                className="
                                    w-11
                                    h-11

                                    rounded-full

                                    object-cover

                                    flex-shrink-0

                                    border
                                    border-gray-200
                                    dark:border-[#45455A]
                                "
                                onError={(e) => {
                                    e.currentTarget.style.display =
                                        "none"
                                }}
                            />

                        ) : (

                            <div className="
                                w-11
                                h-11

                                rounded-full

                                flex
                                items-center
                                justify-center

                                flex-shrink-0

                                bg-blue-100
                                dark:bg-blue-500/20

                                text-blue-600
                                dark:text-blue-400

                                text-[13px]
                                font-semibold
                            ">
                                {getInitial(findEmp)}
                            </div>

                        )}


                        {/* DETAILS */}

                        <div className="min-w-0">

                            <p className="
                                text-[11px]
                                font-semibold

                                text-gray-800
                                dark:text-gray-100

                                truncate
                            ">
                                {findEmp?.name || "-"}
                            </p>

                            <p className="
                                text-[9px]

                                text-gray-500
                                dark:text-gray-400

                                mt-0.5

                                truncate
                            ">
                                {findEmp?.role || "Employee"}
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        WARNING
                    ================================================= */}

                    {
                        (
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

                                px-3
                                py-2.5

                                mb-3
                            ">

                                <p className="
                                    text-[10px]
                                    leading-4

                                    text-red-700
                                    dark:text-red-400
                                ">
                                    This employee has assigned records
                                    that need to be reassigned before
                                    deletion.
                                </p>


                                <div className="
                                    flex
                                    items-center
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

                                px-3
                                py-2.5

                                mb-3
                            ">

                                <p className="
                                    text-[10px]

                                    text-gray-600
                                    dark:text-gray-300
                                ">
                                    Are you sure you want to delete this
                                    employee?
                                </p>

                            </div>
                        )
                    }


                    {/* =================================================
                        REASSIGN
                    ================================================= */}

                    {
                        (
                            findLeads.length > 0 ||
                            findTasks.length > 0
                        ) && (

                            <div className="
                                rounded-lg

                                border
                                border-gray-200
                                dark:border-[#45455A]

                                bg-white
                                dark:bg-[#2A2A40]

                                p-3
                            ">

                                <label className="
                                    block

                                    text-[9px]
                                    font-semibold

                                    text-gray-600
                                    dark:text-gray-300

                                    mb-1.5
                                ">
                                    Reassign records to
                                </label>


                                {/* =================================================
                                    SELECT
                                ================================================= */}

                                <Select
                                    options={empOptions}

                                    value={
                                        empOptions.find(
                                            (option) =>
                                                option.value ===
                                                selectEmp
                                        ) || null
                                    }

                                    onChange={(
                                        selectedOption
                                    ) =>
                                        setSelectEmp(
                                            selectedOption?.value ||
                                            null
                                        )
                                    }

                                    placeholder="Select employee"

                                    isSearchable={true}

                                    isClearable={true}

                                    maxMenuHeight={170}

                                    menuPlacement="bottom"

                                    menuPosition="fixed"

                                    menuPortalTarget={
                                        document.body
                                    }

                                    components={{
                                        Option:
                                            CustomOption
                                    }}

                                    styles={{
                                        ...selectStyles,

                                        menuPortal:
                                            (base) => ({
                                                ...base,
                                                zIndex: 100000
                                            })
                                    }
                                />


                                <p className="
                                    text-[8px]

                                    text-gray-400
                                    dark:text-gray-500

                                    mt-1.5
                                ">
                                    Leads and tasks will be assigned to
                                    this employee.
                                </p>

                            </div>
                        )
                    }

                </div>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="
                    flex
                    items-center
                    justify-end
                    gap-2

                    px-4
                    py-2.5

                    border-t
                    border-gray-200
                    dark:border-[#353548]

                    bg-gray-50
                    dark:bg-[#1A1A29]

                    flex-shrink-0
                ">


                    {/* CANCEL */}

                    <button
                        type="button"
                        onClick={handleClose}
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
                            px-3.5
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