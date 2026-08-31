import React, { useState } from 'react'
import LeadsForm from '../component/Leads/LeadsForm'
import LeadCard from '../component/Leads/LeadCard'
import LeadTable from '../component/Leads/LeadTable'
import UserLeadTable from '../component/Leads/UserLeadTable'

const Lead = () => {

    const [open, setOpen] = useState(false)
    const [editedLead, setEditedLead] = useState(null)

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    return (
        <div className="
            w-full
            min-w-0
            overflow-x-hidden
        ">

            {/* ================= LEAD FORM ================= */}

            <LeadsForm
                open={open}
                setOpen={setOpen}
                setEditedLead={setEditedLead}
                editedLead={editedLead}
            />


            {/* ================= LEAD CARDS ================= */}

            <div className="
                w-full
                min-w-0
            ">
                <LeadCard />
            </div>


            {/* ================= ADMIN LEADS ================= */}

            {loggedUser.isAdmin && (
                <div className="
                    w-full
                    min-w-0
                    mt-2
                ">
                    <LeadTable
                        open={open}
                        setOpen={setOpen}
                        setEditedLead={setEditedLead}
                    />
                </div>
            )}


            {/* ================= EMPLOYEE LEADS ================= */}

            {!loggedUser.isAdmin && (
                <div className="
                    w-full
                    min-w-0
                    mt-2
                ">
                    <UserLeadTable />
                </div>
            )}

        </div>
    )
}

export default Lead