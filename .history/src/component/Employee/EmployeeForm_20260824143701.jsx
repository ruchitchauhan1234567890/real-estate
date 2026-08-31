import React, { useContext, useRef } from "react"
import { EmployeeContext } from "../../ContextAPI/EmployeeContext"
import ImportEmployee from "../ImportAndExport/ImportEmployee"
import { FiPlus, FiUpload } from "react-icons/fi"

const EmployeeForm = () => {

    const { open, setOpen } = useContext(EmployeeContext)

    const inputRef = useRef(null)

    return (
        <div className="
            w-full
            bg-white
            border
            border-gray-200
            rounded-lg
            shadow-sm
            px-3
            py-2
            flex
            items-center
            justify-between
        ">

            {/* Left */}
            <div>
                <h1 className="
                    text-sm
                    font-semibold
                    text-gray-900
                ">
                    Employee Management
                </h1>

                <p className="
                    text-[10px]
                    text-gray-500
                    mt-0.5
                ">
                    Manage employees, roles and their activities
                </p>
            </div>


            {/* Actions */}
            <div className="flex items-center gap-1.5">

                {/* Import */}
                <div className="
                    flex
                    items-center
                    gap-1
                    border
                    border-gray-200
                    rounded-md
                    px-2
                    py-1
                    text-[10px]
                    font-medium
                    text-gray-600
                    bg-white
                    hover:bg-gray-50
                    transition
                ">
                    <FiUpload className="w-3 h-3" />

                    <ImportEmployee ref={inputRef} />
                </div>


                {/* Add */}
                <button
                    onClick={() => setOpen(!open)}
                    className="
                        flex
                        items-center
                        gap-1
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-2.5
                        py-1
                        rounded-md
                        text-[10px]
                        font-medium
                        transition
                        shadow-sm
                    "
                >
                    <FiPlus className="w-3 h-3" />

                    Add Employee
                </button>

            </div>

        </div>
    )
}

export default EmployeeForm