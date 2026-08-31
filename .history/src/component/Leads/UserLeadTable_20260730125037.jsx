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
            hello
        </div>
    )
}

export default UserLeadTable
