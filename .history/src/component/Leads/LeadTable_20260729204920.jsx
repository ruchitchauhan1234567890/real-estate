import React, { useState } from 'react'

const LeadTable = ({leadData}) => {

  const [selectedLead,setSelectedLead] = useState([]) 

  const handleCheck = (e, index) => {
    const { value } = e.target
    console.log(index)
  }

  const leads = JSON.parse(localStorage.getItem("leads"))
  return (
    <div>
      <table className="w-full border-collapse border-2  mt-4">
        <thead>
            <tr className="border">
              <th className="border p-2">Assign</th>
                <th className="border p-2">#</th>
                <th className="border">Lead Name</th>
                <th className="border">Contact Info</th>
                <th className="border">Interested IN</th>
                <th className="border">Source</th>
                <th className="border">Status</th>
                <th className="border">Assigned To</th>
                <th className="border">Add On</th>
            </tr>
        </thead>
        <tbody>
            {leads.map((curr,index) => {
                return (
                    <tr>
                        <td><input type="checkbox" onClick={(e) => handleCheck(e, index)}/></td>
                        <td className="border p-1">{index + 1}</td>
                        <td className="border p-1">{curr.name}</td>
                        <td className="border p-1">{curr.phone}</td>
                        <td className="border p-1">{curr.interested}</td>
                        <td className="border p-1">{curr.source}</td>
                        <td className="border p-1">{curr.status}</td>
                        <td className="border p-1">{curr.assignedTo}</td>
                        <td className="border p-1">{curr.date}</td>
                    </tr>
                )
            })}
            <tr>

            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default LeadTable
