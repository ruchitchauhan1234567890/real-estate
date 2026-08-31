import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { LeadContext } from '../../ContextAPI/LeadContext';

const AssignedModel = ({ openModel, setOpenModel, item }) => {

    const {
        selectedLead,
        setSelectedLead,
        selectedEmp,
        setSelectedEmp
    } = useContext(LeadContext)

    const employees = JSON.parse(localStorage.getItem("employee"))
    const employee = employees.filter((emp) => !emp.isAdmin)

    const handleClick = (item) => {
        setSelectedEmp(item)
    }

    const leads = JSON.parse(localStorage.getItem("leads"))

    const handleAssign = () => {
        const assign = leads.map((curr, index) => {
            if (selectedLead.includes(curr.id)) {
                return {
                    ...curr,
                    assignedTo: selectedEmp.name
                };
            }
            return curr
        })

        localStorage.setItem("leads", JSON.stringify(assign))
        setSelectedLead([])
        setSelectedEmp(null)
        setOpenModel(!openModel)
    }

    return (
        <div className="
            fixed
            inset-0
            bg-black/30
            flex
            items-center
            justify-center
            z-50
            p-4
        ">

            {/* Modal */}
            <div className="
                w-full
                max-w-[420px]
                bg-white
                rounded-xl
                shadow-2xl
                border
                border-gray-200
                overflow-hidden
            ">

                {/* Header */}
                <div className="
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    border-b
                    border-gray-200
                ">

                    <div>
                        <h2 className="
                            text-[14px]
                            font-semibold
                            text-gray-900
                        ">
                            Assign Leads
                        </h2>

                        <p className="
                            text-[10px]
                            text-gray-500
                            mt-0.5
                        ">
                            Assign selected leads to an employee
                        </p>
                    </div>

                    <button
                        onClick={() => setOpenModel(!openModel)}
                        className="
                            w-7
                            h-7
                            flex
                            items-center
                            justify-center
                            rounded-md
                            text-gray-400
                            hover:bg-gray-100
                            hover:text-gray-700
                            transition
                        "
                    >
                        <IoClose size={18} />
                    </button>

                </div>


                {/* Body */}
                <div className="px-4 py-4">

                    {/* Selected Leads */}
                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-3
                        px-3
                        py-2
                        bg-blue-50
                        border
                        border-blue-100
                        rounded-lg
                    ">

                        <div>
                            <p className="
                                text-[10px]
                                text-gray-500
                            ">
                                Selected Leads
                            </p>

                            <p className="
                                text-[13px]
                                font-semibold
                                text-gray-900
                                mt-0.5
                            ">
                                {item} Leads
                            </p>
                        </div>

                        <div className="
                            w-7
                            h-7
                            rounded-full
                            bg-blue-100
                            flex
                            items-center
                            justify-center
                            text-[11px]
                            font-semibold
                            text-blue-600
                        ">
                            {item}
                        </div>

                    </div>


                    {/* Employee Section */}
                    <div>

                        <div className="mb-2">

                            <p className="
                                text-[11px]
                                font-semibold
                                text-gray-800
                            ">
                                Select Employee
                            </p>

                            <p className="
                                text-[9px]
                                text-gray-500
                                mt-0.5
                            ">
                                Choose an employee to assign these leads
                            </p>

                        </div>


                        {/* Employee List */}
                        <div className="
                            max-h-[220px]
                            overflow-y-auto
                            pr-1
                            space-y-1.5
                        ">

                            {employee.map((emp) => {

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
                                                    ? "border-blue-400 bg-blue-50"
                                                    : "border-gray-200 bg-white hover:bg-gray-50"
                                            }
                                        `}
                                    >

                                        <input
                                            type="radio"
                                            name="employee"
                                            checked={isSelected}
                                            onChange={() => handleClick(emp)}
                                            className="
                                                w-3.5
                                                h-3.5
                                                accent-blue-600
                                            "
                                        />

                                        {/* Avatar */}
                                        <div className="
                                            w-7
                                            h-7
                                            rounded-full
                                            bg-gray-100
                                            flex
                                            items-center
                                            justify-center
                                            text-[10px]
                                            font-semibold
                                            text-gray-600
                                        ">
                                            {emp.name?.charAt(0)?.toUpperCase()}
                                        </div>

                                        {/* Employee Info */}
                                        <div className="flex-1">

                                            <p className="
                                                text-[11px]
                                                font-medium
                                                text-gray-800
                                            ">
                                                {emp.name}
                                            </p>

                                            <p className="
                                                text-[9px]
                                                text-gray-500
                                            ">
                                                {emp.role || "Employee"}
                                            </p>

                                        </div>

                                        {/* Selected indicator */}
                                        {isSelected && (
                                            <span className="
                                                text-[9px]
                                                font-medium
                                                text-blue-600
                                            ">
                                                Selected
                                            </span>
                                        )}

                                    </label>
                                )
                            })}

                        </div>

                    </div>

                </div>


                {/* Footer */}
                <div className="
                    flex
                    justify-end
                    gap-2
                    px-4
                    py-3
                    border-t
                    border-gray-200
                    bg-gray-50
                ">

                    <button
                        type="button"
                        onClick={() => setOpenModel(!openModel)}
                        className="
                            px-3
                            py-1.5
                            rounded-md
                            border
                            border-gray-200
                            bg-white
                            text-[10px]
                            font-medium
                            text-gray-600
                            hover:bg-gray-100
                            transition
                        "
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        onClick={handleAssign}
                        disabled={!selectedEmp}
                        className={`
                            px-4
                            py-1.5
                            rounded-md
                            text-[10px]
                            font-medium
                            transition
                            ${
                                !selectedEmp
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
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