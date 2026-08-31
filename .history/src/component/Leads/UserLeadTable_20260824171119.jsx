import React, { useContext, useState } from "react"
import Select from "react-select"
import { LeadContext } from "../../ContextAPI/LeadContext"

const UserLeadTable = () => {

    const { setLeadData } = useContext(LeadContext)

    const [lead, setLead] = useState(
        JSON.parse(localStorage.getItem("leads")) || []
    )

    const [filters, setFilters] = useState({
        leadSearch: "",
        status: "All",
        todayFollowUp: "All"
    })

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    const handleChange = (e) => {
        const { value, name } = e.target

        setFilters((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const userLead = lead.filter(
        (curr) => curr.assignedTo === loggedUser.name
    )

    const today = new Date()
        .toISOString()
        .split("T")[0]

    const filterLead = userLead.filter((lead) => {

        const status =
            filters.status === "All" ||
            lead.status === filters.status

        const leadSearch =
            filters.leadSearch === "" ||
            lead.name
                ?.toLowerCase()
                .includes(filters.leadSearch.toLowerCase())

        const todaysFollowUp =
            filters.todayFollowUp === "All" ||
            lead.nextFollowUpDate === today

        return (
            status &&
            leadSearch &&
            todaysFollowUp
        )
    })

    const handleReset = () => {
        setFilters({
            leadSearch: "",
            status: "All",
            todayFollowUp: "All"
        })
    }

    const handleDateChange = (e, id) => {

        const { value } = e.target

        const leadChange = lead.map((lead) => {

            if (lead.id === id) {
                return {
                    ...lead,
                    nextFollowUpDate: value
                }
            }

            return lead
        })

        setLead(leadChange)
        setLeadData(leadChange)

        localStorage.setItem(
            "leads",
            JSON.stringify(leadChange)
        )
    }

    const handleStatusChange = (value, id) => {

        const today = new Date()
            .toISOString()
            .split("T")[0]

        const leadChange = lead.map((lead) => {

            if (lead.id === id) {

                return {
                    ...lead,
                    status: value,
                    convertedDate:
                        value === "Converted"
                            ? today
                            : "",
                    lostDate:
                        value === "Lost"
                            ? today
                            : ""
                }
            }

            return lead
        })

        setLead(leadChange)
        setLeadData(leadChange)

        localStorage.setItem(
            "leads",
            JSON.stringify(leadChange)
        )
    }


    // =========================
    // STATUS OPTIONS
    // =========================

    const statusOptions = [
        { value: "All", label: "All" },
        { value: "New", label: "New" },
        { value: "Connected", label: "Connected" },
        { value: "Qualified", label: "Qualified" },
        { value: "Site-Visit", label: "Site Visit" },
        { value: "Negotiation", label: "Negotiation" },
        { value: "Converted", label: "Converted" },
        { value: "Lost", label: "Lost" }
    ]


    // =========================
    // FOLLOW-UP OPTIONS
    // =========================

    const followUpOptions = [
        {
            value: "All",
            label: "All"
        },
        {
            value: "Today",
            label: "Today's Follow Up"
        }
    ]


    // =========================
    // COMMON SELECT STYLE
    // =========================

    const selectStyles = {

        control: (base, state) => ({
            ...base,

            minHeight: "32px",
            height: "32px",

            borderRadius: "6px",

            borderColor: state.isFocused
                ? "#3b82f6"
                : "#e5e7eb",

            boxShadow: state.isFocused
                ? "0 0 0 1px #3b82f6"
                : "none",

            backgroundColor: "#f9fafb",

            fontSize: "11px",

            cursor: "pointer",

            "&:hover": {
                borderColor: "#d1d5db"
            }
        }),

        valueContainer: (base) => ({
            ...base,
            padding: "0 9px"
        }),

        singleValue: (base) => ({
            ...base,
            fontSize: "11px",
            color: "#4b5563"
        }),

        placeholder: (base) => ({
            ...base,
            fontSize: "11px",
            color: "#9ca3af"
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "30px"
        }),

        dropdownIndicator: (base) => ({
            ...base,
            padding: "4px",
            color: "#6b7280"
        }),

        indicatorSeparator: () => ({
            display: "none"
        }),

        menu: (base) => ({
            ...base,
            borderRadius: "6px",
            overflow: "hidden",
            fontSize: "11px",
            zIndex: 100
        }),

        option: (base, state) => ({
            ...base,

            fontSize: "11px",
            padding: "7px 9px",

            backgroundColor:
                state.isSelected
                    ? "#eff6ff"
                    : state.isFocused
                        ? "#f9fafb"
                        : "#ffffff",

            color:
                state.isSelected
                    ? "#2563eb"
                    : "#374151",

            cursor: "pointer"
        })
    }


    // =========================
    // TABLE STATUS STYLE
    // =========================

    const getStatusStyle = (status) => {

        switch (status) {

            case "Converted":
                return {
                    background: "#f0fdf4",
                    color: "#16a34a",
                    border: "#bbf7d0"
                }

            case "Lost":
                return {
                    background: "#fef2f2",
                    color: "#dc2626",
                    border: "#fecaca"
                }

            case "Qualified":
                return {
                    background: "#fff7ed",
                    color: "#ea580c",
                    border: "#fed7aa"
                }

            case "Site-Visit":
                return {
                    background: "#faf5ff",
                    color: "#9333ea",
                    border: "#e9d5ff"
                }

            case "Negotiation":
                return {
                    background: "#fefce8",
                    color: "#ca8a04",
                    border: "#fef08a"
                }

            case "Connected":
                return {
                    background: "#eff6ff",
                    color: "#2563eb",
                    border: "#bfdbfe"
                }

            case "New":
                return {
                    background: "#f0fdf4",
                    color: "#16a34a",
                    border: "#bbf7d0"
                }

            default:
                return {
                    background: "#f9fafb",
                    color: "#4b5563",
                    border: "#e5e7eb"
                }
        }
    }


    return (
        <div className="mt-3 w-full">

            {/* ================= FILTER BAR ================= */}

            <div className="
                bg-white
                border
                border-gray-200
                rounded-lg
                p-3
                mb-3
            ">

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                ">

                    {/* Search */}

                    <div className="w-full sm:w-52">

                        <input
                            type="text"
                            value={filters.leadSearch}
                            placeholder="Search lead..."
                            name="leadSearch"
                            onChange={handleChange}
                            className="
                                w-full
                                h-8
                                px-3
                                border
                                border-gray-200
                                rounded-md
                                bg-gray-50
                                text-[11px]
                                text-gray-700
                                placeholder:text-gray-400
                                outline-none
                                focus:bg-white
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-500
                            "
                        />

                    </div>


                    {/* Status Filter */}

                    <div className="w-36">

                        <Select
                            options={statusOptions}
                            value={
                                statusOptions.find(
                                    (option) =>
                                        option.value === filters.status
                                )
                            }
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    status:
                                        selected?.value || "All"
                                }))
                            }
                            isSearchable={false}
                            styles={selectStyles}
                            placeholder="Status"
                        />

                    </div>


                    {/* Follow Up Filter */}

                    <div className="w-40">

                        <Select
                            options={followUpOptions}
                            value={
                                followUpOptions.find(
                                    (option) =>
                                        option.value ===
                                        filters.todayFollowUp
                                )
                            }
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    todayFollowUp:
                                        selected?.value || "All"
                                }))
                            }
                            isSearchable={false}
                            styles={selectStyles}
                            placeholder="Follow Up"
                        />

                    </div>


                    {/* Reset */}

                    <button
                        onClick={handleReset}
                        className="
                            h-8
                            px-3
                            rounded-md
                            bg-gray-100
                            border
                            border-gray-200
                            text-[11px]
                            font-medium
                            text-gray-600
                            hover:bg-gray-200
                            transition
                        "
                    >
                        Reset Filter
                    </button>

                </div>

            </div>


            {/* ================= TABLE ================= */}

            <div className="
                bg-white
                border
                border-gray-200
                rounded-lg
                overflow-hidden
            ">

                {/* Header */}

                <div className="
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    border-b
                    border-gray-100
                ">

                    <div>

                        <h2 className="
                            text-sm
                            font-semibold
                            text-gray-900
                        ">
                            My Leads
                        </h2>

                        <p className="
                            text-[10px]
                            text-gray-400
                            mt-0.5
                        ">
                            Leads assigned to you
                        </p>

                    </div>

                    <span className="
                        px-2
                        py-1
                        rounded-md
                        bg-blue-50
                        text-blue-600
                        text-[10px]
                        font-medium
                    ">
                        {filterLead.length} Leads
                    </span>

                </div>


                {/* Table */}

                <div className="overflow-x-auto">

                    <table className="
                        w-full
                        border-collapse
                        min-w-[700px]
                    ">

                        <thead>

                            <tr className="
                                bg-gray-50
                                border-b
                                border-gray-100
                            ">


                                <th className="
                                    px-4 py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                ">
                                    Lead Name
                                </th>

                                <th className="
                                    px-4 py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                ">
                                    Contact
                                </th>

                                <th className="
                                    px-4 py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                ">
                                    Interested In
                                </th>

                                <th className="
                                    px-4 py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                ">
                                    Status
                                </th>

                                <th className="
                                    px-4 py-2.5
                                    text-left
                                    text-[10px]
                                    font-semibold
                                    text-gray-500
                                    uppercase
                                    tracking-wide
                                ">
                                    Next Follow Up
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {filterLead.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="py-12 text-center"
                                    >

                                        <p className="
                                            text-xs
                                            font-medium
                                            text-gray-500
                                        ">
                                            No Leads Found
                                        </p>

                                        <p className="
                                            text-[10px]
                                            text-gray-400
                                            mt-1
                                        ">
                                            Try changing your filters
                                        </p>

                                    </td>

                                </tr>

                            ) : (

                                filterLead.map((curr, index) => {

                                    const statusStyle =
                                        getStatusStyle(curr.status)

                                    return (

                                        <tr
                                            key={curr.id || index}
                                            className="
                                                border-b
                                                border-gray-100
                                                last:border-b-0
                                                hover:bg-gray-50
                                                transition-colors
                                            "
                                        >       

                                            

                                            {/* Lead */}

                                            <td className="px-4 py-2.5">

                                                <div className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                ">

                                                    <div className="
                                                        w-7
                                                        h-7
                                                        rounded-full
                                                        bg-blue-50
                                                        text-blue-600
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-[10px]
                                                        font-semibold
                                                        shrink-0
                                                    ">
                                                        {curr.name
                                                            ?.charAt(0)
                                                            ?.toUpperCase()}
                                                    </div>

                                                    <p className="
                                                        text-[11px]
                                                        font-medium
                                                        text-gray-800
                                                        truncate
                                                    ">
                                                        {curr.name}
                                                    </p>

                                                </div>

                                            </td>


                                            {/* Contact */}

                                            <td className="px-4 py-2.5">

                                                <p className="
                                                    text-[10px]
                                                    text-gray-600
                                                ">
                                                    {curr.phone}
                                                </p>

                                            </td>


                                            {/* Interested */}

                                            <td className="px-4 py-2.5">

                                                <p className="
                                                    text-[10px]
                                                    text-gray-600
                                                    max-w-[150px]
                                                    truncate
                                                ">
                                                    {curr.interested}
                                                </p>

                                            </td>


                                            {/* Status */}

                                            <td className="
                                                px-4
                                                py-2.5
                                                w-40
                                            ">

                                                <Select
                                                    options={statusOptions}
                                                    value={
                                                        statusOptions.find(
                                                            (option) =>
                                                                option.value ===
                                                                curr.status
                                                        ) || null
                                                    }
                                                    onChange={(selected) =>
                                                        handleStatusChange(
                                                            selected?.value ||
                                                            "All",
                                                            curr.id
                                                        )
                                                    }
                                                    isSearchable={false}
                                                    styles={{
                                                        ...selectStyles,

                                                        control: (
                                                            base,
                                                            state
                                                        ) => ({
                                                            ...base,

                                                            minHeight: "28px",
                                                            height: "28px",

                                                            borderRadius: "5px",

                                                            borderColor:
                                                                state.isFocused
                                                                    ? "#3b82f6"
                                                                    : statusStyle.border,

                                                            backgroundColor:
                                                                statusStyle.background,

                                                            boxShadow:
                                                                state.isFocused
                                                                    ? "0 0 0 1px #3b82f6"
                                                                    : "none",

                                                            fontSize: "10px",

                                                            cursor: "pointer"
                                                        }),

                                                        singleValue: (
                                                            base
                                                        ) => ({
                                                            ...base,
                                                            fontSize: "10px",
                                                            fontWeight: 500,
                                                            color:
                                                                statusStyle.color
                                                        }),

                                                        valueContainer: (
                                                            base
                                                        ) => ({
                                                            ...base,
                                                            padding:
                                                                "0 7px"
                                                        }),

                                                        indicatorsContainer: (
                                                            base
                                                        ) => ({
                                                            ...base,
                                                            height: "26px"
                                                        }),

                                                        dropdownIndicator: (
                                                            base
                                                        ) => ({
                                                            ...base,
                                                            padding: "3px",
                                                            color:
                                                                statusStyle.color
                                                        }),

                                                        option: (
                                                            base,
                                                            state
                                                        ) => ({
                                                            ...base,
                                                            fontSize: "10px",
                                                            padding:
                                                                "6px 8px",

                                                            backgroundColor:
                                                                state.isSelected
                                                                    ? "#eff6ff"
                                                                    : state.isFocused
                                                                        ? "#f9fafb"
                                                                        : "#fff",

                                                            color:
                                                                state.isSelected
                                                                    ? "#2563eb"
                                                                    : "#374151"
                                                        })
                                                    }}
                                                />

                                            </td>


                                            {/* Follow Up */}

                                            <td className="px-4 py-2.5">

                                                <input
                                                    type="date"
                                                    name="nextFollowUpdate"
                                                    value={
                                                        curr.nextFollowUpDate ||
                                                        ""
                                                    }
                                                    onChange={(e) =>
                                                        handleDateChange(
                                                            e,
                                                            curr.id
                                                        )
                                                    }
                                                    className="
                                                        h-7
                                                        px-2
                                                        border
                                                        border-gray-200
                                                        rounded-md
                                                        bg-gray-50
                                                        text-[10px]
                                                        text-gray-600
                                                        outline-none
                                                        cursor-pointer
                                                        focus:bg-white
                                                        focus:border-blue-500
                                                        focus:ring-1
                                                        focus:ring-blue-500
                                                    "
                                                />

                                            </td>

                                        </tr>
                                    )
                                })

                            )}

                        </tbody>

                    </table>


                </div>

            </div>

        </div>
    )
}

export default UserLeadTable