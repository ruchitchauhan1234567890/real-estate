import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const AddLead = ({ open, setOpen, setLeadData }) => {


    const [inputData, setInputData] = useState({
        name: "",
        phone: "",
        email: "",
        interested: "",
        budget: 0,
        preferredLocation: "",
        source: "Website",
        status: "New",
        assignedTo: "Ruchit Chauhan",
        note: "",
        date: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLeadData((prev) => [...prev, inputData])
        const leads = JSON.parse(localStorage.getItem("leads")) || [];
        leads.push(inputData)
        localStorage.setItem("leads", JSON.stringify(leads))
        setInputData({
            name: "",
            phone: "",
            email: "",
            interested: "",
            budget: 0,
            preferredLocation: "",
            source: "Website",
            status: "New",
            assignedTo: "Ruchit Chauhan",
            note: ""
        })

        setOpen(!open)
    }

    console.log(inputData)

    if (!open) return
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-5xl rounded-lg shadow-xl">
                <div className="flex justify-between items-center border-b px-6 py-4">
                    <p className="text-2xl font-semibold">Lead Register</p>
                    <button onClick={() => setOpen(!open)}>
                        <IoClose size={28} />
                    </button>
                </div>
                <form className="p-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col">
                            <label className="font-medium">Full-Name</label>
                            <input
                                type="text"
                                placeholder='Enter The Lead Name'
                                name="name"
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Phone</label>
                            <input
                                type="number"
                                placeholder="Enter Phone"
                                name="phone"
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Interested In</label>
                            <input
                                type="text"
                                placeholder='Interested In'
                                name="interested"
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Budget</label>
                            <input
                                type="number"
                                placeholder='Enter Budget'
                                name="budget"
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Preferred Location</label>
                            <input
                                type="text"
                                placeholder='Enter Location'
                                name="preferredLocation"
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Source</label>
                            <select onChange={handleChange} className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="source">
                                <option>Website</option>
                                <option>Walk-in</option>
                                <option>Referral</option>
                                <option>Social-media</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Status</label>
                            <select onChange={handleChange} className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="status">
                                <option>New</option>
                                <option>Connected</option>
                                <option>Qualified</option>
                                <option>Site-Visit</option>
                                <option>Negotiation</option>
                                <option>Converted</option>
                                <option>Lost</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Add On</label>
                            <input type="date" name="date" onChange={handleChange} className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                        </div>

                        {/* <div className="flex flex-col"> */}
                            <label className="font-medium">Assigned To</label>
                            <select onChange={handleChange} className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="assignedTo">
                                <option>Ruchit Chauhan</option>
                                <option>Harpal Chauhan</option>
                                <option>Sandip Parmar</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Note</label>
                            <input
                                type="text"
                                placeholder='Enter Note'
                                name="note"
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
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

export default AddLead
