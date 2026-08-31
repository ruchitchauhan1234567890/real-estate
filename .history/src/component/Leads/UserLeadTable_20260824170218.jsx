import React, { useContext, useState } from "react"
import { LeadContext } from "../../ContextAPI/LeadContext"

const UserLeadTable = () => {

    const { leadData, setLeadData } = useContext(LeadContext)

    const [lead, setLead] = useState(
        JSON.parse(localStorage.getItem("leads"))
    )

    const [filters, setFilters] = useState({
        leadSearch: "",
        status: "All",
        todayFollowUp: "All"
    })

    const handleChange = (e) => {
        const { value, name } = e.target

        setFilters((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser"))

    const userLead = lead.filter(
        (curr) => curr.assignedTo === loggedUser.name
    )

    const today = new Date()
        .toISOString()
        .split("T")[0]

    const filterLead = userLead.filter((lead) => {

        const status =
            filters.status == "All" ||
            lead.status === filters.status

        const leadSearch =
            filters.status == "" ||
            lead.name.includes(filters.leadSearch)

        const todaysFollowUp =
            filters.todayFollowUp == "All" ||
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

    const handleClick = () => {
        <input type="date" />
    }

    const handleDateChange = (e, id) => {

        const { name, value } = e.target

        const leadChange = lead.map((lead) => {

            if (lead.id === id) {

                lead.nextFollowUpDate = value

                return lead
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

    const handleStatusChange = (e, id) => {

        const today = new Date()
            .toISOString()
            .split("T")[0]

        const { value } = e.target

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
                    <div className="
                        relative
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


                    {/* Status */}
                    <div>

                        <select
                            className="
                                h-8
                                px-2.5
                                border
                                border-gray-200
                                rounded-md
                                bg-gray-50
                                text-[11px]
                                text-gray-600
                                outline-none
                                cursor-pointer
                                focus:bg-white
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-500
                            "
                            name="status"
                            value={filters.status}
                            onChange={handleChange}
                        >

                            <option
                                value="status"
                                disabled
                            >
                                Status
                            </option>

                            <option>All</option>
                            <option>New</option>
                            <option>Connected</option>
                            <option>Qualified</option>
                            <option>Site-Visit</option>
                            <option>Negotiation</option>
                            <option>Converted</option>
                            <option>Lost</option>

                        </select>

                    </div>


                    {/* Follow Up */}
                    <div>

                        <select
                            name="todayFollowUp"
                            value={filters.todayFollowUp}
                            onChange={handleChange}
                            className="
                                h-8
                                px-2.5
                                border
                                border-gray-200
                                rounded-md
                                bg-gray-50
                                text-[11px]
                                text-gray-600
                                outline-none
                                cursor-pointer
                                focus:bg-white
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-500
                            "
                        >

                            <option>All</option>
                            <option>
                                Today's FollowUp
                            </option>

                        </select>

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

                {/* Table Header / Title */}
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


                {/* Table Scroll */}
                <div className="overflow-x-auto">

                    <table className="
                        w-full
                        border-collapse
                        min-w-[700px]
                    ">

                        {/* ================= THEAD ================= */}
                        <thead>

                            <tr className="
                                bg-gray-50
                                border-b
                                border-gray-100
                            ">

                                <th className="
                                    px-4
                                    py-2.5
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
                                    px-4
                                    py-2.5
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
                                    px-4
                                    py-2.5
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
                                    px-4
                                    py-2.5
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
                                    px-4
                                    py-2.5
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


                        {/* ================= TBODY ================= */}
                        <tbody>

                            {filterLead.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="
                                            py-12
                                            text-center
                                        "
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

                                filterLead.map((curr, index) => (

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

                                        {/* Lead Name */}
                                        <td className="
                                            px-4
                                            py-2.5
                                        ">

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

                                                <div className="min-w-0">

                                                    <p className="
                                                        text-[11px]
                                                        font-medium
                                                        text-gray-800
                                                        truncate
                                                    ">
                                                        {curr.name}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>


                                        {/* Contact */}
                                        <td className="
                                            px-4
                                            py-2.5
                                        ">

                                            <p className="
                                                text-[10px]
                                                text-gray-600
                                            ">
                                                {curr.phone}
                                            </p>

                                        </td>


                                        {/* Interested */}
                                        <td className="
                                            px-4
                                            py-2.5
                                        ">

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
                                        ">

                                            <select
                                                className={`
                                                    h-7
                                                    px-2
                                                    rounded-md
                                                    border
                                                    text-[10px]
                                                    font-medium
                                                    outline-none
                                                    cursor-pointer

                                                    ${
                                                        curr.status === "Converted"
                                                            ? "bg-green-50 text-green-600 border-green-100"
                                                            : curr.status === "Lost"
                                                                ? "bg-red-50 text-red-600 border-red-100"
                                                                : curr.status === "Qualified"
                                                                    ? "bg-orange-50 text-orange-600 border-orange-100"
                                                                    : curr.status === "Site-Visit"
                                                                        ? "bg-purple-50 text-purple-600 border-purple-100"
                                                                        : curr.status === "Negotiation"
                                                                            ? "bg-yellow-50 text-yellow-600 border-yellow-100"
                                                                            : curr.status === "Connected"
                                                                                ? "bg-blue-50 text-blue-600 border-blue-100"
                                                                                : "bg-gray-50 text-gray-600 border-gray-200"
                                                    }
                                                `}
                                                value={curr.status}
                                                name="status"
                                                onChange={(e) =>
                                                    handleStatusChange(
                                                        e,
                                                        curr.id
                                                    )
                                                }
                                            >

                                                <option>All</option>
                                                <option>New</option>
                                                <option>Connected</option>
                                                <option>Qualified</option>
                                                <option>Site-Visit</option>
                                                <option>Negotiation</option>
                                                <option>Converted</option>
                                                <option>Lost</option>

                                            </select>

                                        </td>


                                        {/* Follow Up */}
                                        <td className="
                                            px-4
                                            py-2.5
                                        ">

                                            <input
                                                type="date"
                                                name="nextFollowUpdate"
                                                value={
                                                    curr.nextFollowUpDate
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

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default UserLeadTable