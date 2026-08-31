import React, {
    useContext,
    useRef,
    useState
} from "react"

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
        selectedLead,
        setSelectedLead,
        selectedEmp,
        setSelectedEmp
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
                rounded-xl
                shadow-sm
                px-4
                py-3
                flex
                items-center
                justify-between
            ">

                {/* Left */}
                <div>
                    <h1 className="
                        text-lg
                        font-bold
                        text-gray-900
                    ">
                        Leads Management
                    </h1>

                    <p className="
                        text-xs
                        text-gray-500
                        mt-0.5
                    ">
                        Track, manage and assign your leads
                    </p>
                </div>


                {/* Right Actions */}
                <div className="flex items-center gap-2">

                    {/* Selected Lead Count */}
                    {loggedUser.isAdmin && selectedCount > 0 && (
                        <span className="
                            px-2.5
                            py-1.5
                            rounded-md
                            bg-blue-50
                            text-blue-600
                            text-[11px]
                            font-medium
                        ">
                            {selectedCount} Selected
                        </span>
                    )}


                    {/* Assign */}
                    {loggedUser.isAdmin && (
                        <button
                            disabled={selectedCount === 0}
                            onClick={() =>
                                setOpenModel(!openModel)
                            }
                            className={`
                                flex
                                items-center
                                gap-1.5
                                px-3
                                py-1.5
                                rounded-md
                                text-xs
                                font-medium
                                transition
                                ${
                                    selectedCount === 0
                                        ? `
                                            bg-gray-100
                                            text-gray-400
                                            cursor-not-allowed
                                        `
                                        : `
                                            border
                                            border-blue-200
                                            text-blue-600
                                            bg-white
                                            hover:bg-blue-50
                                        `
                                }
                            `}
                        >
                            <FiUserCheck className="w-3.5 h-3.5" />

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
                                gap-1.5
                                px-3
                                py-1.5
                                rounded-md
                                border
                                border-gray-200
                                bg-white
                                text-gray-600
                                text-xs
                                font-medium
                                hover:bg-gray-50
                                transition
                            "
                        >
                            <FiUpload className="w-3.5 h-3.5" />

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
                                gap-1.5
                                px-3
                                py-1.5
                                rounded-md
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                text-xs
                                font-medium
                                transition
                                shadow-sm
                            "
                        >
                            <FiPlus className="w-3.5 h-3.5" />

                            Add Lead
                        </button>
                    )}

                </div>


                {/* Hidden Import Component */}
                <ImportLead
                    ref={importInputRef}
                    onImportComplete={handleImportComplete}
                />

            </div>


            {/* Add Lead Modal */}
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