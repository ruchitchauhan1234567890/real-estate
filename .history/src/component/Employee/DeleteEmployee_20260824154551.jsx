import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import Select from 'react-select';

const DeleteEmployee = ({
    setDeleteModelOpen,
    deleteModelOpen,
    deletedEmp
}) => {

    const lead = JSON.parse(localStorage.getItem("leads"))
    const emp = JSON.parse(localStorage.getItem("employee"))
    const task = JSON.parse(localStorage.getItem("tasks"))

    const [selectEmp, setSelectEmp] = useState(null)

    if (!deleteModelOpen) return null

    const findEmp = emp.find((emp) => emp.id === deletedEmp)
    const findLeads = lead.filter(
        (lead) => lead.assignedTo === findEmp.name
    )
    const findTasks = task.filter(
        (task) => task.assign === findEmp.name
    )

    const empOptions = emp
        .filter((emp) => emp.id !== findEmp.id)
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

        setDeleteModelOpen(!deleteModelOpen)
        setSelectEmp(null)
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
                max-w-[380px]
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
                            text-[13px]
                            font-semibold
                            text-gray-900
                        ">
                            Delete Employee
                        </h2>

                        <p className="
                            text-[9px]
                            text-gray-500
                            mt-0.5
                        ">
                            Remove employee from your CRM
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            setDeleteModelOpen(!deleteModelOpen)
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
                            hover:bg-gray-100
                            hover:text-gray-700
                            transition
                        "
                    >
                        <IoClose size={17} />
                    </button>

                </div>


                {/* Body */}
                <div className="px-4 py-4">

                    {/* Employee Info */}
                    <div className="
                        flex
                        items-center
                        gap-3
                        p-3
                        rounded-lg
                        bg-gray-50
                        border
                        border-gray-100
                        mb-4
                    ">

                        <div className="
                            w-9
                            h-9
                            rounded-full
                            bg-blue-100
                            text-blue-600
                            flex
                            items-center
                            justify-center
                            text-[12px]
                            font-semibold
                        ">
                            {findEmp?.name?.charAt(0)?.toUpperCase()}
                        </div>

                        <div>
                            <p className="
                                text-[11px]
                                font-semibold
                                text-gray-800
                            ">
                                {findEmp?.name}
                            </p>

                            <p className="
                                text-[9px]
                                text-gray-500
                                mt-0.5
                            ">
                                {findEmp?.role || "Employee"}
                            </p>
                        </div>

                    </div>


                    {/* Warning / Confirmation */}
                    {
                        (findTasks.length > 0 || findLeads.length > 0)
                            ?
                            <div className="
                                rounded-lg
                                border
                                border-red-100
                                bg-red-50
                                px-3
                                py-2.5
                                mb-4
                            ">

                                <p className="
                                    text-[10px]
                                    leading-4
                                    text-red-700
                                ">
                                    This employee has assigned records that
                                    need to be reassigned before deletion.
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
                                        border
                                        border-red-100
                                        text-[9px]
                                        font-medium
                                        text-red-600
                                    ">
                                        {findLeads.length} Leads
                                    </span>

                                    <span className="
                                        px-2
                                        py-1
                                        rounded-md
                                        bg-white
                                        border
                                        border-red-100
                                        text-[9px]
                                        font-medium
                                        text-red-600
                                    ">
                                        {findTasks.length} Tasks
                                    </span>

                                </div>

                            </div>
                            :
                            <div className="
                                rounded-lg
                                bg-gray-50
                                border
                                border-gray-100
                                px-3
                                py-2.5
                                mb-4
                            ">
                                <p className="
                                    text-[10px]
                                    text-gray-600
                                ">
                                    Are you sure you want to delete this
                                    employee?
                                </p>
                            </div>
                    }


                    {/* Reassign */}
                    {
                        (findLeads.length > 0 || findTasks.length > 0) &&
                        <div className="
                            border
                            border-gray-200
                            rounded-lg
                            p-3
                            bg-white
                        ">

                            <label className="
                                block
                                text-[9px]
                                font-semibold
                                text-gray-600
                                mb-1.5
                            ">
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
                                onChange={(selectEmp) =>
                                    setSelectEmp(selectEmp.value)
                                }
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        minHeight: "32px",
                                        height: "32px",
                                        fontSize: "10px",
                                        borderRadius: "6px",
                                        borderColor: "#e5e7eb",
                                        boxShadow: "none"
                                    }),
                                    valueContainer: (base) => ({
                                        ...base,
                                        height: "30px",
                                        padding: "0 8px"
                                    }),
                                    input: (base) => ({
                                        ...base,
                                        fontSize: "10px"
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        fontSize: "10px",
                                        color: "#9ca3af"
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        fontSize: "10px"
                                    }),
                                    option: (base) => ({
                                        ...base,
                                        fontSize: "10px",
                                        padding: "7px 9px"
                                    })
                                }}
                            />

                            <p className="
                                text-[8px]
                                text-gray-400
                                mt-1.5
                            ">
                                Leads and tasks will be assigned to this
                                employee.
                            </p>

                        </div>
                    }

                </div>


                {/* Footer */}
                <div className="
                    flex
                    justify-end
                    items-center
                    gap-2
                    px-4
                    py-3
                    border-t
                    border-gray-200
                    bg-gray-50
                ">

                    <button
                        onClick={() => {
                            setDeleteModelOpen(!deleteModelOpen)
                            setSelectEmp(null)
                        }}
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


                    {
                        (findLeads.length > 0 || findTasks.length > 0)
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
                                            ? "bg-gray-300 cursor-not-allowed"
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