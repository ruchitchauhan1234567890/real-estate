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
            <table className="border-collapse border">
                <thead>
                    <tr className="border">
                        <th className="border p-1">Lead Name</th>
                        <th className="border p-1">Contact</th>
                        <th className="border p-1">Interested IN</th>
                        <th className="border p-1">status</th>
                        <th className="border p-1">Last Follow up</th>
                        <th className="border p-1">Next Follow up</th>
                    </tr>
                </thead>
                <tbody>
                    {userLead.map((curr) => {
                        return (
                            <tr>
                                    <td>{curr.name}</td>
                                    <td>{curr.phone}</td>
                                    <td>{curr.interested}</td>
                                    <td>{curr.status}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserLeadTable
