import React from 'react'

const LeadTable = ({leadData}) => {
  return (
    <div>
      <table className="w-full border-collapse border-1">
        <thead>
            <tr>
                <th>#</th>
                <th>Lead Name</th>
                <th>Contact Info</th>
                <th>Interested IN</th>
                <th>Source</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Add On</th>
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
