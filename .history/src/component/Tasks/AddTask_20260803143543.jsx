import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";

const AddTask = ({ open, setOpen }) => {
    const [taskData, setTaskData] = useState([])
    const [selectEmployee, setSelectEmployee] = useState("")
    const [inputData, setInputData] = useState({
        title: "",
        description: "",
        lead: "",
        assign: "",
        priority: "",
        taskStatus: "",
        createdDate: "",
        completedDate: ""
    })

    const leads = JSON.parse(localStorage.getItem("leads"))
    const emp = JSON.parse(localStorage.getItem("employee"))
    console.log(emp)


    // const selectedEmployee = (e,leadName) => {
    //     const leadData = leads.find((lead) => lead.name === leadName)
    //     console.log(leadData)
    //     const employee = emp.find((emp) => emp.name === leadData.assignedTo)
    //     setSelectEmployee(employee)
    //     console.log(employee)
    // }

    useEffect(() => {
        if (!inputData.lead) return

        const leadData = leads.find((lead) => lead.name === inputData.lead)

        const employee = emp.find((emp) => emp.name === leadData.assignedTo)

        setSelectEmployee(employee)

        setInputData((prev) => ({
            ...prev,
            assign: employee?.name || ""
        }))
    }, [inputData.lead])

    console.log(selectEmployee)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTaskData((prev) => [...prev, inputData])
    }

    console.log(taskData)
    console.log(inputData)
    if (!open) return
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white w-full max-w-5xl rounded-lg shadow-xl">
                <div className="flex justify-between m-4">
                    <p>
                        Task information
                    </p>
                    <button onClick={() => setOpen(!open)}>
                        <IoClose size={28} />
                    </button>
                </div>
                <form className="p-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col">
                            <label className="font-medium">Title :</label>
                            <input name="title"
                             className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange} type="text" placeholder="enter task title" />
                        </div>

                        <div  className="flex flex-col">
                            <label className="font-medium">Description</label>
                            <input name="description" className="border rounded" onChange={handleChange} type="text" placeholder='enter task description' />
                        </div>

                        <div  className="flex flex-col">
                            <label className="font-medium">Lead</label>
                            <select name="lead" className="border rounded" onChange={(e) => { handleChange(e), selectedEmployee() }}>
                                <option disabled selected>Select Lead</option>
                                {leads.map((lead) => {
                                    return (
                                        <option>{lead.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div  className="flex flex-col">
                            <label className="font-medium">Assign :</label>
                            <div className="border rounded" name="assign" value={selectEmployee.name}>{selectEmployee.name}</div>
                        </div>

                        <div  className="flex flex-col">
                            <label className="font-medium">Priority</label>
                            <select className="border rounded" name="priority" onChange={handleChange}>
                                <option>Low</option>
                                <option>High</option>
                                <option>Medium</option>
                            </select>
                        </div>

                        <div  className="flex flex-col">
                            <label className="font-medium">Task Status</label>
                            <select className="border rounded" name="taskStatus" onChange={handleChange}>
                                <option>Pending</option>
                                <option>Completed</option>
                                <option>Processing</option>
                            </select>
                        </div>

                        <div  className="flex flex-col">
                            <label className="font-medium">created date</label>
                            <input onChange={handleChange} name="createdDate" className="border rounded" type="date" />
                        </div>

                        <button>Add Task</button>
                        <button onClick={() => setOpen(!open)}>Cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask
