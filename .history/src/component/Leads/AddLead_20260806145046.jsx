import React, { useContext, useEffect, useId, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { LeadContext } from '../../ContextAPI/LeadContext';
import Select from 'react-select';

const AddLead = ({ open, setOpen, setEditedLead, editedLead }) => {

    const sourceOption = [
        {value : "Website", label: "Website"},
        {value : "Walk-in", label : "Walk-in"},
        {value : "Referral", label: "Referral"},
        {value : "Social-media", label : 'Social-media'}
    ]

    const statusOption = [
        {value: "New", label: "New"},
        {value : "Connected", label : "Connected"},
        {value : "Qualified", label : "Qualified"},
        {value : "Site-Visit", label: 'Site-Visit'},
        {value : "Negotiation", label : "Negotiation"},
        {value : "Converted", label : "Converted"},
        {value : "Lost", label : 'Lost'}
    ]
    const { setLeadData } = useContext(LeadContext)

    const [inputData, setInputData] = useState({
        name: "",
        phone: "",
        email: "",
        interested: "",
        budget: 0,
        preferredLocation: "",
        source: "Website",
        status: "New",
        // assignedTo: "Ruchit Chauhan",
        note: "",
        date: "",
        nextFollowUpDate: ""
    })

    console.log(inputData)

    useEffect(() => {
        if (editedLead) {
            setInputData(editedLead)
        }
    }, [editedLead])

    console.log(editedLead)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData((prev) => ({ ...prev, [name]: value }))
    }

    console.log(editedLead)

    const handleSubmit = (e) => {
        const leads = JSON.parse(localStorage.getItem("leads")) || [];
        e.preventDefault()
        if(editedLead){
            console.log("in edited LEad")
            const findLead = leads.map((lead) => {
                if(lead.id === editedLead.id) {
                    return { 
                        ...inputData,
                        id : editedLead.id
                    }
                }
                return lead
            })
            console.log(findLead)
            localStorage.setItem("leads", JSON.stringify(findLead))
            setLeadData(findLead)
            setInputData({
                name: "",
                phone: "",
                email: "",
                interested: "",
                budget: 0,
                preferredLocation: "",
                source: "Website",
                status: "New",
                // assignedTo: "Ruchit Chauhan",
                note: "",
                date: "",
                nextFollowUpdate: ""
            })
            setEditedLead(null)
        } else {
            const newLead = { ...inputData, id: crypto.randomUUID() }
            leads.push(newLead)
            localStorage.setItem("leads", JSON.stringify(leads))
            setLeadData((prev) => [...prev, leads])
            setInputData({
                name: "",
                phone: "",
                email: "",
                interested: "",
                budget: 0,
                preferredLocation: "",
                source: "Website",
                status: "New",
                // assignedTo: "Ruchit Chauhan",
                note: "",
                date: "",
                nextFollowUpdate: ""
            })
        }
        setOpen(!open)

    }

    // console.log(inputData)

    // if (!open) return
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-5xl rounded-lg shadow-xl">
                <div className="flex justify-between items-center border-b px-6 py-4">
                    <p className="text-2xl font-semibold">{editedLead ? "Update Lead" : "Lead Register"}</p>
                    <button onClick={() => { setOpen(!open), setEditedLead(null) }}>
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
                                value={inputData.name}
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={inputData.email}
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Phone</label>
                            <input
                                type="number"
                                placeholder="Enter Phone"
                                name="phone"
                                value={inputData.phone}
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Interested In</label>
                            <input
                                type="text"
                                placeholder='Interested In'
                                name="interested"
                                value={inputData.interested}
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Budget</label>
                            <input
                                type="number"
                                placeholder='Enter Budget'
                                name="budget"
                                value={inputData.budget}
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Preferred Location</label>
                            <input
                                type="text"
                                placeholder='Enter Location'
                                name="preferredLocation"
                                value={inputData.preferredLocation}
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Source</label>
                            <Select
                                options={sourceOption}
                                placeholder={inputData.source}
                                onChange={(selectOption) => 
                                    setInputData((prev) => ({
                                        ...prev,
                                        source : selectOption.value
                                    }))
                                }
                                className="mt-2 border rounded"
                                />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Status</label>
                            <Select
                            options={statusOption}
                            placeholder={inputData.status}
                            onChange={(selectOption) => 
                                setInputData((prev)=> ({
                                    ...prev,
                                    status : selectOption.value
                                }))
                            }
                            className="border rounded mt-2"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium">Add On</label>
                            <input type="date" name="date" value={inputData.date} onChange={handleChange} className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* <div className="flex flex-col">
                            <label className="font-medium">Assigned To</label>
                            <select onChange={handleChange} className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" name="assignedTo">
                                <option>Ruchit Chauhan</option>
                                <option>Harpal Chauhan</option>
                                <option>Sandip Parmar</option>
                            </select>
                        </div> */}
                        <div className="flex flex-col">
                            <label className="font-medium">Note</label>
                            <input
                                type="text"
                                placeholder='Enter Note'
                                name="note"
                                value={inputData.note}
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-8 border-t pt-5">
                        <button
                            type="button"
                            onClick={() => { setOpen(!open), setEditedLead(null) }}
                            className="px-6 py-2 border rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        > {editedLead ? "Update" : "Add Lead"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddLead
