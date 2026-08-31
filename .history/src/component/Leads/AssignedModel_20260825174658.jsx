import React, { useContext } from "react"
import { IoClose } from "react-icons/io5"
import { LeadContext } from "../../ContextAPI/LeadContext"

const AssignedModel = ({
    openModel,
    setOpenModel,
    item
}) => {

    const {
        selectedLead,
        setSelectedLead,
        selectedEmp,
        setSelectedEmp,
        setLeadData
    } = useContext(LeadContext)


    // ================= EMPLOYEES =================

    const employees =
        JSON.parse(localStorage.getItem("employee")) || []

    const employee =
        employees.filter((emp) => !emp.isAdmin)


    // ================= LEADS =================

    const leads =
        JSON.parse(localStorage.getItem("leads")) || []


    // ================= SELECT EMPLOYEE =================

    const handleClick = (emp) => {
        setSelectedEmp(emp)
    }


    // ================= CLOSE MODAL =================

    const handleClose = () => {

        setOpenModel(false)
        setSelectedEmp(null)
    }


    // ================= ASSIGN LEADS =================

    const handleAssign = () => {

        // No employee selected
        if (!selectedEmp) return

        // No leads selected
        if (!selectedLead || selectedLead.length === 0) {
            return
        }


        const updatedLeads = leads.map((lead) => {

            if (selectedLead.includes(lead.id)) {

                return {
                    ...lead,
                    assignedTo: selectedEmp.name
                }
            }

            return lead
        })


        // Update localStorage
        localStorage.setItem(
            "leads",
            JSON.stringify(updatedLeads)
        )


        // Update context
        if (setLeadData) {
            setLeadData(updatedLeads)
        }


        // Clear selected leads
        setSelectedLead([])

        // Clear employee
        setSelectedEmp(null)

        // Close modal
        setOpenModel(false)
    }


    // ================= IF MODAL CLOSED =================

    if (!openModel) {
        return null
    }


    return (
        <div
            className="
                fixed
                inset-0
                bg-black/30
                dark:bg-black/60
                backdrop-blur-[1px]
                flex
                items-center
                justify-center
                z-50
                p-4
            "
            onClick={handleClose}
        >

            {/* ================= MODAL ================= */}

            <div
                className="
                    w-full
                    max-w-[420px]

                    bg-white
                    dark:bg-[#1f1f2b]

                    rounded-xl

                    shadow-2xl

                    border
                    border-gray-200
                    dark:border-[#303044]

                    overflow-hidden
                "
                onClick={(e) => e.stopPropagation()}
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
                        dark:border-[#303044]

                        bg-white
                        dark:bg-[#1f1f2b]
                    "
                >

                    <div>

                        <h2
                            className="
                                text-[14px]
                                font-semibold
                                text-gray-900
                                dark:text-white
                            "
                        >
                            Assign Leads
                        </h2>

                        <p
                            className="
                                text-[10px]
                                text-gray-500
                                dark:text-gray-400
                                mt-0.5
                            "
                        >
                            Assign selected leads to an employee
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
                            dark:hover:bg-[#2a2a3c]

                            hover:text-gray-700
                            dark:hover:text-white

                            transition
                        "
                    >
                        <IoClose size={18} />
                    </button>

                </div>


                {/* ================= BODY ================= */}

                <div className="px-4 py-4">

                    {/* ================= SELECTED LEADS ================= */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between

                            mb-4
                            px-3
                            py-2.5

                            bg-blue-50
                            dark:bg-blue-500/10

                            border
                            border-blue-100
                            dark:border-blue-500/20

                            rounded-lg
                        "
                    >

                        <div>

                            <p
                                className="
                                    text-[10px]
                                    text-gray-500
                                    dark:text-gray-400
                                "
                            >
                                Selected Leads
                            </p>

                            <p
                                className="
                                    text-[13px]
                                    font-semibold
                                    text-gray-900
                                    dark:text-white
                                    mt-0.5
                                "
                            >
                                {item || selectedLead?.length || 0} Leads
                            </p>

                        </div>


                        <div
                            className="
                                w-7
                                h-7
                                rounded-full

                                bg-blue-100
                                dark:bg-blue-500/20

                                flex
                                items-center
                                justify-center

                                text-[11px]
                                font-semibold

                                text-blue-600
                                dark:text-blue-400
                            "
                        >
                            {item || selectedLead?.length || 0}
                        </div>

                    </div>


                    {/* ================= EMPLOYEE SECTION ================= */}

                    <div>

                        <div className="mb-2">

                            <p
                                className="
                                    text-[11px]
                                    font-semibold
                                    text-gray-800
                                    dark:text-gray-200
                                "
                            >
                                Select Employee
                            </p>

                            <p
                                className="
                                    text-[9px]
                                    text-gray-500
                                    dark:text-gray-400
                                    mt-0.5
                                "
                            >
                                Choose an employee to assign these leads
                            </p>

                        </div>


                        {/* ================= EMPLOYEE LIST ================= */}

                        <div
                            className="
                                max-h-[220px]
                                overflow-y-auto
                                pr-1
                                space-y-1.5
                            "
                        >

                            {employee.length === 0 ? (

                                <div
                                    className="
                                        py-6
                                        text-center
                                    "
                                >
                                    <p
                                        className="
                                            text-[10px]
                                            text-gray-400
                                        "
                                    >
                                        No employees found
                                    </p>
                                </div>

                            ) : (

                                employee.map((emp) => {

                                    const isSelected =
                                        selectedEmp?.id === emp.id

                                    return (

                                        <label
                                            key={emp.id}
                                            className={`
                                                flex
                                                items-center
                                                gap-2.5
                                                w-full
                                                px-3
                                                py-2

                                                rounded-lg

                                                border

                                                cursor-pointer

                                                transition

                                                ${
                                                    isSelected
                                                        ? `
                                                            border-blue-400
                                                            bg-blue-50
                                                            dark:border-blue-500/50
                                                            dark:bg-blue-500/10
                                                        `
                                                        : `
                                                            border-gray-200
                                                            dark:border-[#38384d]
                                                            bg-white
                                                            dark:bg-[#272738]
                                                            hover:bg-gray-50
                                                            dark:hover:bg-[#303044]
                                                        `
                                                }
                                            `}
                                        >

                                            {/* Radio */}

                                            <input
                                                type="radio"
                                                name="employee"
                                                checked={isSelected}
                                                onChange={() =>
                                                    handleClick(emp)
                                                }
                                                className="
                                                    w-3.5
                                                    h-3.5
                                                    accent-blue-600
                                                "
                                            />


                                            {/* Avatar */}

                                            <div
                                                className="
                                                    w-7
                                                    h-7
                                                    rounded-full

                                                    bg-gray-100
                                                    dark:bg-[#303044]

                                                    flex
                                                    items-center
                                                    justify-center

                                                    text-[10px]
                                                    font-semibold

                                                    text-gray-600
                                                    dark:text-gray-300

                                                    shrink-0
                                                "
                                            >
                                                {emp.name
                                                    ?.charAt(0)
                                                    ?.toUpperCase()}
                                            </div>


                                            {/* Employee Info */}

                                            <div className="flex-1 min-w-0">

                                                <p
                                                    className="
                                                        text-[11px]
                                                        font-medium
                                                        text-gray-800
                                                        dark:text-gray-200
                                                        truncate
                                                    "
                                                >
                                                    {emp.name}
                                                </p>

                                                <p
                                                    className="
                                                        text-[9px]
                                                        text-gray-500
                                                        dark:text-gray-400
                                                        truncate
                                                    "
                                                >
                                                    {emp.role || "Employee"}
                                                </p>

                                            </div>


                                            {/* Selected */}

                                            {isSelected && (

                                                <span
                                                    className="
                                                        text-[9px]
                                                        font-medium
                                                        text-blue-600
                                                        dark:text-blue-400
                                                    "
                                                >
                                                    Selected
                                                </span>

                                            )}

                                        </label>
                                    )
                                })

                            )}

                        </div>

                    </div>

                </div>


                {/* ================= FOOTER ================= */}

                <div
                    className="
                        flex
                        justify-end
                        gap-2

                        px-4
                        py-3

                        border-t
                        border-gray-200
                        dark:border-[#303044]

                        bg-gray-50
                        dark:bg-[#191925]
                    "
                >

                    {/* Cancel */}

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            px-3
                            py-1.5

                            rounded-md

                            border
                            border-gray-200
                            dark:border-[#38384d]

                            bg-white
                            dark:bg-[#272738]

                            text-[10px]
                            font-medium

                            text-gray-600
                            dark:text-gray-300

                            hover:bg-gray-100
                            dark:hover:bg-[#303044]

                            transition
                        "
                    >
                        Cancel
                    </button>


                    {/* Assign */}

                    <button
                        type="button"
                        onClick={handleAssign}
                        disabled={
                            !selectedEmp ||
                            !selectedLead ||
                            selectedLead.length === 0
                        }
                        className={`
                            px-4
                            py-1.5

                            rounded-md

                            text-[10px]
                            font-medium

                            transition

                            ${
                                !selectedEmp ||
                                !selectedLead ||
                                selectedLead.length === 0
                                    ? `
                                        bg-gray-300
                                        dark:bg-gray-700
                                        text-gray-500
                                        cursor-not-allowed
                                    `
                                    : `
                                        bg-blue-600
                                        text-white
                                        hover:bg-blue-700
                                        shadow-sm
                                    `
                            }
                        `}
                    >
                        Assign Leads
                    </button>

                </div>

            </div>

        </div>
    )
}

export default AssignedModel