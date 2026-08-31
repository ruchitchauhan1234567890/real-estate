import React from 'react'

const LeadTable = ({leadData}) => {
  return (
    <div>
      <table className="w-full border-collapse border-1">
        <thead>
            <tr className="border">
                <th className="border">#</th>
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
            {leadData.map((curr,index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{curr.name}</td>
                        <td>{curr.phone}</td>
                        <td>{curr.interested}</td>
                        <td>{curr.source}</td>
                        <td>{curr.status}</td>
                        <td>{curr.assignedTo}</td>
                        <td>{curr.date}</td>
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
