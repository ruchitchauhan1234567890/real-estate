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
        const task = JSON.parse(localStorage.getItem("tasks")) || []
        const newTask = {...inputData, id : crypto.randomUUID()}
        task.push(newTask)
        localStorage.setItem("tasks", JSON.stringify(task))
    }

    console.log(taskData)
    console.log(inputData)
    if (!open) return
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-white w-full max-w-5xl rounded-lg shadow-xl">
                <div className="flex justify-between m-4">
                    <p className="text-2xl font-semibold">
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

                        <div className="flex flex-col">
                            <label className="font-medium">Description</label>
                            <input name="description" className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleChange} type="text" placeholder='enter task description' />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Lead</label>
                            <select name="lead" className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => { handleChange(e), selectedEmployee() }}>
                                <option disabled selected>Select Lead</option>
                                {leads.map((lead) => {
                                    return (
                                        <option>{lead.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Assign :</label>
                            <div className="w-full mt-2 h-10 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                name="assign" value={selectEmployee.name}>{selectEmployee.name}</div>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Priority</label>
                            <select className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                name="priority" onChange={handleChange}>
                                <option>Low</option>
                                <option>High</option>
                                <option>Medium</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Task Status</label>
                            <select className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                name="taskStatus" onChange={handleChange}>
                                <option>Pending</option>
                                <option>Completed</option>
                                <option>Processing</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">created date</label>
                            <input onChange={handleChange} name="createdDate" className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="date" />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-8 border-t pt-5">
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="px-6 py-2 border rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Add Lead
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask
