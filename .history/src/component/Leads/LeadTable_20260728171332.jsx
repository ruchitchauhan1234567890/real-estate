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
                <th></th>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default LeadTable
