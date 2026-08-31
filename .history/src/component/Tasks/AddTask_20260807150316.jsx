import React, { useContext, useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { TaskContext } from '../../ContextAPI/TaskContext';
import Select from 'react-select'

const AddTask = () => {

    const { taskData, setTaskData, open, setOpen, editedTask, setEditedTask } = useContext(TaskContext)

    const [selectEmployee, setSelectEmployee] = useState("")
    const [inputData, setInputData] = useState({
        relatedTask: "lead",
        title: "",
        description: "",
        lead: "",
        assign: "",
        priority: "Low",
        taskStatus: "Pending",
        createdDate: "",
        completedDate: ""
    })

    const leads = JSON.parse(localStorage.getItem("leads"))
    const emp = JSON.parse(localStorage.getItem("employee"))
    console.log(leads)
    console.log(emp)

    useEffect(() => {
        if (editedTask) {
            setInputData(editedTask)
        }
    }, [editedTask])

    console.log(editedTask)

    useEffect(() => {
        // if (!inputData.lead) return
        if (!inputData.lead) return
        console.log("enter")
        const leadData = leads.find((lead) => lead.name === inputData.lead)
        console.log(leadData)
        const employee = emp.find((emp) => emp.name === leadData.assignedTo)
        console.log(employee)
        setSelectEmployee(employee)
        setInputData((prev) => ({
            ...prev,
            assign: employee?.name || alert("plz assign Lead")
        }))
    }, [inputData.lead])

    console.log(selectEmployee)
    console.log(editedTask)

    const options = leads.map((lead) => ({
        value: lead.name,
        label: lead.name
    }))

    const priority = [
        { value: "Low", label: "Low" },
        { value: "High", label: "High" },
        { value: "Medium", label: "Medium" }
    ]

    const status = [
        { value: "Pending", label: "Pending" },
        { value: "Completed", label: "Completed" },
        { value: "Processing", label: "Processing" }
    ]

    const employee = emp.map((emp) => {
        return {
            value : emp.name,
            label : emp.name
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const task = JSON.parse(localStorage.getItem("tasks")) || []
        if (!editedTask) {
            const newTask = { ...inputData, id: crypto.randomUUID() }
            task.push(newTask)
            localStorage.setItem("tasks", JSON.stringify(task))
            setTaskData((prev) => [...prev, newTask])
            setInputData({
                relatedTask: "lead",
                title: "",
                description: "",
                lead: "",
                assign: "",
                priority: "Low",
                taskStatus: "Pending",
                createdDate: "",
                completedDate: ""
            })
            setSelectEmployee("")
        } else {
            const updateTask = task.map((task) => {
                if (task.id === editedTask.id) {
                    return {
                        ...inputData,
                        id: editedTask.id
                    }
                }
                return task
            })
            localStorage.setItem("tasks", JSON.stringify(updateTask))
            setTaskData(updateTask)
            setEditedTask(null)
            setSelectEmployee(null)
        }
        setOpen(!open)
    }

    console.log(taskData)
    console.log(inputData)
    if (!open) return
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-white w-full max-w-5xl rounded-lg shadow-xl">
                <div className="flex justify-between m-4">
                    <p className="text-2xl font-semibold">
                        {editedTask ? "Update Task" : "Task Register"}
                    </p>
                    <button onClick={() => {
                        setOpen(!open), setSelectEmployee(null), setEditedTask(null), setInputData({
                            relatedTask: "lead",
                            title: "",
                            description: "",
                            lead: "",
                            assign: "",
                            priority: "Low",
                            taskStatus: "Pending",
                            createdDate: "",
                            completedDate: ""
                        })
                    }}>
                        <IoClose size={28} />
                    </button>
                </div>
                <form className="p-6" onSubmit={handleSubmit}>
                    <div className="flex ">
                        <label className="pr-3 font-medium">Related Task : </label>
                        <div className="flex gap-2 w-60">
                            <input type="radio" checked={inputData.relatedTask === "lead"} onChange={handleChange} name="relatedTask" value="lead" />Lead
                            <input type="radio" checked={inputData.relatedTask === "general"} onChange={handleChange} name="relatedTask" value="general" />General
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                        <div className="flex flex-col">
                            <label className="font-medium">Title :</label>
                            <input name="title"
                                value={inputData.title}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleChange} type="text" placeholder="enter task title" />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Description</label>
                            <input name="description"
                                value={inputData.description}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleChange} type="text" placeholder='enter task description' />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Lead</label>
                            <Select
                                options={options}
                                name="lead"
                                value={options.find(option => option.value === inputData.lead)}
                                placeholder="select Lead"
                                onChange={(selectedOption) => {
                                    setInputData((prev) => ({
                                        ...prev,
                                        lead: selectedOption.value
                                    }))
                                }}
                                className="mt-2 border rounded"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Assign :</label>
                            {inputData.relatedTask === "general"
                                ?  :
                                <div className="w-full mt-2 h-10 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="assign" value={selectEmployee ? selectEmployee.name : inputData.assign}>{selectEmployee ? selectEmployee.name : ""}</div>}
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Priority</label>
                            <Select
                                options={priority}
                                name="status"
                                value={options.find(option => option.value === inputData.priority)}
                                placeholder={inputData.priority}
                                onChange={(selectedOption => {
                                    setInputData((prev) => ({
                                        ...prev,
                                        priority: selectedOption.value
                                    }))
                                })}
                                className="mt-2 border rounded"

                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Task Status</label>

                            <Select
                                options={status}
                                name="taskStatus"
                                placeholder={inputData.taskStatus}
                                value={options.find(option => option.value === inputData.taskStatus)}
                                onChange={(selectValue => {
                                    setInputData((prev) => ({
                                        ...prev,
                                        taskStatus: selectValue.value
                                    }))
                                })}
                                className="mt-2 border rounded"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">created date</label>
                            <input value={inputData.createdDate} onChange={handleChange} name="createdDate" className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="date" />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-8 border-t pt-5">
                        <button
                            type="button"
                            onClick={() => {
                                setOpen(!open), setEditedTask(null), setSelectEmployee(null), setInputData({
                                    title: "",
                                    description: "",
                                    lead: "",
                                    assign: "",
                                    priority: "Low",
                                    taskStatus: "Pending",
                                    createdDate: "",
                                    completedDate: ""
                                })
                            }}
                            className="px-6 py-2 border rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            {editedTask ? "Update Task" : "Add Task"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask
