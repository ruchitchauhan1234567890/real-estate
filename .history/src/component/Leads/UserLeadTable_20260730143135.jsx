import React from 'react'

const UserLeadTable = () => {

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    console.log(loggedUser)

    const lead = JSON.parse(localStorage.getItem("leads"))
    console.log(lead)

    const userLead = lead.filter((curr) => curr.assignedTo === loggedUser.name)
    console.log(userLead)

    return (
        <div>
            <table>
                <thead>
                    <th>Lead Name</th>
                    <th>Contact</th>
                    <th>Interested IN</th>
                    <th>status</th>
                    <th>Last Follow up</th>
                    <th>Next Follow up</th>
                </thead>
            </table>
        </div>
    )
}

export default UserLeadTable
