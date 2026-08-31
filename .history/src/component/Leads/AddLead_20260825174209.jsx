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

    const resetForm = () => {
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
            nextFollowUpDate: "",
            createdAt: date
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const leads =
            JSON.parse(localStorage.getItem("leads")) || []

        if (editedLead) {

            const updatedLeads = leads.map((lead) => {

                if (lead.id === editedLead.id) {
                    return {
                        ...inputData,
                        id: editedLead.id
                    }
                }

                return lead
            })

            localStorage.setItem(
                "leads",
                JSON.stringify(updatedLeads)
            )

            setLeadData(updatedLeads)

        } else {

            const newLead = {
                ...inputData,
                id: crypto.randomUUID()
            }

            const updatedLeads = [
                ...leads,
                newLead
            ]

            localStorage.setItem(
                "leads",
                JSON.stringify(updatedLeads)
            )

            setLeadData(updatedLeads)
        }

        resetForm()
        setEditedLead(null)
        setOpen(false)
    }

    const selectStyles = {

        control: (base, state) => ({
            ...base,

            minHeight: "30px",
            height: "30px",

            borderRadius: "6px",

            borderColor: state.isFocused
                ? "#3b82f6"
                : "#374151",

            backgroundColor:
                document.documentElement.classList.contains("dark")
                    ? "#1f2937"
                    : "#ffffff",

            boxShadow: state.isFocused
                ? "0 0 0 1px #3b82f6"
                : "none",

            fontSize: "10px",

            color:
                document.documentElement.classList.contains("dark")
                    ? "#f3f4f6"
                    : "#374151",

            "&:hover": {
                borderColor: "#3b82f6"
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

        singleValue: (base) => ({
            ...base,
            color:
                document.documentElement.classList.contains("dark")
                    ? "#f3f4f6"
                    : "#374151",
            fontSize: "10px"
        }),

        placeholder: (base) => ({
            ...base,
            color: "#9ca3af",
            fontSize: "10px"
        }),

        option: (base, state) => {

            const dark =
                document.documentElement.classList.contains("dark")

            return {
                ...base,

                fontSize: "10px",
                padding: "7px 9px",

                backgroundColor:
                    state.isSelected
                        ? "#2563eb"
                        : state.isFocused
                            ? dark
                                ? "#374151"
                                : "#f9fafb"
                            : dark
                                ? "#1f2937"
                                : "#ffffff",

                color:
                    state.isSelected
                        ? "#ffffff"
                        : dark
                            ? "#f3f4f6"
                            : "#374151"
            }
        },

        menu: (base) => ({
            ...base,
            zIndex: 100,
            backgroundColor:
                document.documentElement.classList.contains("dark")
                    ? "#1f2937"
                    : "#ffffff"
        })
    }

    if (!open) return null

    return (
        <>

            {/* ================= OVERLAY ================= */}

            <div
                className="
                    fixed
                    inset-0
                    bg-black/30
                    dark:bg-black/60
                    backdrop-blur-[1px]
                    z-40
                "
                onClick={() => {
                    setOpen(false)
                    setEditedLead(null)
                }}
            />


            {/* ================= SIDEBAR ================= */}

            <div
                className="
                    fixed
                    top-0
                    right-0
                    z-50
                    h-full
                    w-[360px]
                    max-w-full

                    bg-white
                    dark:bg-[#1f1f2b]

                    shadow-2xl

                    border-l
                    border-gray-200
                    dark:border-[#303044]

                    flex
                    flex-col

                    transition-colors
                "
            >

                {/* ================= HEADER ================= */}

                <div
                    className="
                        h-[58px]
                        px-4
                        flex
                        items-center
                        justify-between

                        border-b
                        border-gray-200
                        dark:border-[#303044]

                        bg-white
                        dark:bg-[#1f1f2b]
                    "
                >

                    <div>

                        <h2 className="
                            text-[13px]
                            font-semibold
                            text-gray-900
                            dark:text-white
                        ">
                            {editedLead
                                ? "Edit Lead"
                                : "Add Lead"}
                        </h2>

                        <p className="
                            text-[9px]
                            text-gray-400
                            dark:text-gray-500
                            mt-0.5
                        ">
                            {editedLead
                                ? "Update lead information"
                                : "Create a new lead"}
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false)
                            setEditedLead(null)
                        }}
                        className="
                            w-7
                            h-7
                            flex
                            items-center
                            justify-center
                            rounded-md

                            text-gray-400
                            dark:text-gray-500

                            hover:bg-gray-100
                            dark:hover:bg-[#2a2a3c]

                            hover:text-gray-700
                            dark:hover:text-white

                            transition
                        "
                    >
                        <IoClose size={17} />
                    </button>

                </div>


                {/* ================= FORM ================= */}

                <form
                    onSubmit={handleSubmit}
                    className="
                        flex-1
                        flex
                        flex-col
                        min-h-0
                    "
                >

                    {/* ================= BODY ================= */}

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

                            <div className="
                                flex
                                items-center
                                gap-2
                                mb-3
                            ">

                                <div className="
                                    w-1
                                    h-3.5
                                    bg-blue-600
                                    rounded-full
                                />

                                <h3 className="
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-gray-800
                                    dark:text-gray-200 " >

                                    Basic Information
                                    
                                </h3>

                            </div>


                            <div className="space-y-3">

                                {/* Name */}

                                <div>

                                    <label className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-400
                                        mb-[5px]
                                    ">
                                        Lead Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={inputData.name}
                                        onChange={handleChange}
                                        placeholder="Enter lead name"
                                        className="
                                            w-full
                                            h-[30px]
                                            px-[9px]

                                            border
                                            border-gray-200
                                            dark:border-[#38384d]

                                            rounded-md

                                            bg-white
                                            dark:bg-[#272738]

                                            text-gray-700
                                            dark:text-gray-100

                                            text-[10px]

                                            placeholder:text-gray-400
                                            dark:placeholder:text-gray-600

                                            outline-none

                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-500/10
                                        "
                                    />

                                </div>


                                {/* Phone + Email */}

                                <div className="
                                    grid
                                    grid-cols-2
                                    gap-3
                                ">

                                    <div>

                                        <label className="
                                            block
                                            text-[10px]
                                            font-medium
                                            text-gray-600
                                            dark:text-gray-400
                                            mb-[5px]
                                        ">
                                            Phone
                                        </label>

                                        <input
                                            type="text"
                                            name="phone"
                                            value={inputData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone number"
                                            className="
                                                w-full
                                                h-[30px]
                                                px-[9px]
                                                border
                                                border-gray-200
                                                dark:border-[#38384d]
                                                rounded-md
                                                bg-white
                                                dark:bg-[#272738]
                                                text-gray-700
                                                dark:text-gray-100
                                                text-[10px]
                                                placeholder:text-gray-400
                                                dark:placeholder:text-gray-600
                                                outline-none
                                                focus:border-blue-500
                                                focus:ring-2
                                                focus:ring-blue-500/10
                                            "
                                        />

                                    </div>


                                    <div>

                                        <label className="
                                            block
                                            text-[10px]
                                            font-medium
                                            text-gray-600
                                            dark:text-gray-400
                                            mb-[5px]
                                        ">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={inputData.email}
                                            onChange={handleChange}
                                            placeholder="Email address"
                                            className="
                                                w-full
                                                h-[30px]
                                                px-[9px]
                                                border
                                                border-gray-200
                                                dark:border-[#38384d]
                                                rounded-md
                                                bg-white
                                                dark:bg-[#272738]
                                                text-gray-700
                                                dark:text-gray-100
                                                text-[10px]
                                                placeholder:text-gray-400
                                                dark:placeholder:text-gray-600
                                                outline-none
                                                focus:border-blue-500
                                                focus:ring-2
                                                focus:ring-blue-500/10
                                            "
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* ================= LEAD DETAILS ================= */}

                        <div className="mb-5">

                            <div className="
                                flex
                                items-center
                                gap-2
                                mb-3
                            ">

                                <div className="
                                    w-1
                                    h-3.5
                                    bg-blue-600
                                    rounded-full
                                " />

                                <h3 className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-gray-800
                                    dark:text-gray-200
                                ">
                                    Lead Details
                                </h3>

                            </div>


                            <div className="space-y-3">

                                {/* Interested */}

                                <div>

                                    <label className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-400
                                        mb-[5px]
                                    ">
                                        Interested In
                                    </label>

                                    <input
                                        type="text"
                                        name="interested"
                                        value={inputData.interested}
                                        onChange={handleChange}
                                        placeholder="Property / Service"
                                        className="
                                            w-full
                                            h-[30px]
                                            px-[9px]
                                            border
                                            border-gray-200
                                            dark:border-[#38384d]
                                            rounded-md
                                            bg-white
                                            dark:bg-[#272738]
                                            text-gray-700
                                            dark:text-gray-100
                                            text-[10px]
                                            placeholder:text-gray-400
                                            dark:placeholder:text-gray-600
                                            outline-none
                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-500/10
                                        "
                                    />

                                </div>


                                {/* Budget + Location */}

                                <div className="
                                    grid
                                    grid-cols-2
                                    gap-3
                                ">

                                    <div>

                                        <label className="
                                            block
                                            text-[10px]
                                            font-medium
                                            text-gray-600
                                            dark:text-gray-400
                                            mb-[5px]
                                        ">
                                            Budget
                                        </label>

                                        <input
                                            type="number"
                                            name="budget"
                                            value={inputData.budget}
                                            onChange={handleChange}
                                            placeholder="Budget"
                                            className="
                                                w-full
                                                h-[30px]
                                                px-[9px]
                                                border
                                                border-gray-200
                                                dark:border-[#38384d]
                                                rounded-md
                                                bg-white
                                                dark:bg-[#272738]
                                                text-gray-700
                                                dark:text-gray-100
                                                text-[10px]
                                                placeholder:text-gray-400
                                                dark:placeholder:text-gray-600
                                                outline-none
                                                focus:border-blue-500
                                                focus:ring-2
                                                focus:ring-blue-500/10
                                            "
                                        />

                                    </div>


                                    <div>

                                        <label className="
                                            block
                                            text-[10px]
                                            font-medium
                                            text-gray-600
                                            dark:text-gray-400
                                            mb-[5px]
                                        ">
                                            Preferred Location
                                        </label>

                                        <input
                                            type="text"
                                            name="preferredLocation"
                                            value={inputData.preferredLocation}
                                            onChange={handleChange}
                                            placeholder="Location"
                                            className="
                                                w-full
                                                h-[30px]
                                                px-[9px]
                                                border
                                                border-gray-200
                                                dark:border-[#38384d]
                                                rounded-md
                                                bg-white
                                                dark:bg-[#272738]
                                                text-gray-700
                                                dark:text-gray-100
                                                text-[10px]
                                                placeholder:text-gray-400
                                                dark:placeholder:text-gray-600
                                                outline-none
                                                focus:border-blue-500
                                                focus:ring-2
                                                focus:ring-blue-500/10
                                            "
                                        />

                                    </div>

                                </div>


                                {/* Source + Status */}

                                <div className="
                                    grid
                                    grid-cols-2
                                    gap-3
                                ">

                                    <div>

                                        <label className="
                                            block
                                            text-[10px]
                                            font-medium
                                            text-gray-600
                                            dark:text-gray-400
                                            mb-[5px]
                                        ">
                                            Source
                                        </label>

                                        <Select
                                            options={sourceOption}
                                            value={sourceOption.find(
                                                (item) =>
                                                    item.value ===
                                                    inputData.source
                                            )}
                                            onChange={(selected) =>
                                                setInputData((prev) => ({
                                                    ...prev,
                                                    source:
                                                        selected?.value || ""
                                                }))
                                            }
                                            styles={selectStyles}
                                            isSearchable={false}
                                        />

                                    </div>


                                    <div>

                                        <label className="
                                            block
                                            text-[10px]
                                            font-medium
                                            text-gray-600
                                            dark:text-gray-400
                                            mb-[5px]
                                        ">
                                            Status
                                        </label>

                                        <Select
                                            options={statusOption}
                                            value={statusOption.find(
                                                (item) =>
                                                    item.value ===
                                                    inputData.status
                                            )}
                                            onChange={(selected) =>
                                                setInputData((prev) => ({
                                                    ...prev,
                                                    status:
                                                        selected?.value || ""
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

                            <div className="
                                flex
                                items-center
                                gap-2
                                mb-3
                            ">

                                <div className="
                                    w-1
                                    h-3.5
                                    bg-blue-600
                                    rounded-full
                                " />

                                <h3 className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-gray-800
                                    dark:text-gray-200
                                ">
                                    Follow-up
                                </h3>

                            </div>


                            <div className="
                                grid
                                grid-cols-2
                                gap-3
                            ">

                                <div>

                                    <label className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-400
                                        mb-[5px]
                                    ">
                                        Follow-up Date
                                    </label>

                                    <input
                                        type="date"
                                        name="nextFollowUpDate"
                                        value={inputData.nextFollowUpDate}
                                        onChange={handleChange}
                                        className="
                                            w-full
                                            h-[30px]
                                            px-[9px]
                                            border
                                            border-gray-200
                                            dark:border-[#38384d]
                                            rounded-md
                                            bg-white
                                            dark:bg-[#272738]
                                            text-gray-700
                                            dark:text-gray-100
                                            text-[10px]
                                            outline-none
                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-500/10
                                        "
                                    />

                                </div>


                                <div>

                                    <label className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-400
                                        mb-[5px]
                                    ">
                                        Lead Date
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        value={inputData.date}
                                        onChange={handleChange}
                                        className="
                                            w-full
                                            h-[30px]
                                            px-[9px]
                                            border
                                            border-gray-200
                                            dark:border-[#38384d]
                                            rounded-md
                                            bg-white
                                            dark:bg-[#272738]
                                            text-gray-700
                                            dark:text-gray-100
                                            text-[10px]
                                            outline-none
                                            focus:border-blue-500
                                            focus:ring-2
                                            focus:ring-blue-500/10
                                        "
                                    />

                                </div>

                            </div>

                        </div>


                        {/* ================= NOTES ================= */}

                        <div className="mb-3">

                            <div className="
                                flex
                                items-center
                                gap-2
                                mb-3
                            ">

                                <div className="
                                    w-1
                                    h-3.5
                                    bg-blue-600
                                    rounded-full
                                " />

                                <h3 className="
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-gray-800
                                    dark:text-gray-200
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
                                    dark:border-[#38384d]

                                    bg-white
                                    dark:bg-[#272738]

                                    text-gray-700
                                    dark:text-gray-100

                                    text-[10px]

                                    placeholder:text-gray-400
                                    dark:placeholder:text-gray-600

                                    resize-none
                                    outline-none

                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-500/10
                                "
                            />

                        </div>

                    </div>


                    {/* ================= FOOTER ================= */}

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
                            dark:border-[#303044]

                            bg-gray-50
                            dark:bg-[#191925]
                        "
                    >

                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false)
                                setEditedLead(null)
                            }}
                            className="
                                h-7
                                px-3
                                rounded-md

                                border
                                border-gray-200
                                dark:border-[#38384d]

                                bg-white
                                dark:bg-[#272738]

                                text-[10px]
                                font-medium

                                text-gray-600
                                dark:text-gray-300

                                hover:bg-gray-50
                                dark:hover:bg-[#303044]

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

        </>
    )
}

export default AddLead