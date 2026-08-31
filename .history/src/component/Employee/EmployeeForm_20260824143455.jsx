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
            rounded-xl
            shadow-sm
            px-4
            py-3
            flex
            items-center
            justify-between
        ">

            {/* Left - Title */}
            <div>
                <h1 className="
                    text-lg
                    font-bold
                    text-gray-900
                ">
                    Employee Management
                </h1>

                <p className="
                    text-xs
                    text-gray-500
                    mt-0.5
                ">
                    Manage employees, roles and their activities
                </p>
            </div>


            {/* Right - Actions */}
            <div className="flex items-center gap-2">

                {/* Import Employee */}
                <div
                    className="
                        flex
                        items-center
                        gap-1.5
                        border
                        border-gray-200
                        rounded-md
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-gray-600
                        bg-white
                        hover:bg-gray-50
                        transition
                    "
                >
                    <FiUpload className="w-3.5 h-3.5" />

                    <ImportEmployee ref={inputRef} />
                </div>


                {/* Add Employee */}
                <button
                    onClick={() => setOpen(!open)}
                    className="
                        flex
                        items-center
                        gap-1.5
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-3
                        py-1.5
                        rounded-md
                        text-xs
                        font-medium
                        transition
                        shadow-sm
                    "
                >
                    <FiPlus className="w-3.5 h-3.5" />

                    Add Employee
                </button>

            </div>

        </div>
    )
}

export default EmployeeForm