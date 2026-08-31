import React, { useContext, useEffect, useState } from "react"
import { IoClose } from "react-icons/io5"
import { LeadContext } from "../../ContextAPI/LeadContext"
import Select from "react-select"

const AddLead = ({ open, setOpen, setEditedLead, editedLead }) => {

    const date = new Date()

    const sourceOption = [
        { value: "Website", label: "Website" },
        { value: "Walk-in", label: "Walk-in" },
        { value: "Referral", label: "Referral" },
        { value: "Social-media", label: "Social-media" }
    ]

    const statusOption = [
        { value: "New", label: "New" },
        { value: "Connected", label: "Connected" },
        { value: "Qualified", label: "Qualified" },
        { value: "Site-Visit", label: "Site-Visit" },
        { value: "Negotiation", label: "Negotiation" },
        { value: "Converted", label: "Converted" },
        { value: "Lost", label: "Lost" }
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

    useEffect(() => {
        if (editedLead) {
            setInputData(editedLead)
        }
    }, [editedLead])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        const leads = JSON.parse(localStorage.getItem("leads")) || []

        e.preventDefault()

        if (editedLead) {

            const findLead = leads.map((lead) => {
                if (lead.id === editedLead.id) {
                    return {
                        ...inputData,
                        id: editedLead.id
                    }
                }

                return lead
            })

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
                note: "",
                date: "",
                convertedDate: "",
                lostDate: "",
                nextFollowUpdate: "",
                createdAt: date
            })

            setEditedLead(null)

        } else {

            const newLead = {
                ...inputData,
                id: crypto.randomUUID()
            }

            leads.push(newLead)

            localStorage.setItem(
                "leads",
                JSON.stringify(leads)
            )

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

    const selectStyles = {
        control: (base, state) => ({
            ...base,
            minHeight: "30px",
            height: "30px",
            borderRadius: "6px",
            borderColor: state.isFocused
                ? "#3b82f6"
                : "#e5e7eb",
            boxShadow: "none",
            fontSize: "10px",
            "&:hover": {
                borderColor: "#d1d5db"
            }
        }),

        valueContainer: (base) => ({
            ...base,
            padding: "0 8px"
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "30px"
        }),

        indicatorSeparator: () => ({
            display: "none"
        }),

        option: (base, state) => ({
            ...base,
            fontSize: "10px",
            padding: "7px 9px",
            backgroundColor: state.isSelected
                ? "#eff6ff"
                : state.isFocused
                    ? "#f9fafb"
                    : "#fff",
            color: "#374151"
        }),

        menu: (base) => ({
            ...base,
            zIndex: 100
        })
    }

    return (
        <>
            {/* Overlay */}
            <div
                className="
                    fixed inset-0
                    bg-black/30
                    backdrop-blur-[1px]
                    z-40
                "
                onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <div
                className="
                    fixed
                    top-0
                    right-0
                    z-50
                    h-full
                    w-[360px]
                    bg-white
                    shadow-2xl
                    border-l
                    border-gray-200
                    flex
                    flex-col
                "
            >

                {/* Header */}
                <div
                    className="
                        h-[58px]
                        px-4
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-200
                        bg-white
                    "
                >
                    <div>
                        <h2 className="text-[13px] font-semibold text-gray-900">
                            {editedLead ? "Edit Lead" : "Add Lead"}
                        </h2>

                        <p className="text-[9px] text-gray-400 mt-0.5">
                            {editedLead
                                ? "Update lead information"
                                : "Create a new lead"}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="
                            w-7 h-7
                            flex items-center justify-center
                            rounded-md
                            text-gray-400
                            hover:bg-gray-100
                            hover:text-gray-700
                            transition
                        "
                    >
                        <IoClose size={17} />
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="
                        flex-1
                        flex
                        flex-col
                        min-h-0
                    "
                >

                    {/* Body */}
                    <div
                        className="
                            flex-1
                            overflow-y-auto
                            px-4
                            py-4
                        "
                    >

                        {/* ================= BASIC INFORMATION ================= */}
                        <div className="mb-5">

                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1 h-3.5 bg-blue-600 rounded-full" />

                                <h3 className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-gray-800
                                ">
                                    Basic Information
                                </h3>
                            </div>

                            <div className="space-y-3">

                                {/* Name */}
                                <div>
                                    <label className="crm-label">
                                        Lead Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={inputData.name}
                                        onChange={handleChange}
                                        placeholder="Enter lead name"
                                        className="crm-input"
                                    />
                                </div>

                                {/* Phone + Email */}
                                <div className="grid grid-cols-2 gap-3">

                                    <div>
                                        <label className="crm-label">
                                            Phone
                                        </label>

                                        <input
                                            type="text"
                                            name="phone"
                                            value={inputData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone number"
                                            className="crm-input"
                                        />
                                    </div>

                                    <div>
                                        <label className="crm-label">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={inputData.email}
                                            onChange={handleChange}
                                            placeholder="Email address"
                                            className="crm-input"
                                        />
                                    </div>

                                </div>

                            </div>
                        </div>


                        {/* ================= LEAD DETAILS ================= */}
                        <div className="mb-5">

                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1 h-3.5 bg-blue-600 rounded-full" />

                                <h3 className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-gray-800
                                ">
                                    Lead Details
                                </h3>
                            </div>

                            <div className="space-y-3">

                                {/* Interested */}
                                <div>
                                    <label className="crm-label">
                                        Interested In
                                    </label>

                                    <input
                                        type="text"
                                        name="interested"
                                        value={inputData.interested}
                                        onChange={handleChange}
                                        placeholder="Property / Service"
                                        className="crm-input"
                                    />
                                </div>

                                {/* Budget + Location */}
                                <div className="grid grid-cols-2 gap-3">

                                    <div>
                                        <label className="crm-label">
                                            Budget
                                        </label>

                                        <input
                                            type="number"
                                            name="budget"
                                            value={inputData.budget}
                                            onChange={handleChange}
                                            placeholder="Budget"
                                            className="crm-input"
                                        />
                                    </div>

                                    <div>
                                        <label className="crm-label">
                                            Preferred Location
                                        </label>

                                        <input
                                            type="text"
                                            name="preferredLocation"
                                            value={inputData.preferredLocation}
                                            onChange={handleChange}
                                            placeholder="Location"
                                            className="crm-input"
                                        />
                                    </div>

                                </div>

                                {/* Source + Status */}
                                <div className="grid grid-cols-2 gap-3">

                                    <div>
                                        <label className="crm-label">
                                            Source
                                        </label>

                                        <Select
                                            options={sourceOption}
                                            value={sourceOption.find(
                                                (item) =>
                                                    item.value === inputData.source
                                            )}
                                            onChange={(selected) =>
                                                setInputData((prev) => ({
                                                    ...prev,
                                                    source: selected.value
                                                }))
                                            }
                                            styles={selectStyles}
                                            isSearchable={false}
                                        />
                                    </div>

                                    <div>
                                        <label className="crm-label">
                                            Status
                                        </label>

                                        <Select
                                            options={statusOption}
                                            value={statusOption.find(
                                                (item) =>
                                                    item.value === inputData.status
                                            )}
                                            onChange={(selected) =>
                                                setInputData((prev) => ({
                                                    ...prev,
                                                    status: selected.value
                                                }))
                                            }
                                            styles={selectStyles}
                                            isSearchable={false}
                                        />
                                    </div>

                                </div>

                            </div>
                        </div>


                        {/* ================= FOLLOW UP ================= */}
                        <div className="mb-5">

                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1 h-3.5 bg-blue-600 rounded-full" />

                                <h3 className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-gray-800
                                ">
                                    Follow-up
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">

                                <div>
                                    <label className="crm-label">
                                        Follow-up Date
                                    </label>

                                    <input
                                        type="date"
                                        name="nextFollowUpDate"
                                        value={inputData.nextFollowUpDate}
                                        onChange={handleChange}
                                        className="crm-input"
                                    />
                                </div>

                                <div>
                                    <label className="crm-label">
                                        Lead Date
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        value={inputData.date}
                                        onChange={handleChange}
                                        className="crm-input"
                                    />
                                </div>

                            </div>
                        </div>


                        {/* ================= NOTES ================= */}
                        <div className="mb-3">

                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1 h-3.5 bg-blue-600 rounded-full" />

                                <h3 className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-gray-800
                                ">
                                    Notes
                                </h3>
                            </div>

                            <textarea
                                name="note"
                                value={inputData.note}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Add notes about this lead..."
                                className="
                                    w-full
                                    px-2.5
                                    py-2
                                    rounded-md
                                    border
                                    border-gray-200
                                    text-[10px]
                                    text-gray-700
                                    placeholder:text-gray-400
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
                    <div
                        className="
                            h-[55px]
                            flex
                            items-center
                            justify-end
                            gap-2
                            px-4
                            border-t
                            border-gray-200
                            bg-gray-50/80
                        "
                    >

                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="
                                h-7
                                px-3
                                rounded-md
                                border
                                border-gray-200
                                bg-white
                                text-[10px]
                                font-medium
                                text-gray-600
                                hover:bg-gray-50
                                transition
                            "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="
                                h-7
                                px-4
                                rounded-md
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                text-[10px]
                                font-medium
                                shadow-sm
                                transition
                            "
                        >
                            {editedLead
                                ? "Update Lead"
                                : "Add Lead"}
                        </button>

                    </div>

                </form>
            </div>

            {/* Small CRM form styles */}
            <style>
                {`
                    .crm-label {
                        display: block;
                        font-size: 10px;
                        font-weight: 500;
                        color: #4b5563;
                        margin-bottom: 5px;
                    }

                    .crm-input {
                        width: 100%;
                        height: 30px;
                        padding: 0 9px;
                        border: 1px solid #e5e7eb;
                        border-radius: 6px;
                        background: white;
                        color: #374151;
                        font-size: 10px;
                        outline: none;
                        transition: all 0.15s ease;
                    }

                    .crm-input::placeholder {
                        color: #9ca3af;
                    }

                    .crm-input:focus {
                        border-color: #3b82f6;
                        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.08);
                    }
                `}
            </style>
        </>
    )
}

export default AddLead