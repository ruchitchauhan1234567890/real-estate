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


    // =========================
    // FILTER CHANGE
    // =========================

    const handleChange = (e) => {

        const { value, name } = e.target

        setFilters((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    // =========================
    // USER LEADS
    // =========================

    const userLead = lead.filter(
        (curr) => curr.assignedTo === loggedUser.name
    )


    // =========================
    // TODAY
    // =========================

    const today = new Date()
        .toISOString()
        .split("T")[0]


    // =========================
    // FILTER LEADS
    // =========================

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


    // =========================
    // RESET
    // =========================

    const handleReset = () => {

        setFilters({
            leadSearch: "",
            status: "All",
            todayFollowUp: "All"
        })
    }


    // =========================
    // DATE CHANGE
    // =========================

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


    // =========================
    // STATUS CHANGE
    // =========================

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
    // FILTER SELECT STYLE
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

            backgroundColor: "#ffffff",

            fontSize: "11px",

            cursor: "pointer",

            "&:hover": {
                borderColor: "#93c5fd"
            },

            // Dark mode
            "@media (prefers-color-scheme: dark)": {
                backgroundColor: "#181824",
                borderColor: state.isFocused
                    ? "#3b82f6"
                    : "#3a3a4d"
            }
        }),

        valueContainer: (base) => ({
            ...base,
            padding: "0 9px"
        }),

        singleValue: (base) => ({
            ...base,

            fontSize: "11px",
            color: "#4b5563",

            "@media (prefers-color-scheme: dark)": {
                color: "#e5e7eb"
            }
        }),

        placeholder: (base) => ({
            ...base,

            fontSize: "11px",
            color: "#9ca3af",

            "@media (prefers-color-scheme: dark)": {
                color: "#6b7280"
            }
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "30px"
        }),

        dropdownIndicator: (base) => ({
            ...base,

            padding: "4px",
            color: "#6b7280",

            "@media (prefers-color-scheme: dark)": {
                color: "#9ca3af"
            }
        }),

        clearIndicator: (base) => ({
            ...base,

            padding: "4px",

            "@media (prefers-color-scheme: dark)": {
                color: "#9ca3af"
            }
        }),

        indicatorSeparator: () => ({
            display: "none"
        }),

        menu: (base) => ({
            ...base,

            marginTop: "4px",

            borderRadius: "6px",

            overflow: "hidden",

            fontSize: "11px",

            zIndex: 100,

            backgroundColor: "#ffffff",

            border: "1px solid #e5e7eb",

            boxShadow:
                "0 8px 20px rgba(0,0,0,0.10)",

            "@media (prefers-color-scheme: dark)": {
                backgroundColor: "#181824",
                border: "1px solid #3a3a4d",
                boxShadow:
                    "0 8px 25px rgba(0,0,0,0.35)"
            }
        }),

        menuList: (base) => ({
            ...base,

            padding: "4px",

            backgroundColor: "#ffffff",

            "@media (prefers-color-scheme: dark)": {
                backgroundColor: "#181824"
            }
        }),

        option: (base, state) => ({
            ...base,

            fontSize: "11px",

            padding: "7px 9px",

            borderRadius: "4px",

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

            cursor: "pointer",

            "@media (prefers-color-scheme: dark)": {

                backgroundColor:
                    state.isSelected
                        ? "rgba(59,130,246,0.15)"
                        : state.isFocused
                            ? "#252536"
                            : "#181824",

                color:
                    state.isSelected
                        ? "#60a5fa"
                        : "#d1d5db"
            }
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

        <div className="
            mt-1
            w-full
        ">


            {/* ================================================= */}
            {/* FILTER BAR */}
            {/* ================================================= */}

            <div className="
                bg-white
                dark:bg-[#1f1f2b]

                border
                border-gray-200
                dark:border-[#303044]

                rounded-lg

                p-3
                mb-1

                transition-colors
            ">

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                ">


                    {/* ================= SEARCH ================= */}

                    <div className="
                        w-full
                        sm:w-52
                    ">

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
                                dark:border-[#3a3a4d]

                                rounded-md

                                bg-gray-50
                                dark:bg-[#181824]

                                text-[11px]

                                text-gray-700
                                dark:text-gray-200

                                placeholder:text-gray-400
                                dark:placeholder:text-gray-500

                                outline-none

                                focus:bg-white
                                dark:focus:bg-[#181824]

                                focus:border-blue-500

                                focus:ring-1
                                focus:ring-blue-500/20

                                transition-colors
                            "
                        />

                    </div>


                    {/* ================= STATUS FILTER ================= */}

                    <div className="w-36">

                        <Select
                            options={statusOptions}

                            value={
                                statusOptions.find(
                                    (option) =>
                                        option.value ===
                                        filters.status
                                )
                            }

                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,

                                    status:
                                        selected?.value ||
                                        "All"
                                }))
                            }

                            isSearchable={false}

                            styles={selectStyles}

                            placeholder="Status"

                            classNamePrefix="dark-select"
                        />

                    </div>


                    {/* ================= FOLLOW UP FILTER ================= */}

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
                                        selected?.value ||
                                        "All"
                                }))
                            }

                            isSearchable={false}

                            styles={selectStyles}

                            placeholder="Follow Up"

                            classNamePrefix="dark-select"
                        />

                    </div>


                    {/* ================= RESET ================= */}

                    <button
                        onClick={handleReset}
                        className="
                            h-8
                            px-3

                            rounded-md

                            bg-gray-100
                            dark:bg-[#181824]

                            border
                            border-gray-200
                            dark:border-[#3a3a4d]

                            text-[11px]
                            font-medium

                            text-gray-600
                            dark:text-gray-300

                            hover:bg-gray-200
                            dark:hover:bg-[#252536]

                            transition-colors
                        "
                    >
                        Reset Filter
                    </button>

                </div>

            </div>


            {/* ================================================= */}
            {/* TABLE */}
            {/* ================================================= */}

            <div className="
                bg-white
                dark:bg-[#1f1f2b]

                border
                border-gray-200
                dark:border-[#303044]

                rounded-lg

                overflow-hidden

                transition-colors
            ">


                {/* ================= TABLE HEADER ================= */}

                <div className="
                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    border-b
                    border-gray-100
                    dark:border-[#303044]
                ">

                    <div>

                        <h2 className="
                            text-sm
                            font-semibold

                            text-gray-900
                            dark:text-white
                        ">
                            My Leads
                        </h2>

                        <p className="
                            text-[10px]

                            text-gray-400
                            dark:text-gray-500

                            mt-0.5
                        ">
                            Leads assigned to you
                        </p>

                    </div>


                    {/* Count */}

                    <span className="
                        px-2
                        py-1

                        rounded-md

                        bg-blue-50
                        dark:bg-blue-500/10

                        text-blue-600
                        dark:text-blue-400

                        text-[10px]
                        font-medium
                    ">
                        {filterLead.length} Leads
                    </span>

                </div>


                {/* ================= TABLE ================= */}

                <div className="overflow-x-auto">

                    <table className="
                        w-full
                        border-collapse
                        min-w-[750px]
                    ">


                        {/* ================= THEAD ================= */}

                        <thead>

                            <tr className="
                                bg-gray-50
                                dark:bg-[#181824]

                                border-b
                                border-gray-100
                                dark:border-[#303044]
                            ">


                                {/* # */}

                                <th className="
                                    px-3
                                    py-2.5

                                    text-center

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide

                                    w-12
                                ">
                                    #
                                </th>


                                {/* Lead Name */}

                                <th className="
                                    px-4
                                    py-2.5

                                    text-left

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide
                                ">
                                    Lead Name
                                </th>


                                {/* Contact */}

                                <th className="
                                    px-4
                                    py-2.5

                                    text-left

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide
                                ">
                                    Contact
                                </th>


                                {/* Interested */}

                                <th className="
                                    px-4
                                    py-2.5

                                    text-left

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide
                                ">
                                    Interested In
                                </th>


                                {/* Status */}

                                <th className="
                                    px-4
                                    py-2.5

                                    text-left

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide
                                ">
                                    Status
                                </th>


                                {/* Follow Up */}

                                <th className="
                                    px-4
                                    py-2.5

                                    text-left

                                    text-[10px]
                                    font-semibold

                                    text-gray-500
                                    dark:text-gray-400

                                    uppercase
                                    tracking-wide
                                ">
                                    Next Follow Up
                                </th>

                            </tr>

                        </thead>


                        {/* ================= TBODY ================= */}

                        <tbody>

                            {filterLead.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="
                                            py-12
                                            text-center
                                        "
                                    >

                                        <p className="
                                            text-xs
                                            font-medium

                                            text-gray-500
                                            dark:text-gray-400
                                        ">
                                            No Leads Found
                                        </p>

                                        <p className="
                                            text-[10px]

                                            text-gray-400
                                            dark:text-gray-500

                                            mt-1
                                        ">
                                            Try changing your filters
                                        </p>

                                    </td>

                                </tr>

                            ) : (

                                filterLead.map((curr, index) => {

                                    const statusStyle =
                                        getStatusStyle(
                                            curr.status
                                        )

                                    return (

                                        <tr
                                            key={
                                                curr.id ||
                                                index
                                            }

                                            className="
                                                border-b
                                                border-gray-100
                                                dark:border-[#303044]

                                                last:border-b-0

                                                hover:bg-gray-50
                                                dark:hover:bg-[#252536]

                                                transition-colors
                                            "
                                        >


                                            {/* ================= # ================= */}

                                            <td className="
                                                px-3
                                                py-2.5

                                                text-center
                                            ">

                                                <span className="
                                                    text-[10px]
                                                    font-medium

                                                    text-gray-400
                                                    dark:text-gray-500
                                                ">
                                                    {index + 1}
                                                </span>

                                            </td>


                                            {/* ================= LEAD ================= */}

                                            <td className="
                                                px-4
                                                py-2.5
                                            ">

                                                <div className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                ">


                                                    {/* Avatar */}

                                                    <div className="
                                                        w-7
                                                        h-7

                                                        rounded-full

                                                        bg-blue-50
                                                        dark:bg-blue-500/10

                                                        text-blue-600
                                                        dark:text-blue-400

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


                                                    {/* Name */}

                                                    <p className="
                                                        text-[11px]
                                                        font-medium

                                                        text-gray-800
                                                        dark:text-gray-200

                                                        truncate
                                                    ">
                                                        {curr.name}
                                                    </p>

                                                </div>

                                            </td>


                                            {/* ================= CONTACT ================= */}

                                            <td className="
                                                px-4
                                                py-2.5
                                            ">

                                                <p className="
                                                    text-[10px]

                                                    text-gray-600
                                                    dark:text-gray-400
                                                ">
                                                    {curr.phone}
                                                </p>

                                            </td>


                                            {/* ================= INTERESTED ================= */}

                                            <td className="
                                                px-4
                                                py-2.5
                                            ">

                                                <p className="
                                                    text-[10px]

                                                    text-gray-600
                                                    dark:text-gray-400

                                                    max-w-[150px]
                                                    truncate
                                                ">
                                                    {curr.interested}
                                                </p>

                                            </td>


                                            {/* ================= STATUS ================= */}

                                            <td className="
                                                px-4
                                                py-2.5
                                                w-40
                                            ">

                                                <Select
                                                    options={
                                                        statusOptions
                                                    }

                                                    value={
                                                        statusOptions.find(
                                                            (option) =>
                                                                option.value ===
                                                                curr.status
                                                        ) || null
                                                    }

                                                    onChange={(
                                                        selected
                                                    ) =>
                                                        handleStatusChange(
                                                            selected?.value ||
                                                            "All",

                                                            curr.id
                                                        )
                                                    }

                                                    isSearchable={
                                                        false
                                                    }

                                                    classNamePrefix="status-select"

                                                    styles={{
                                                        ...selectStyles,

                                                        control: (
                                                            base,
                                                            state
                                                        ) => ({
                                                            ...base,

                                                            minHeight:
                                                                "28px",

                                                            height:
                                                                "28px",

                                                            borderRadius:
                                                                "5px",

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

                                                            fontSize:
                                                                "10px",

                                                            cursor:
                                                                "pointer",

                                                            "@media (prefers-color-scheme: dark)":
                                                                {
                                                                    backgroundColor:
                                                                        "#181824",

                                                                    borderColor:
                                                                        state.isFocused
                                                                            ? "#3b82f6"
                                                                            : "#3a3a4d"
                                                                }
                                                        }),

                                                        singleValue:
                                                            (
                                                                base
                                                            ) => ({
                                                                ...base,

                                                                fontSize:
                                                                    "10px",

                                                                fontWeight:
                                                                    500,

                                                                color:
                                                                    statusStyle.color,

                                                                "@media (prefers-color-scheme: dark)":
                                                                    {
                                                                        color:
                                                                            "#93c5fd"
                                                                    }
                                                            }),

                                                        valueContainer:
                                                            (
                                                                base
                                                            ) => ({
                                                                ...base,

                                                                padding:
                                                                    "0 7px"
                                                            }),

                                                        indicatorsContainer:
                                                            (
                                                                base
                                                            ) => ({
                                                                ...base,

                                                                height:
                                                                    "26px"
                                                            }),

                                                        dropdownIndicator:
                                                            (
                                                                base
                                                            ) => ({
                                                                ...base,

                                                                padding:
                                                                    "3px",

                                                                color:
                                                                    statusStyle.color,

                                                                "@media (prefers-color-scheme: dark)":
                                                                    {
                                                                        color:
                                                                            "#9ca3af"
                                                                    }
                                                            }),

                                                        menu:
                                                            (
                                                                base
                                                            ) => ({
                                                                ...base,

                                                                backgroundColor:
                                                                    "#ffffff",

                                                                border:
                                                                    "1px solid #e5e7eb",

                                                                zIndex:
                                                                    100,

                                                                "@media (prefers-color-scheme: dark)":
                                                                    {
                                                                        backgroundColor:
                                                                            "#181824",

                                                                        border:
                                                                            "1px solid #3a3a4d"
                                                                    }
                                                            }),

                                                        menuList:
                                                            (
                                                                base
                                                            ) => ({
                                                                ...base,

                                                                backgroundColor:
                                                                    "#ffffff",

                                                                padding:
                                                                    "4px",

                                                                "@media (prefers-color-scheme: dark)":
                                                                    {
                                                                        backgroundColor:
                                                                            "#181824"
                                                                    }
                                                            }),

                                                        option: (
                                                            base,
                                                            state
                                                        ) => ({
                                                            ...base,

                                                            fontSize:
                                                                "10px",

                                                            padding:
                                                                "6px 8px",

                                                            borderRadius:
                                                                "4px",

                                                            backgroundColor:
                                                                state.isSelected
                                                                    ? "#eff6ff"
                                                                    : state.isFocused
                                                                        ? "#f9fafb"
                                                                        : "#fff",

                                                            color:
                                                                state.isSelected
                                                                    ? "#2563eb"
                                                                    : "#374151",

                                                            "@media (prefers-color-scheme: dark)":
                                                                {
                                                                    backgroundColor:
                                                                        state.isSelected
                                                                            ? "rgba(59,130,246,0.15)"
                                                                            : state.isFocused
                                                                                ? "#252536"
                                                                                : "#181824",

                                                                    color:
                                                                        state.isSelected
                                                                            ? "#60a5fa"
                                                                            : "#d1d5db"
                                                                }
                                                        })
                                                    }}
                                                />

                                            </td>


                                            {/* ================= FOLLOW UP ================= */}

                                            <td className="
                                                px-4
                                                py-2.5
                                            ">

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
                                                        dark:border-[#3a3a4d]

                                                        rounded-md

                                                        bg-gray-50
                                                        dark:bg-[#181824]

                                                        text-[10px]

                                                        text-gray-600
                                                        dark:text-gray-300

                                                        outline-none

                                                        cursor-pointer

                                                        focus:bg-white
                                                        dark:focus:bg-[#181824]

                                                        focus:border-blue-500

                                                        focus:ring-1
                                                        focus:ring-blue-500/20

                                                        transition-colors
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