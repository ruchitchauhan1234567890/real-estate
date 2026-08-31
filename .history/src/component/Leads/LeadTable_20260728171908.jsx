import React from 'react'

const LeadTable = ({leadData}) => {
  return (
    <div>
      <table>
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
                        <td>{curr.index + 1}</td>
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
