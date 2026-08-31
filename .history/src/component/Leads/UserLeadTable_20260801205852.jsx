import React, { useState } from 'react'

const UserLeadTable = () => {

    const [filters, setFilters] = useState({
        leadSearch: "",
        status: "All"
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setFilters((prev) => ({ ...prev, [name]: value }))
    }



    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    console.log(loggedUser)

    const lead = JSON.parse(localStorage.getItem("leads"))
    console.log(lead)

    const userLead = lead.filter((curr) => curr.assignedTo === loggedUser.name)
    console.log(userLead)

    const filterLead = userLead.filter((lead) => {

        const status = filters.status == "All" || lead.status === filters.status
        const leadSearch = filters.status == "" || lead.name.includes(filters.leadSearch)

        return (status && leadSearch)
    })

    console.log(filters)

    const handleClick = () => {
        <input type="date" />
    };

    const handleDateChange = (e,id) =>{
        const {name ,value} = e.target
        console.log(value)
        const selectLead = userLead.find((lead) => lead.id === id)
        selectLead.nextFollowUpdate === value
        const leadChange = lead.map((lead) => {
            if(lead.id === id) {
                lead.nextFollowUpdate === value
                return lead
            }
            return lead
        })
    }

    



    return (
        <div className="mt-2">
            <div className="my-1 flex gap-2">
                <div className="p-1 border rounded">
                    <input type="text" placeholder="search lead" name="leadSearch" className="" onChange={handleChange} />
                </div>
                <div className="p-1 border rounded">
                    <select className="" name="status" onChange={handleChange}>
                        <option value="status" disabled selected>Status</option>
                        <option>New</option>
                        <option>Connected</option>
                        <option>Qualified</option>
                        <option>Site-Visit</option>
                        <option>Negotiation</option>
                        <option>Converted</option>
                        <option>Lost</option>
                    </select>
                </div>
            </div>
            <table className="border-collapse border-2 w-full">
                <thead>
                    <tr className="border">
                        <th className="border p-1">Lead Name</th>
                        <th className="border p-1">Contact</th>
                        <th className="border p-1">Interested IN</th>
                        <th className="border p-1">status</th>
                        <th className="border p-1">Next Follow up</th>
                    </tr>
                </thead>
                <tbody>
                    {filterLead.map((curr) => {
                        return (
                            <tr>
                                <td className="border p-1">{curr.name}</td>
                                <td className="border p-1">{curr.phone}</td>
                                <td className="border p-1">{curr.interested}</td>
                                <td className="border p-1">{curr.status}</td>
                                <td  className="border p-1">
                                    <input type="date" name="nextFollowUpdate" onChange={(e) => handleDateChange(e,curr.id)}/>
                                    {curr.nextFollowUpdate}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserLeadTable
