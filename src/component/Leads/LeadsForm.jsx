import React, { useContext, useRef, useState } from "react"
import { FiPlus, FiUpload, FiUserCheck } from "react-icons/fi"

import AddLead from "./AddLead"
import AssignedModel from "./AssignedModel"
import { LeadContext } from "../../ContextAPI/LeadContext"
import ImportLead from "../ImportAndExport/ImportLead"

const LeadsForm = ({
    open,
    setOpen,
    setEditedLead,
    editedLead
}) => {

    const [openModel, setOpenModel] = useState(false)

    const importInputRef = useRef(null)

    const {
        setLeadData,
        selectedLead,
        setSelectedLead
    } = useContext(LeadContext)

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    const selectedCount =
        Array.isArray(selectedLead)
            ? selectedLead.length
            : 0


    // ==========================================
    // IMPORT
    // ==========================================

    const handleImportClick = () => {
        importInputRef.current?.click()
    }


    const handleImportComplete = (updatedLeads) => {

        if (!Array.isArray(updatedLeads)) {
            return
        }

        localStorage.setItem(
            "leads",
            JSON.stringify(updatedLeads)
        )

        setLeadData(updatedLeads)
    }


    // ==========================================
    // ADD LEAD
    // ==========================================

    const handleOpenAddLead = () => {

        setEditedLead(null)
        setOpen(true)
    }


    // ==========================================
    // CLOSE ADD / EDIT
    // ==========================================

    const handleCloseLeadForm = () => {

        setOpen(false)
        setEditedLead(null)
    }


    // ==========================================
    // ASSIGN
    // ==========================================

    const handleOpenAssign = () => {

        if (selectedCount === 0) {
            return
        }

        setOpenModel(true)
    }


    const handleCloseAssign = () => {

        setOpenModel(false)
        setSelectedEmpSafe()
    }


    // Avoid assuming selectedEmp is available here.
    // AssignedModel is responsible for clearing its selected employee.
    const setSelectedEmpSafe = () => {
        // Intentionally empty.
    }


    // ==========================================
    // NOT ADMIN
    // ==========================================

    if (!loggedUser.isAdmin) {

        return (
            <div className="
                w-full
                min-w-0
                bg-white
                dark:bg-[#1f1f2b]

                border
                border-gray-200
                dark:border-[#303044]

                rounded-lg
                shadow-sm

                px-3
                py-2.5

                flex
                items-center
                justify-between
            ">

                <div className="min-w-0">

                    <h1 className="
                        text-sm
                        font-semibold
                        text-gray-900
                        dark:text-white
                        truncate
                    ">
                        Leads Management
                    </h1>

                    <p className="
                        text-[10px]
                        text-gray-500
                        dark:text-gray-400
                        mt-0.5
                        truncate
                    ">
                        View and manage your assigned leads
                    </p>

                </div>

            </div>
        )
    }


    return (
        <>

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <div className="
                w-full
                min-w-0

                bg-white
                dark:bg-[#1f1f2b]

                border
                border-gray-200
                dark:border-[#303044]

                rounded-lg
                shadow-sm

                px-3
                py-2.5

                flex
                flex-col
                gap-2

                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:gap-3
            ">

                {/* ================= LEFT ================= */}

                <div className="
                    min-w-0
                    flex-1
                ">

                    <h1 className="
                        text-sm
                        font-semibold
                        text-gray-900
                        dark:text-white
                        truncate
                    ">
                        Leads Management
                    </h1>

                    <p className="
                        text-[10px]
                        text-gray-500
                        dark:text-gray-400
                        mt-0.5
                        truncate
                    ">
                        Track and manage all your leads
                    </p>

                </div>


                {/* ================= ACTIONS ================= */}

                <div className="
                    w-full
                    flex
                    items-center
                    gap-1.5
                    flex-wrap

                    sm:w-auto
                    sm:flex-nowrap
                    sm:justify-end
                ">

                    {/* ========================================= */}
                    {/* SELECTED COUNT */}
                    {/* ========================================= */}

                    {selectedCount > 0 && (

                        <span className="
                            h-7
                            px-2

                            rounded

                            bg-blue-50
                            dark:bg-blue-500/10

                            text-blue-600
                            dark:text-blue-400

                            text-[9px]
                            font-medium

                            flex
                            items-center
                            justify-center

                            whitespace-nowrap
                        ">
                            {selectedCount} Selected
                        </span>

                    )}


                    {/* ========================================= */}
                    {/* ASSIGN */}
                    {/* ========================================= */}

                    <button
                        type="button"
                        disabled={selectedCount === 0}
                        onClick={handleOpenAssign}
                        aria-label="Assign selected leads"
                        className={`
                            h-7

                            flex
                            items-center
                            justify-center
                            gap-1

                            px-2.5
                            rounded

                            text-[10px]
                            font-medium

                            border

                            transition
                            whitespace-nowrap

                            ${
                                selectedCount === 0
                                    ? `
                                        bg-gray-50
                                        dark:bg-[#272738]

                                        text-gray-400
                                        dark:text-gray-600

                                        border-gray-200
                                        dark:border-[#38384d]

                                        cursor-not-allowed
                                    `
                                    : `
                                        bg-white
                                        dark:bg-[#272738]

                                        text-blue-600
                                        dark:text-blue-400

                                        border-blue-200
                                        dark:border-blue-500/30

                                        hover:bg-blue-50
                                        dark:hover:bg-blue-500/10
                                    `
                            }
                        `}
                    >

                        <FiUserCheck className="
                            w-3
                            h-3
                            shrink-0
                        " />

                        Assign

                    </button>


                    {/* ========================================= */}
                    {/* IMPORT */}
                    {/* ========================================= */}

                    <button
                        type="button"
                        onClick={handleImportClick}
                        aria-label="Import leads"
                        className="
                            h-7

                            flex
                            items-center
                            justify-center
                            gap-1

                            px-2.5
                            rounded

                            border
                            border-gray-200
                            dark:border-[#38384d]

                            bg-white
                            dark:bg-[#272738]

                            text-gray-600
                            dark:text-gray-300

                            text-[10px]
                            font-medium

                            hover:bg-gray-50
                            dark:hover:bg-[#303044]

                            transition
                            whitespace-nowrap
                        "
                    >

                        <FiUpload className="
                            w-3
                            h-3
                            shrink-0
                        " />

                        Import

                    </button>


                    {/* ========================================= */}
                    {/* ADD LEAD */}
                    {/* ========================================= */}

                    <button
                        type="button"
                        onClick={handleOpenAddLead}
                        aria-label="Add lead"
                        className="
                            h-7

                            flex
                            items-center
                            justify-center
                            gap-1

                            px-2.5
                            rounded

                            bg-blue-600
                            hover:bg-blue-700

                            text-white

                            text-[10px]
                            font-medium

                            transition
                            whitespace-nowrap
                        "
                    >

                        <FiPlus className="
                            w-3
                            h-3
                            shrink-0
                        " />

                        Add Lead

                    </button>

                </div>


                {/* ========================================= */}
                {/* IMPORT COMPONENT */}
                {/* ========================================= */}

                <ImportLead
                    ref={importInputRef}
                    onImportComplete={handleImportComplete}
                />

            </div>


            {/* ================================================= */}
            {/* ADD / EDIT LEAD */}
            {/* ================================================= */}

            {open && (

                <AddLead
                    open={open}
                    setOpen={setOpen}
                    setEditedLead={setEditedLead}
                    editedLead={editedLead}
                />

            )}


            {/* ================================================= */}
            {/* ASSIGN MODAL */}
            {/* ================================================= */}

            {openModel && (

                <AssignedModel
                    openModel={openModel}
                    setOpenModel={setOpenModel}
                    item={selectedCount}
                />

            )}

        </>
    )
}

export default LeadsForm