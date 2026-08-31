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
                                    <td className="border p-1">{curr.name}</td>
                                    <td className="border p-1">{curr.phone}</td>
                                    <td className="border p-1">{curr.interested}</td>
                                    <td className="border p-1">{curr.status}</td>
                                    <td className="border p-1">-</td>
                                    <td className="border p-1">-</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserLeadTable
