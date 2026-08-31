import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";

const DeleteEmployee = ({ setDeleteModelOpen, deleteModelOpen,setDeletedEmp,deletedEmp }) => {

    const lead = JSON.parse(localStorage.getItem("leads"))
    const emp = JSON.parse(localStorage.getItem("employee"))

    if (!deleteModelOpen) return null

        const findEmp = emp.find((emp) => emp.id === deletedEmp )
        const findLeads = lead.filter((lead) => lead.assignedTo === findEmp.name )
        console.log(findEmp)
        console.log(findLeads)


    

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className=" w-150 h-100 bg-white shadow rounded p-4" >
                <div className="flex justify-between mb-2">
                    <p>Delete Employee</p>
                    <button onClick={() => setDeleteModelOpen(!deleteModelOpen) }>
                        <IoClose size={28} />
                    </button>
                </div>

                <div>
                    <p className="text-red-700 text-sm">{`This employee has ${findLeads.length} assigned leads. Please reassign those leads to another employee before deleting this employee.`}</p>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default DeleteEmployee
