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

    const employee =
        JSON.parse(localStorage.getItem("employee")) || []

    const emp = employee.filter((emp) => !emp.isAdmin)

    const task =
        JSON.parse(localStorage.getItem("tasks")) || []

    const [selectEmp, setSelectEmp] = useState(null)

    if (!deleteModelOpen) {
        return null
    }

   

    const findEmp = emp.find(
        (employee) =>
            String(employee.id) === String(deletedEmp)
    )


    const findLeads = lead.filter(
        (item) =>
            item.assignedTo === findEmp?.name
    )

 
    const findTasks = task.filter(
        (item) =>
            item.assign === findEmp?.name
    )

    const hasRecords =
        findLeads.length > 0 ||
        findTasks.length > 0



    const getEmployeePhoto = (employee) => {

        if (!employee) {
            return null
        }

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
    // EMPLOYEE INITIAL
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
                String(employee.id) !==
                String(findEmp?.id)
        )
        .map((employee) => ({
            value: employee.id,
            label: employee.name,
            employee: employee
        }))

    // =====================================================
    // CLOSE
    // =====================================================

    const handleClose = () => {

        setSelectEmp(null)

        setDeleteModelOpen(false)
    }

    // =====================================================
    // DELETE
    // =====================================================

    const handleDelete = () => {

        if (!findEmp) {
            return
        }

        // -------------------------------------------------
        // REASSIGN REQUIRED
        // -------------------------------------------------

        if (hasRecords) {

            if (!selectEmp) {
                return
            }

            const selectedEmployee = emp.find(
                (employee) =>
                    String(employee.id) ===
                    String(selectEmp)
            )

            if (!selectedEmployee) {
                return
            }

            // ---------------------------------------------
            // UPDATE LEADS
            // ---------------------------------------------

            const updatedLeads = lead.map((item) => {

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
            })

            // ---------------------------------------------
            // UPDATE TASKS
            // ---------------------------------------------

            const updatedTasks = task.map((item) => {

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
            })

            localStorage.setItem(
                "leads",
                JSON.stringify(updatedLeads)
            )

            localStorage.setItem(
                "tasks",
                JSON.stringify(updatedTasks)
            )
        }

        // -------------------------------------------------
        // DELETE EMPLOYEE
        // -------------------------------------------------

        const updatedEmployees = emp.filter(
            (employee) =>
                String(employee.id) !==
                String(deletedEmp)
        )

        localStorage.setItem(
            "employee",
            JSON.stringify(updatedEmployees)
        )

        setSelectEmp(null)

        setDeleteModelOpen(false)
    }

    // =====================================================
    // EMPLOYEE AVATAR
    // =====================================================

    const EmployeeAvatar = ({
        employee,
        large = false
    }) => {

        const [imageError, setImageError] =
            useState(false)

        const photo =
            getEmployeePhoto(employee)

        const imageSize =
            large
                ? "w-11 h-11"
                : "w-7 h-7"

        const textSize =
            large
                ? "text-[13px]"
                : "text-[9px]"

        if (photo && !imageError) {

            return (
                <img
                    src={photo}
                    alt={
                        employee?.name ||
                        "Employee"
                    }
                    className={`
                        ${imageSize}

                        rounded-full
                        object-cover
                        flex-shrink-0

                        border
                        border-gray-200
                        dark:border-[#45455A]
                    `}
                    onError={() => {
                        setImageError(true)
                    }}
                />
            )
        }

        return (
            <div
                className={`
                    ${imageSize}
                    ${textSize}

                    rounded-full

                    flex
                    items-center
                    justify-center

                    flex-shrink-0

                    bg-blue-100
                    dark:bg-blue-500/20

                    text-blue-600
                    dark:text-blue-400

                    font-semibold
                `}
            >
                {getInitial(employee)}
            </div>
        )
    }

    // =====================================================
    // CUSTOM DROPDOWN OPTION
    // =====================================================

    const CustomOption = (props) => {

        const employee =
            props.data.employee

        return (
            <components.Option {...props}>

                <div className="
                    flex
                    items-center
                    gap-2
                    w-full
                    min-w-0
                ">

                    <EmployeeAvatar
                        employee={employee}
                    />

                    <div className="
                        min-w-0
                        flex-1
                    ">

                        <p className="
                            text-[10px]
                            font-medium
                            text-gray-800
                            dark:text-gray-100
                            truncate
                        ">
                            {employee?.name}
                        </p>

                        <p className="
                            text-[8px]
                            text-gray-400
                            dark:text-gray-500
                            truncate
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

        control: (base, state) => ({
            ...base,

            minHeight: "36px",
            height: "36px",

            width: "100%",

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
                borderColor: "#3b82f6"
            }
        }),

        valueContainer: (base) => ({
            ...base,

            minHeight: "34px",

            padding: "0 9px"
        }),

        singleValue: (base) => ({
            ...base,

            color:
                isDark
                    ? "#f3f4f6"
                    : "#374151",

            fontSize: "10px"
        }),

        placeholder: (base) => ({
            ...base,

            color:
                isDark
                    ? "#6b7280"
                    : "#9ca3af",

            fontSize: "10px"
        }),

        input: (base) => ({
            ...base,

            color:
                isDark
                    ? "#f3f4f6"
                    : "#374151",

            fontSize: "10px"
        }),

        indicatorsContainer: (base) => ({
            ...base,

            height: "34px"
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

        clearIndicator: (base) => ({
            ...base,

            padding: "5px",

            color:
                isDark
                    ? "#9ca3af"
                    : "#6b7280"
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

            zIndex: 999999,

            boxShadow:
                isDark
                    ? "0 12px 30px rgba(0,0,0,0.50)"
                    : "0 10px 25px rgba(0,0,0,0.12)"
        }),

        menuList: (base) => ({
            ...base,

            padding: "4px",

            maxHeight: "155px",

            overflowY: "auto",

            overflowX: "hidden",

            backgroundColor:
                isDark
                    ? "#2A2A40"
                    : "#ffffff",

            scrollbarWidth: "thin"
        }),

        option: (base, state) => ({
            ...base,

            minHeight: "40px",

            padding: "6px 8px",

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

        noOptionsMessage: (base) => ({
            ...base,

            fontSize: "9px",

            color:
                isDark
                    ? "#9ca3af"
                    : "#6b7280"
        })
    }

    // =====================================================
    // MODAL
    // =====================================================

    return (
        <div className="
            fixed
            inset-0
            z-[9999]

            flex
            items-center
            justify-center

            bg-black/50
            dark:bg-black/70

            px-3
            py-4
        ">

            <div
                className="
                    relative

                    w-full
                    max-w-[400px]

                    max-h-[90vh]

                    bg-white
                    dark:bg-[#1F1F30]

                    border
                    border-gray-200
                    dark:border-[#353548]

                    rounded-xl

                    shadow-2xl

                    overflow-visible
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
                ">

                    <div className="min-w-0">

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

                            flex-shrink-0

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
                ">

                    {/* =================================================
                        EMPLOYEE
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

                        <EmployeeAvatar
                            employee={findEmp}
                            large
                        />

                        <div className="
                            min-w-0
                            flex-1
                        ">

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

                    {hasRecords ? (

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
                                This employee has assigned records that
                                need to be reassigned before deletion.
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
                    )}

                    {/* =================================================
                        REASSIGN
                    ================================================= */}

                    {hasRecords && (

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

                            <Select
                                options={empOptions}

                                value={
                                    empOptions.find(
                                        (option) =>
                                            String(option.value) ===
                                            String(selectEmp)
                                    ) || null
                                }

                                onChange={(option) => {
                                    setSelectEmp(
                                        option?.value || null
                                    )
                                }}

                                placeholder="Select employee"

                                isSearchable={true}

                                isClearable={true}

                                maxMenuHeight={155}

                                menuPlacement="auto"

                                menuPosition="fixed"

                                menuPortalTarget={
                                    document.body
                                }

                                components={{
                                    Option: CustomOption
                                }}

                                styles={{
                                    ...selectStyles,

                                    menuPortal: (base) => ({
                                        ...base,
                                        zIndex: 999999
                                    })
                                }}
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
                    )}

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

                    rounded-b-xl
                ">

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

                    <button
                        type="button"
                        disabled={
                            hasRecords &&
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

                            ${hasRecords &&
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