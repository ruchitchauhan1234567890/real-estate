import React, { useContext, useEffect, useState } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { HiPencilSquare } from "react-icons/hi2"
import { IoSearchSharp } from "react-icons/io5"
import Select from "react-select"

import { LeadContext } from "../../ContextAPI/LeadContext"

const LeadTable = ({
    open,
    setOpen,
    setEditedLead
}) => {

    const {
        leadData,
        setLeadData,
        selectedLead,
        setSelectedLead
    } = useContext(LeadContext)

    const [filters, setFilters] = useState({
        status: "All",
        assigned: "All",
        leadSearch: ""
    })


    const leads =
        JSON.parse(localStorage.getItem("leads")) || []

    const tasks =
        JSON.parse(localStorage.getItem("tasks")) || []


    /* --------------------------------
       FILTER OPTIONS
    -------------------------------- */

    const statusOptions = [
        { value: "All", label: "All Status" },
        { value: "New", label: "New" },
        { value: "Connected", label: "Connected" },
        { value: "Qualified", label: "Qualified" },
        { value: "Site Visit", label: "Site Visit" },
        { value: "Negotiation", label: "Negotiation" },
        { value: "Converted", label: "Converted" },
        { value: "Lost", label: "Lost" }
    ]


    const assignedOptions = [
        { value: "All", label: "All Leads" },
        { value: "Assigned", label: "Assigned" },
        { value: "Un Assigned", label: "Un Assigned" }
    ]


    /* --------------------------------
       FILTER DATA
    -------------------------------- */

    const filterData = leads.filter((lead) => {

        const statusMatch =
            filters.status === "All" ||
            lead.status === filters.status


        const assignedMatch =
            filters.assigned === "All" ||
            (
                filters.assigned === "Assigned" &&
                lead.assignedTo
            ) ||
            (
                filters.assigned === "Un Assigned" &&
                !lead.assignedTo
            )


        const searchMatch =
            filters.leadSearch === "" ||
            lead.name
                ?.toLowerCase()
                .includes(
                    filters.leadSearch.toLowerCase()
                )


        return (
            statusMatch &&
            assignedMatch &&
            searchMatch
        )
    })


    /* --------------------------------
       SELECT LEAD
    -------------------------------- */

    const handleCheck = (e, id) => {

        const { checked } = e.target

        if (checked) {

            setSelectedLead((prev) => [
                ...prev,
                id
            ])

        } else {

            setSelectedLead((prev) =>
                prev.filter(
                    (item) => item !== id
                )
            )
        }
    }


    /* --------------------------------
       SELECT ALL
    -------------------------------- */

    // const handleSelectAll = () => {

    //     const ids = filterData.map(
    //         (lead) => lead.id
    //     )

    //     const allSelected =
    //         ids.length > 0 &&
    //         ids.every((id) =>
    //             selectedLead.includes(id)
    //         )


    //     if (allSelected) {

    //         setSelectedLead((prev) =>
    //             prev.filter(
    //                 (id) => !ids.includes(id)
    //             )
    //         )

    //     } else {

    //         setSelectedLead((prev) => [
    //             ...new Set([
    //                 ...prev,
    //                 ...ids
    //             ])
    //         ])
    //     }
    // }

    const handleSelect = () => {
    const unAssignedIds = filterData
        .filter((lead) => !lead.assignedTo)
        .map((lead) => lead.id)

    const allSelected = unAssignedIds.every(
        (id) => selectedLead.includes(id)
    )

    if (allSelected) {
        setSelectedLead((prev) =>
            prev.filter((id) => !unAssignedIds.includes(id))
        )
    } else {
        setSelectedLead((prev) => [
            ...new Set([...prev, ...unAssignedIds])
        ])
    }
}


    /* --------------------------------
       RESET FILTER
    -------------------------------- */

    const handleReset = () => {

        setFilters({
            status: "All",
            assigned: "All",
            leadSearch: ""
        })
    }


    /* --------------------------------
       DELETE
    -------------------------------- */

    const handleDelete = (id) => {

        const findLead =
            leads.find(
                (lead) => lead.id === id
            )

        const updatedLeads =
            leads.filter(
                (lead) => lead.id !== id
            )

        const updatedTasks =
            tasks.filter(
                (task) =>
                    task.lead !== findLead?.name
            )


        setLeadData(updatedLeads)

        setSelectedLead((prev) =>
            prev.filter(
                (item) => item !== id
            )
        )

        localStorage.setItem(
            "leads",
            JSON.stringify(updatedLeads)
        )

        localStorage.setItem(
            "tasks",
            JSON.stringify(updatedTasks)
        )
    }


    /* --------------------------------
       UPDATE
    -------------------------------- */

    const handleUpdate = (lead) => {

        setEditedLead(lead)
        setOpen(!open)
    }


    useEffect(() => {

        // Keep selected IDs valid
        const validIds =
            leads.map((lead) => lead.id)

        setSelectedLead((prev) =>
            prev.filter((id) =>
                validIds.includes(id)
            )
        )

    }, [leadData])


    /* --------------------------------
       REACT SELECT STYLE
    -------------------------------- */

    const selectStyles = {

        control: (base, state) => ({
            ...base,

            minHeight: "30px",
            height: "30px",

            borderRadius: "6px",

            borderColor:
                state.isFocused
                    ? "#93c5fd"
                    : "#e5e7eb",

            boxShadow: "none",

            fontSize: "11px",

            "&:hover": {
                borderColor: "#cbd5e1"
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

        dropdownIndicator: (base) => ({
            ...base,
            padding: "4px"
        }),

        clearIndicator: (base) => ({
            ...base,
            padding: "4px"
        }),

        option: (base, state) => ({
            ...base,

            fontSize: "11px",

            padding: "7px 9px",

            backgroundColor:
                state.isSelected
                    ? "#eff6ff"
                    : state.isFocused
                        ? "#f8fafc"
                        : "white",

            color:
                state.isSelected
                    ? "#2563eb"
                    : "#374151"
        }),

        menu: (base) => ({
            ...base,
            zIndex: 20,
            borderRadius: "6px",
            overflow: "hidden"
        })
    }


    const selectedStatus =
        statusOptions.find(
            (item) =>
                item.value === filters.status
        )

    const selectedAssigned =
        assignedOptions.find(
            (item) =>
                item.value === filters.assigned
        )


    return (
        <div className="w-full mt-2">


            {/* ================= FILTER BAR ================= */}

            <div className="
                bg-white
                border
                border-gray-200
                rounded-lg
                shadow-sm
                px-3
                py-2
                flex
                items-center
                justify-between
                gap-2
            ">


                {/* Search */}

                <div className="
                    relative
                    w-52
                ">

                    <IoSearchSharp
                        className="
                            absolute
                            left-2.5
                            top-1/2
                            -translate-y-1/2
                            w-3.5
                            h-3.5
                            text-gray-400
                        "
                    />

                    <input
                        type="text"
                        name="leadSearch"
                        value={filters.leadSearch}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                leadSearch:
                                    e.target.value
                            }))
                        }
                        placeholder="Search lead..."
                        className="
                            w-full
                            h-[30px]
                            pl-8
                            pr-2
                            text-[11px]
                            border
                            border-gray-200
                            rounded-md
                            outline-none
                            text-gray-700
                            placeholder:text-gray-400
                            focus:border-blue-400
                            focus:ring-1
                            focus:ring-blue-100
                        "
                    />

                </div>


                {/* Filters */}

                <div className="
                    flex
                    items-center
                    gap-2
                ">

                    {/* Status */}

                    <div className="w-36">

                        <Select
                            options={statusOptions}
                            value={selectedStatus}
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    status:
                                        selected.value
                                }))
                            }
                            styles={selectStyles}
                            isSearchable={false}
                        />

                    </div>


                    {/* Assigned */}

                    <div className="w-36">

                        <Select
                            options={assignedOptions}
                            value={selectedAssigned}
                            onChange={(selected) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    assigned:
                                        selected.value
                                }))
                            }
                            styles={selectStyles}
                            isSearchable={false}
                        />

                    </div>


                    {/* Reset */}

                    <button
                        onClick={handleReset}
                        className="
                            h-[30px]
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
                        Reset
                    </button>

                </div>

            </div>


            {/* ================= TABLE ================= */}

            <div className="
                mt-2
                bg-white
                border
                border-gray-200
                rounded-lg
                shadow-sm
                overflow-hidden
            ">

                <div className="
                    overflow-x-auto
                    max-h-[430px]
                ">

                    <table className="
                        w-full
                        border-collapse
                        min-w-[1000px]
                    ">

                        {/* Header */}

                        <thead className="
                            sticky
                            top-0
                            z-10
                            bg-gray-50
                        ">

                            <tr className="
                                border-b
                                border-gray-200
                            ">

                                <th className="px-3 py-2 w-10">

                                    <button
                                        onClick={handleSelect}
                                        className="
                                            text-[9px]
                                            font-medium
                                            text-blue-600
                                            hover:text-blue-700
                                        "
                                    >
                                        All
                                    </button>

                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    #
                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Lead Name
                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Contact
                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Interested In
                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Source
                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Status
                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Assigned To
                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Added On
                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-left
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Follow-up
                                </th>

                                <th className="
                                    px-2
                                    py-2
                                    text-center
                                    text-[9px]
                                    font-semibold
                                    text-gray-500
                                ">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        {/* Body */}

                        <tbody>

                            {filterData.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="11"
                                        className="
                                            text-center
                                            py-10
                                            text-xs
                                            text-gray-400
                                        "
                                    >
                                        No Leads Found
                                    </td>

                                </tr>

                            ) : (

                                filterData.map(
                                    (curr, index) => (

                                        <tr
                                            key={
                                                curr.id ||
                                                index
                                            }
                                            className="
                                                border-b
                                                border-gray-100
                                                last:border-0
                                                hover:bg-gray-50
                                                transition
                                            "
                                        >

                                            {/* Checkbox */}

                                            <td className="
                                                px-3
                                                py-2
                                                text-center
                                            ">

                                                <input
                                                    type="checkbox"
                                                    checked={selectedLead.includes(
                                                        curr.id
                                                    )}
                                                    onChange={(e) =>
                                                        handleCheck(
                                                            e,
                                                            curr.id
                                                        )
                                                    }
                                                    className="
                                                        w-3
                                                        h-3
                                                        accent-blue-600
                                                        cursor-pointer
                                                    "
                                                />

                                            </td>


                                            {/* Number */}

                                            <td className="
                                                px-2
                                                py-2
                                                text-[10px]
                                                text-gray-400
                                            ">
                                                {index + 1}
                                            </td>


                                            {/* Lead Name */}

                                            <td className="px-2 py-2">

                                                <p className="
                                                    text-[10px]
                                                    font-medium
                                                    text-gray-800
                                                    whitespace-nowrap
                                                ">
                                                    {curr.name}
                                                </p>

                                            </td>


                                            {/* Phone */}

                                            <td className="
                                                px-2
                                                py-2
                                                text-[10px]
                                                text-gray-500
                                                whitespace-nowrap
                                            ">
                                                {curr.phone}
                                            </td>


                                            {/* Interested */}

                                            <td className="
                                                px-2
                                                py-2
                                                text-[10px]
                                                text-gray-500
                                                max-w-[130px]
                                            ">

                                                <p className="truncate">
                                                    {curr.interested ||
                                                        "-"}
                                                </p>

                                            </td>


                                            {/* Source */}

                                            <td className="
                                                px-2
                                                py-2
                                                text-[10px]
                                                text-gray-500
                                            ">
                                                {curr.source ||
                                                    "-"}
                                            </td>


                                            {/* Status */}

                                            <td className="px-2 py-2">

                                                <StatusBadge
                                                    status={
                                                        curr.status
                                                    }
                                                />

                                            </td>


                                            {/* Assigned */}

                                            <td className="
                                                px-2
                                                py-2
                                                text-[10px]
                                                text-gray-500
                                            ">

                                                {curr.assignedTo ||
                                                    "-"}

                                            </td>


                                            {/* Date */}

                                            <td className="
                                                px-2
                                                py-2
                                                text-[10px]
                                                text-gray-500
                                                whitespace-nowrap
                                            ">
                                                {curr.date ||
                                                    "-"}
                                            </td>


                                            {/* Follow Up */}

                                            <td className="
                                                px-2
                                                py-2
                                                text-[10px]
                                                text-gray-500
                                                whitespace-nowrap
                                            ">
                                                {curr.nextFollowUpDate ||
                                                    "-"}
                                            </td>


                                            {/* Actions */}

                                            <td className="
                                                px-2
                                                py-2
                                            ">

                                                <div className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-1
                                                ">

                                                    <button
                                                        onClick={() =>
                                                            handleUpdate(
                                                                curr
                                                            )
                                                        }
                                                        className="
                                                            w-6
                                                            h-6
                                                            flex
                                                            items-center
                                                            justify-center
                                                            rounded
                                                            text-blue-500
                                                            bg-blue-50
                                                            hover:bg-blue-100
                                                            transition
                                                        "
                                                    >

                                                        <HiPencilSquare className="w-3.5 h-3.5" />

                                                    </button>


                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                curr.id
                                                            )
                                                        }
                                                        className="
                                                            w-6
                                                            h-6
                                                            flex
                                                            items-center
                                                            justify-center
                                                            rounded
                                                            text-red-500
                                                            bg-red-50
                                                            hover:bg-red-100
                                                            transition
                                                        "
                                                    >

                                                        <MdDeleteOutline className="w-3.5 h-3.5" />

                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    )
                                )

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}


/* =========================================
   STATUS BADGE
========================================= */

const StatusBadge = ({ status }) => {

    const styles = {

        New:
            "bg-blue-50 text-blue-600",

        Connected:
            "bg-cyan-50 text-cyan-600",

        Qualified:
            "bg-orange-50 text-orange-600",

        "Site Visit":
            "bg-purple-50 text-purple-600",

        Negotiation:
            "bg-yellow-50 text-yellow-600",

        Converted:
            "bg-green-50 text-green-600",

        Lost:
            "bg-red-50 text-red-600"
    }

    return (
        <span
            className={`
                inline-flex
                items-center
                px-2
                py-0.5
                rounded
                text-[8px]
                font-medium
                whitespace-nowrap
                ${styles[status] ||
                "bg-gray-50 text-gray-500"}
            `}
        >
            {status || "Unknown"}
        </span>
    )
}

export default LeadTable