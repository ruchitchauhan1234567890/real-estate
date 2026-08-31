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


  /* ================= OPTIONS ================= */

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


  /* ================= FILTER ================= */

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


  /* ================= SELECT ================= */

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


  const handleSelect = () => {

    const unAssignedIds = filterData
      .filter((lead) => !lead.assignedTo)
      .map((lead) => lead.id)

    const allSelected =
      unAssignedIds.length > 0 &&
      unAssignedIds.every(
        (id) => selectedLead.includes(id)
      )

    if (allSelected) {

      setSelectedLead((prev) =>
        prev.filter(
          (id) =>
            !unAssignedIds.includes(id)
        )
      )

    } else {

      setSelectedLead((prev) => [
        ...new Set([
          ...prev,
          ...unAssignedIds
        ])
      ])
    }
  }


  /* ================= RESET ================= */

  const handleReset = () => {

    setFilters({
      status: "All",
      assigned: "All",
      leadSearch: ""
    })
  }


  /* ================= DELETE ================= */

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


  /* ================= UPDATE ================= */

  const handleUpdate = (lead) => {

    setEditedLead(lead)
    setOpen(!open)
  }


  /* ================= KEEP SELECTED VALID ================= */

  useEffect(() => {

    const validIds =
      leads.map((lead) => lead.id)

    setSelectedLead((prev) =>
      prev.filter((id) =>
        validIds.includes(id)
      )
    )

  }, [leadData])


  /* ================= SELECT STYLE ================= */

  const selectStyles = {

    control: (base, state) => {

      const dark =
        document.documentElement.classList.contains("dark")

      return {
        ...base,

        minHeight: "32px",
        height: "32px",

        borderRadius: "6px",

        borderColor:
          state.isFocused
            ? "#60a5fa"
            : dark
              ? "#38384d"
              : "#e5e7eb",

        backgroundColor:
          dark
            ? "#272738"
            : "#ffffff",

        boxShadow:
          state.isFocused
            ? "0 0 0 1px #3b82f6"
            : "none",

        fontSize: "11px",

        color:
          dark
            ? "#f3f4f6"
            : "#374151",

        "&:hover": {
          borderColor:
            state.isFocused
              ? "#60a5fa"
              : dark
                ? "#4b4b63"
                : "#cbd5e1"
        }
      }
    },

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
      padding: "4px",
      color: "#9ca3af"
    }),

    clearIndicator: (base) => ({
      ...base,
      padding: "4px",
      color: "#9ca3af"
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
      fontSize: "11px"
    }),

    placeholder: (base) => ({
      ...base,
      color: "#9ca3af",
      fontSize: "11px"
    }),

    option: (base, state) => {

      const dark =
        document.documentElement.classList.contains("dark")

      return {
        ...base,

        fontSize: "11px",

        padding: "7px 9px",

        backgroundColor:
          state.isSelected
            ? "#2563eb"
            : state.isFocused
              ? dark
                ? "#343448"
                : "#f8fafc"
              : dark
                ? "#272738"
                : "#ffffff",

        color:
          state.isSelected
            ? "#ffffff"
            : dark
              ? "#f3f4f6"
              : "#374151",

        cursor: "pointer"
      }
    },

    menu: (base) => ({
      ...base,

      zIndex: 50,

      borderRadius: "6px",

      overflow: "hidden",

      backgroundColor:
        document.documentElement.classList.contains("dark")
          ? "#272738"
          : "#ffffff",

      border:
        document.documentElement.classList.contains("dark")
          ? "1px solid #38384d"
          : "1px solid #e5e7eb"
    }),

    menuList: (base) => ({
      ...base,
      backgroundColor:
        document.documentElement.classList.contains("dark")
          ? "#272738"
          : "#ffffff"
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
    <div className="
      w-full
      max-w-full
      min-w-0
      mt-2
    ">


      {/* =================================================
          FILTER BAR
      ================================================= */}

      <div className="
        w-full
        max-w-full

        bg-white
        dark:bg-[#1f1f2b]

        border
        border-gray-200
        dark:border-[#303044]

        rounded-lg

        shadow-sm
        dark:shadow-black/20

        px-3
        py-2

        flex
        flex-col
        gap-2

        sm:flex-row
        sm:items-center
        sm:justify-between

        transition-colors
      ">


        {/* SEARCH */}

        <div className="
          relative
          w-full
          sm:w-52
          sm:shrink-0
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
              dark:text-gray-500

              pointer-events-none
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
              h-[32px]
              pl-8
              pr-2

              text-[11px]

              border
              border-gray-200
              dark:border-[#38384d]

              rounded-md
              outline-none

              bg-white
              dark:bg-[#272738]

              text-gray-700
              dark:text-gray-100

              placeholder:text-gray-400
              dark:placeholder:text-gray-600

              focus:border-blue-400
              dark:focus:border-blue-500

              focus:ring-1
              focus:ring-blue-100
              dark:focus:ring-blue-500/20

              transition-colors
            "
          />

        </div>


        {/* FILTERS */}

        <div className="
          w-full

          flex
          flex-col
          gap-2

          sm:w-auto
          sm:flex-row
          sm:items-center
        ">


          {/* STATUS */}

          <div className="
            w-full
            sm:w-36
            sm:shrink-0
          ">

            <Select
              options={statusOptions}
              value={selectedStatus}
              onChange={(selected) =>
                setFilters((prev) => ({
                  ...prev,
                  status:
                    selected?.value || "All"
                }))
              }
              styles={selectStyles}
              isSearchable={false}
              placeholder="Status"
            />

          </div>


          {/* ASSIGNED */}

          <div className="
            w-full
            sm:w-36
            sm:shrink-0
          ">

            <Select
              options={assignedOptions}
              value={selectedAssigned}
              onChange={(selected) =>
                setFilters((prev) => ({
                  ...prev,
                  assigned:
                    selected?.value || "All"
                }))
              }
              styles={selectStyles}
              isSearchable={false}
              placeholder="Assigned"
            />

          </div>


          {/* RESET */}

          <button
            type="button"
            onClick={handleReset}
            className="
              h-[32px]
              w-full
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

              sm:w-auto
              sm:shrink-0
            "
          >
            Reset
          </button>

        </div>

      </div>


      {/* =================================================
          TABLE
      ================================================= */}

      <div className="
        mt-2
        w-full
        max-w-full

        bg-white
        dark:bg-[#1f1f2b]

        border
        border-gray-200
        dark:border-[#303044]

        rounded-lg

        shadow-sm
        dark:shadow-black/20

        overflow-hidden

        transition-colors
      ">

        <div className="
          w-full
          max-w-full
          overflow-x-auto
          overflow-y-auto
          max-h-[430px]
          overscroll-x-contain
        ">

          <table className="
            w-full
            min-w-[1000px]
            border-collapse
          ">


            {/* ================= HEADER ================= */}

            <thead className="
              sticky
              top-0
              z-10

              bg-gray-50
              dark:bg-[#272738]
            ">

              <tr className="
                border-b
                border-gray-200
                dark:border-[#38384d]
              ">

                <th className="
                  px-3
                  py-2
                  w-10
                  text-center
                ">

                  <button
                    type="button"
                    onClick={handleSelect}
                    className="
                      text-[9px]
                      font-medium

                      text-blue-600
                      dark:text-blue-400

                      hover:text-blue-700
                      dark:hover:text-blue-300
                    "
                  >
                    All
                  </button>

                </th>


                <TableHead>
                  #
                </TableHead>

                <TableHead>
                  Lead Name
                </TableHead>

                <TableHead>
                  Contact
                </TableHead>

                <TableHead>
                  Interested In
                </TableHead>

                <TableHead>
                  Source
                </TableHead>

                <TableHead>
                  Status
                </TableHead>

                <TableHead>
                  Assigned To
                </TableHead>

                <TableHead>
                  Added On
                </TableHead>

                <TableHead>
                  Follow-up
                </TableHead>

                <TableHead center>
                  Actions
                </TableHead>

              </tr>

            </thead>


            {/* ================= BODY ================= */}

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
                      dark:text-gray-500
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
                        dark:border-[#303044]

                        last:border-0

                        hover:bg-gray-50
                        dark:hover:bg-[#272738]

                        transition-colors
                      "
                    >

                      {/* CHECKBOX */}

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


                      {/* NUMBER */}

                      <td className="
                        px-2
                        py-2

                        text-[10px]

                        text-gray-400
                        dark:text-gray-500
                      ">
                        {index + 1}
                      </td>


                      {/* NAME */}

                      <td className="
                        px-2
                        py-2
                      ">

                        <p className="
                          text-[10px]
                          font-medium

                          text-gray-800
                          dark:text-gray-100

                          whitespace-nowrap
                        ">
                          {curr.name}
                        </p>

                      </td>


                      {/* PHONE */}

                      <td className="
                        px-2
                        py-2
                        text-[10px]

                        text-gray-500
                        dark:text-gray-400

                        whitespace-nowrap
                      ">
                        {curr.phone}
                      </td>


                      {/* INTERESTED */}

                      <td className="
                        px-2
                        py-2
                        text-[10px]

                        text-gray-500
                        dark:text-gray-400

                        max-w-[130px]
                      ">

                        <p className="truncate">
                          {curr.interested || "-"}
                        </p>

                      </td>


                      {/* SOURCE */}

                      <td className="
                        px-2
                        py-2
                        text-[10px]

                        text-gray-500
                        dark:text-gray-400

                        whitespace-nowrap
                      ">
                        {curr.source || "-"}
                      </td>


                      {/* STATUS */}

                      <td className="
                        px-2
                        py-2
                      ">

                        <StatusBadge
                          status={curr.status}
                        />

                      </td>


                      {/* ASSIGNED */}

                      <td className="
                        px-2
                        py-2
                        text-[10px]

                        text-gray-500
                        dark:text-gray-400

                        whitespace-nowrap
                      ">
                        {curr.assignedTo || "-"}
                      </td>


                      {/* DATE */}

                      <td className="
                        px-2
                        py-2
                        text-[10px]

                        text-gray-500
                        dark:text-gray-400

                        whitespace-nowrap
                      ">
                        {curr.date || "-"}
                      </td>


                      {/* FOLLOW UP */}

                      <td className="
                        px-2
                        py-2
                        text-[10px]

                        text-gray-500
                        dark:text-gray-400

                        whitespace-nowrap
                      ">
                        {curr.nextFollowUpDate || "-"}
                      </td>


                      {/* ACTIONS */}

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
                            type="button"
                            onClick={() =>
                              handleUpdate(curr)
                            }
                            className="
                              w-6
                              h-6

                              flex
                              items-center
                              justify-center

                              rounded

                              text-blue-500
                              dark:text-blue-400

                              bg-blue-50
                              dark:bg-blue-500/10

                              hover:bg-blue-100
                              dark:hover:bg-blue-500/20

                              transition
                            "
                          >
                            <HiPencilSquare className="
                              w-3.5
                              h-3.5
                            " />
                          </button>


                          <button
                            type="button"
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
                              dark:text-red-400

                              bg-red-50
                              dark:bg-red-500/10

                              hover:bg-red-100
                              dark:hover:bg-red-500/20

                              transition
                            "
                          >
                            <MdDeleteOutline className="
                              w-3.5
                              h-3.5
                            " />
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


/* =================================================
   TABLE HEAD
================================================= */

const TableHead = ({ children, center }) => {

  return (
    <th
      className={`
        px-2
        py-2
        text-[9px]
        font-semibold

        text-gray-500
        dark:text-gray-400

        whitespace-nowrap

        ${center
          ? "text-center"
          : "text-left"
        }
      `}
    >
      {children}
    </th>
  )
}


/* =================================================
   STATUS BADGE
================================================= */

const StatusBadge = ({ status }) => {

  const styles = {

    New:
      "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",

    Connected:
      "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",

    Qualified:
      "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",

    "Site Visit":
      "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",

    Negotiation:
      "bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400",

    Converted:
      "bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400",

    Lost:
      "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
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

        ${
          styles[status] ||
          `
            bg-gray-50
            text-gray-500
            dark:bg-gray-500/10
            dark:text-gray-400
          `
        }
      `}
    >
      {status || "Unknown"}
    </span>
  )
}

export default LeadTable