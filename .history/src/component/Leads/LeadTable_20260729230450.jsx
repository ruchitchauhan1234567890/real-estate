import React, { useState } from 'react'

const LeadTable = ({ leadData, selectedLead, setSelectedLead,selectedEmp,setSelectedEmp }) => {

  // const [selectedLead, setSelectedLead] = useState([])

  const handleCheck = (e, index) => {
    console.log(e)
    const { checked } = e.target
    console.log(checked)
    if (checked) {
      setSelectedLead((prev) => ([...prev, index]))
    } else {
      if (selectedLead.length == 0) return
      const uncheck = selectedLead.filter((curr) => curr !== index)
      setSelectedLead(uncheck)
    }
    console.log("hello")
  }

  if(selectedEmp) {
    setSelectedLead((prev) => ({...prev, assignedTo : selectedEmp}))
  }

  



  console.log(selectedLead)
  const leads = JSON.parse(localStorage.getItem("leads"))
  return (
    <div>
      <table className="w-full border-collapse border-2  mt-4">
        <thead>
          <tr className="border">
            <th className="border">Assign</th>
            <th className="border p-2">#</th>
            <th className="border">Lead Name</th>
            <th className="border">Contact Info</th>
            <th className="border">Interested IN</th>
            <th className="border">Source</th>
            <th className="border">Status</th>
            {/* <th className="border">Assigned To</th> */}
            <th className="border">Add On</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((curr, index) => {
            return (
              <tr>
                <td className="border items-center pl-7"><input type="checkbox" onChange={(e) => handleCheck(e, index)} className="border-2" /></td>
                <td className="border p-1">{index + 1}</td>
                <td className="border p-1">{curr.name}</td>
                <td className="border p-1">{curr.phone}</td>
                <td className="border p-1">{curr.interested}</td>
                <td className="border p-1">{curr.source}</td>
                <td className="border p-1">{curr.status}</td>
                {/* <td className="border p-1">{curr.assignedTo}</td> */}
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
