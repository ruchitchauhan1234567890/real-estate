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
        leadData,
        setLeadData,
        selectedLead
    } = useContext(LeadContext)

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    const selectedCount = selectedLead.length

    const handleImportClick = () => {
        importInputRef.current?.click()
    }

    const handleImportComplete = (updatedLeads) => {
        setLeadData(updatedLeads)
    }

    return (
        <>
            {/* Header */}
            <div className="
                w-full
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
            ">

                {/* Left */}
                <div>
                    <h1 className="
                        text-sm
                        font-semibold
                        text-gray-900
                    ">
                        Leads Management
                    </h1>

                    <p className="
                        text-[10px]
                        text-gray-500
                        mt-0.5
                    ">
                        Track and manage all your leads
                    </p>
                </div>


                {/* Actions */}
                <div className="flex items-center gap-1.5">

                    {/* Selected */}
                    {loggedUser.isAdmin && selectedCount > 0 && (
                        <span className="
                            px-2
                            py-1
                            rounded
                            bg-blue-50
                            text-blue-600
                            text-[9px]
                            font-medium
                        ">
                            {selectedCount} Selected
                        </span>
                    )}


                    {/* Assign */}
                    {loggedUser.isAdmin && (
                        <button
                            disabled={selectedCount === 0}
                            onClick={() => setOpenModel(!openModel)}
                            className={`
                                flex
                                items-center
                                gap-1
                                px-2.5
                                py-1
                                rounded
                                text-[10px]
                                font-medium
                                border
                                transition
                                ${
                                    selectedCount === 0
                                        ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
                                        : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50"
                                }
                            `}
                        >
                            <FiUserCheck className="w-3 h-3" />
                            Assign
                        </button>
                    )}


                    {/* Import */}
                    {loggedUser.isAdmin && (
                        <button
                            onClick={handleImportClick}
                            className="
                                flex
                                items-center
                                gap-1
                                px-2.5
                                py-1
                                rounded
                                border
                                border-gray-200
                                bg-white
                                text-gray-600
                                text-[10px]
                                font-medium
                                hover:bg-gray-50
                                transition
                            "
                        >
                            <FiUpload className="w-3 h-3" />
                            Import
                        </button>
                    )}


                    {/* Add Lead */}
                    {loggedUser.isAdmin && (
                        <button
                            onClick={() => setOpen(!open)}
                            className="
                                flex
                                items-center
                                gap-1
                                px-2.5
                                py-1
                                rounded
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                text-[10px]
                                font-medium
                                transition
                            "
                        >
                            <FiPlus className="w-3 h-3" />
                            Add Lead
                        </button>
                    )}

                </div>

                {/* Import */}
                <ImportLead
                    ref={importInputRef}
                    onImportComplete={handleImportComplete}
                />

            </div>


            {/* Add Lead */}
            {loggedUser.isAdmin && open && (
                <AddLead
                    open={open}
                    setOpen={setOpen}
                    setEditedLead={setEditedLead}
                    editedLead={editedLead}
                />
            )}


            {/* Assign Modal */}
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