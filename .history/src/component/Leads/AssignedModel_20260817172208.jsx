import React, { useContext, useId, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { LeadContext } from '../../ContextAPI/LeadContext';


const AssignedModel = ({ openModel, setOpenModel, item, }) => {


    const { selectedLead, setSelectedLead, selectedEmp, setSelectedEmp } = useContext(LeadContext)
    // const [selectedEmp, setSelectedEmp] = useState(null)

    // const id = useId()

    const employees = JSON.parse(localStorage.getItem("employee"))
    const employee = employees.filter((emp) => !emp.isAdmin)
    console.log(employee)

    const handleClick = (item) => {
        setSelectedEmp(item)
    }

    const leads = JSON.parse(localStorage.getItem("leads"))
    console.log(leads)

    console.log(selectedEmp)

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
        <div  className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-5xl rounded-lg shadow-xl p-5">
                <div className="flex justify-between mx-2">
                    <div className="mb-3 center font-bold">
                        <p className="text-2xl">Assigned to</p>
                    </div>
                    <div>
                        <button onClick={() => setOpenModel(!openModel)}>
                            <IoClose size={28} />
                        </button>
                    </div>
                </div>
                <div className="mx-2">
                    <div className="text-lg mb-3">
                        <p>{item} lead selected</p>
                    </div>

                    <div className="w-100 h-50 overflow-auto">
                        {employee.map((item, index) => {
                            return (
                                <div className='flex gap-2 border-2 w-80 m-2 rounded-sm p-2'>
                                    <input type="radio" name="radio" onClick={() => handleClick(item)} />
                                    <p>{item.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-8 border-t pt-5">
                    <button
                        type="button"
                        onClick={() => setOpenModel(!openModel)}
                        className="px-6 py-2 border rounded-md hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={handleAssign}

                    >
                        Assigned
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AssignedModel
