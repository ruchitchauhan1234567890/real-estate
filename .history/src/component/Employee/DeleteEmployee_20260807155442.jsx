import React, { useContext, useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import Select from 'react-select';
import { LeadContext } from '../../ContextAPI/LeadContext';
import { EmployeeContext } from '../../ContextAPI/EmployeeContext';

const DeleteEmployee = ({ setDeleteModelOpen, deleteModelOpen, deletedEmp }) => {

    const lead = JSON.parse(localStorage.getItem("leads"))
    const emp = JSON.parse(localStorage.getItem("employee"))
    const task = JSON.parse(localStorage.getItem("tasks"))

    // const {setLeadData} = useContext(LeadContext)
    // const {setData} = useContext(EmployeeContext)

    const [selectEmp, setSelectEmp] = useState(null)
    console.log(deletedEmp)

    if (!deleteModelOpen) return null

    const findEmp = emp.find((emp) => emp.id === deletedEmp)
    const findLeads = lead.filter((lead) => lead.assignedTo === findEmp.name)
    const findTasks = task.filter((task) => task.assign === findEmp.name)
    console.log(findTasks)
    console.log(findEmp)
    console.log("task", findLeads)

    const empOptions = emp
        .filter((emp) => emp.id !== findEmp.id)
        .map((emp) => ({
            value: emp.name,
            label: emp.name
        }))

    console.log(selectEmp)

    const handleDelete = () => {
        const updatedLead = lead.map((lead) => {
            console.log(lead)
            console.log(lead.assignedTo, "==", findEmp.name);
            if (lead.assignedTo === findEmp.name) {
                console.log(lead)
                const update = {
                    ...lead,
                    assignedTo: selectEmp
                };
                console.log('before', lead)
                console.log("after", update)

                return update
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


        const deleteEmp = emp.filter((emp) => emp.id !== deletedEmp)
        console.log(deleteEmp)
        localStorage.setItem("employee", JSON.stringify(deleteEmp))

        localStorage.setItem("leads", JSON.stringify(updatedLead))
        console.log(updatedLead)

        localStorage.setItem("tasks", JSON.stringify(updateTask))
        console.log("update task", updateTask)

        // setLeadData(updatedLead)
        // setData(deleteEmp)

        setDeleteModelOpen(!deleteModelOpen)
        setSelectEmp(null)
    }


    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className=" w-150 h-auto bg-white shadow rounded p-4" >
                <div className="flex justify-between mb-2">
                    <p>Delete Employee</p>
                    <button onClick={() => setDeleteModelOpen(!deleteModelOpen)}>
                        <IoClose size={28} />
                    </button>
                </div>
                <hr />

                <div className="mt-2">
                    {
                        (findTasks.length > 0 || findLeads.length > 0)
                            ? <p className="text-red-700 text-xs w-90 mb-4">
                                This employee has{" "}
                                <span className="font-bold text-red-900">
                                    {`${findLeads.length} assigned leads And`}
                                </span>{" "}
                                <span className="font-bold text-red-900">
                                    {`${findTasks.length} assigned Tasks`}
                                </span>{" "}
                                Please reassign those leads and tasks to another employee before deleting this employee.
                            </p>
                            :
                            <p>are you sure to delete emp</p>
                    }
                </div>

                {
                    (findLeads.length > 0 || findTasks.length > 0
                        ?
                        <form className="w-80 p-2 rounded border">
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
                        : ""
                    )
                }
                <div className="flex justify-end  gap-3 mt-2 border-t pt-5">
                    <button
                        onClick={() => setDeleteModelOpen(!deleteModelOpen)}
                        className="px-6 py-2 border rounded-md hover:bg-gray-100" >
                        Cancel
                    </button>

                    <button
                        disabled={!selectEmp}
                        className={`px-6 py-2 rounded-md ${!selectEmp
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>

            </div>
        </div>
    )
}

export default DeleteEmployee
