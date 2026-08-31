import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import Select from 'react-select';

const DeleteEmployee = ({ setDeleteModelOpen, deleteModelOpen, setDeletedEmp, deletedEmp }) => {

    const lead = JSON.parse(localStorage.getItem("leads"))
    const emp = JSON.parse(localStorage.getItem("employee"))

    const [selectEmp, setSelectEmp] = useState(null)

    if (!deleteModelOpen) return null

    const findEmp = emp.find((emp) => emp.id === deletedEmp)
    const findLeads = lead.filter((lead) => lead.assignedTo === findEmp.name)
    console.log(findEmp)
    console.log(findLeads)

    const empOptions = emp
        .filter((emp) => emp.id !== findEmp.id)
        .map((emp) => ({
            value: emp.name,
            label: emp.name
        }))

    console.log(selectEmp)

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className=" w-150 h-100 bg-white shadow rounded p-4" >
                <div className="flex justify-between mb-2">
                    <p>Delete Employee</p>
                    <button onClick={() => setDeleteModelOpen(!deleteModelOpen)}>
                        <IoClose size={28} />
                    </button>
                </div>
                <hr />

                <div className="mt-2">
                    <p className="text-red-700 text-xs w-90">
                        `This employee has {$findLeads.length}`
                    </p>
                </div>

                    <p className="text-red-700 text-xs w-90">{`This employee has { <span className="text-red-900"> ${findLeads.length} assigned leads.<span>} Please reassign those leads to another employee before deleting this employee.`}</p>

                <form className="w-80 p-2 rounded border mt-4">
                    <div>
                        <label>Select Employee : </label>
                        <Select
                            options={empOptions}
                            placeholder="Select Employee"
                            onChange={(selectEmp) => setSelectEmp(selectEmp.value)}
                            className="mt-2"
                        />
                    </div>
                </form>

                <div className="flex justify-end  gap-3 mt-30 border-t pt-5">
                    <button 
                    onClick={() => setDeleteModelOpen(!deleteModelOpen)}
                    className="px-6 py-2 border rounded-md hover:bg-gray-100" >
                        Cancel
                    </button>

                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" >
                     Delete
                    </button>
                </div>

            </div>
        </div>
    )
}

export default DeleteEmployee
