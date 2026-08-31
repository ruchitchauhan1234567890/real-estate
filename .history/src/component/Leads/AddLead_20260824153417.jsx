import React, { useContext, useEffect, useId, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { LeadContext } from '../../ContextAPI/LeadContext';
import Select from 'react-select';

const AddLead = ({ open, setOpen, setEditedLead, editedLead }) => {

    const date = new Date

    const sourceOption = [
        { value: "Website", label: "Website" },
        { value: "Walk-in", label: "Walk-in" },
        { value: "Referral", label: "Referral" },
        { value: "Social-media", label: 'Social-media' }
    ]

    const statusOption = [
        { value: "New", label: "New" },
        { value: "Connected", label: "Connected" },
        { value: "Qualified", label: "Qualified" },
        { value: "Site-Visit", label: 'Site-Visit' },
        { value: "Negotiation", label: "Negotiation" },
        { value: "Converted", label: "Converted" },
        { value: "Lost", label: 'Lost' }
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
        note: "",
        date: "",
        convertedDate: "",
        lostDate: "",
        nextFollowUpDate: "",
        createdAt: date
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
        if (editedLead) {
            console.log("in edited LEad")
            const findLead = leads.map((lead) => {
                if (lead.id === editedLead.id) {
                    return {
                        ...inputData,
                        id: editedLead.id
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
                convertedDate: "",
                lostDate: "",
                nextFollowUpdate: "",
                createdAt: date
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
                convertedDate: "",
                lostDate: "",
                nextFollowUpdate: "",
                createdAt: date
            })
        }
        setOpen(!open)

    }

    // console.log(inputData)

    // if (!open) return
    return (
        <>
            {/* Overlay */}
            <div
                className="
                fixed
                inset-0
                bg-black/30
                z-40
            "
                onClick={() => setOpen(false)}
            />

            {/* Right Sidebar */}
            <div
                className="
                fixed
                top-0
                right-0
                z-50
                h-full
                w-[380px]
                bg-white
                shadow-2xl
                border-l
                border-gray-200
                flex
                flex-col
            "
            >

                {/* Header */}
                <div className="
                flex
                items-center
                justify-between
                px-5
                py-4
                border-b
                border-gray-200
            ">
                    <div>
                        <h2 className="
                        text-[15px]
                        font-semibold
                        text-gray-900
                    ">
                            {editedLead ? "Edit Lead" : "Add Lead"}
                        </h2>

                        <p className="
                        text-[10px]
                        text-gray-500
                        mt-0.5
                    ">
                            {editedLead
                                ? "Update lead information"
                                : "Create a new lead"}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="
                        w-7
                        h-7
                        flex
                        items-center
                        justify-center
                        rounded-md
                        text-gray-400
                        hover:bg-gray-100
                        hover:text-gray-700
                        text-lg
                    "
                    >
                        ×
                    </button>
                </div>


                {/* Form Body */}
                <div className="
                flex-1
                overflow-y-auto
                px-5
                py-4
            ">

                    {/* Basic Information */}
                    <div className="mb-5">

                        <h3 className="
                        text-[11px]
                        font-semibold
                        text-gray-900
                        mb-3
                    ">
                            Lead Information
                        </h3>

                        <div className="space-y-3">

                            {/* Your existing fields go here */}

                            <div>
                                <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1
                            ">
                                    Lead Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter lead name"
                                    className="
                                    w-full
                                    h-8
                                    px-2.5
                                    rounded-md
                                    border
                                    border-gray-200
                                    bg-white
                                    text-[11px]
                                    text-gray-800
                                    outline-none
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-100
                                "
                                />
                            </div>


                            <div className="grid grid-cols-2 gap-3">

                                <div>
                                    <label className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    mb-1
                                ">
                                        Phone
                                    </label>

                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone number"
                                        className="
                                        w-full
                                        h-8
                                        px-2.5
                                        rounded-md
                                        border
                                        border-gray-200
                                        text-[11px]
                                        outline-none
                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-100
                                    "
                                    />
                                </div>

                                <div>
                                    <label className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    mb-1
                                ">
                                        Source
                                    </label>

                                    <select
                                        name="source"
                                        value={formData.source}
                                        onChange={handleChange}
                                        className="
                                        w-full
                                        h-8
                                        px-2
                                        rounded-md
                                        border
                                        border-gray-200
                                        text-[11px]
                                        text-gray-700
                                        bg-white
                                        outline-none
                                        focus:border-blue-500
                                    "
                                    >
                                        {/* KEEP YOUR EXISTING OPTIONS */}
                                    </select>
                                </div>

                            </div>

                        </div>
                    </div>


                    {/* Lead Details */}
                    <div className="mb-5">

                        <h3 className="
                        text-[11px]
                        font-semibold
                        text-gray-900
                        mb-3
                    ">
                            Lead Details
                        </h3>

                        <div className="space-y-3">

                            {/* Interested */}
                            <div>
                                <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1
                            ">
                                    Interested In
                                </label>

                                {/* Keep your existing input/select */}
                            </div>


                            {/* Status */}
                            <div>
                                <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1
                            ">
                                    Status
                                </label>

                                {/* Keep your existing status select */}
                            </div>


                            {/* Assigned To */}
                            <div>
                                <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1
                            ">
                                    Assigned To
                                </label>

                                {/* Keep your existing assigned select */}
                            </div>

                        </div>
                    </div>


                    {/* Follow Up */}
                    <div className="mb-5">

                        <h3 className="
                        text-[11px]
                        font-semibold
                        text-gray-900
                        mb-3
                    ">
                            Follow-up
                        </h3>

                        <div className="grid grid-cols-2 gap-3">

                            <div>
                                <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1
                            ">
                                    Follow-up Date
                                </label>

                                {/* Your existing date input */}
                            </div>

                            <div>
                                <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1
                            ">
                                    Follow-up Time
                                </label>

                                {/* Your existing time input */}
                            </div>

                        </div>
                    </div>


                    {/* Notes */}
                    <div className="mb-5">

                        <h3 className="
                        text-[11px]
                        font-semibold
                        text-gray-900
                        mb-3
                    ">
                            Notes
                        </h3>

                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Add notes..."
                            className="
                            w-full
                            px-2.5
                            py-2
                            rounded-md
                            border
                            border-gray-200
                            text-[11px]
                            resize-none
                            outline-none
                            focus:border-blue-500
                            focus:ring-1
                            focus:ring-blue-100
                        "
                        />

                    </div>

                </div>


                {/* Footer */}
                <div className="
                border-t
                border-gray-200
                px-5
                py-3
                flex
                justify-end
                gap-2
                bg-white
            ">

                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="
                        px-3
                        py-1.5
                        rounded-md
                        border
                        border-gray-200
                        text-[10px]
                        font-medium
                        text-gray-600
                        hover:bg-gray-50
                    "
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="
                        px-4
                        py-1.5
                        rounded-md
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        text-[10px]
                        font-medium
                        shadow-sm
                    "
                    >
                        {editedLead ? "Update Lead" : "Add Lead"}
                    </button>

                </div>

            </div>
        </>
    )
}

export default AddLead
