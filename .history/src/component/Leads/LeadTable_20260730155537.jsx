import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";

const LeadTable = ({ leadData, selectedLead, setSelectedLead, selectedEmp, setSelectedEmp }) => {

  // const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  // console.log(loggedUser)

  // const lead = JSON.parse(localStorage.getItem("leads"))
  // console.log(lead)

  // const userLead = lead.filter((curr) => curr.assignedTo === loggedUser.name)
  // console.log(userLead)

  // const [selectedLead, setSelectedLead] = useState([])

  const handleCheck = (e, index) => {
    console.log(e)
    const { checked } = e.target
    console.log(checked)
    if (checked) {
      setSelectedLead((prev) => [...prev, index])
    } else {
      if (selectedLead.length == 0) return
      const uncheck = selectedLead.filter((curr) => curr !== index)
      setSelectedLead(uncheck)
    }
    console.log("hello")
  }

  console.log(selectedLead)


  let leads = JSON.parse(localStorage.getItem("leads"))
  const Assigned = leads.filter((curr) => curr.assignedTo)
  console.log(Assigned)
  const unAssigned = leads.filter((curr) => !curr.assignedTo)
  console.log(unAssigned)


  return (
    <div>
      <div className="flex gap-2">
        <div className="mt-2">
          <input type="text" placeholder='search lead' className="border rounded p-1" />
        </div>
        <div className="mt-2  border rounded text-center">
          <select>
            <option>New</option>
          </select>
        </div>
        <div className="mt-2 border rounded">
          <select>
            <option>All</option>
            <option>Assigned</option>
            <option>Un Assigned</option>
          </select>
        </div>
      </div>
      <table className="w-full border-collapse border-2  mt-2">
        <thead>
          <tr className="border">
            <th className="border">Assign</th>
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
          {leads ? leads.map((curr, index) => {
            return (
              <tr>
                <td className="border items-center pl-7"><input type="checkbox" checked={selectedLead.includes(index)} onChange={(e) => handleCheck(e, index)} className="border-2" /></td>
                <td className="border p-1">{index + 1}</td>
                <td className="border p-1">{curr.name}</td>
                <td className="border p-1">{curr.phone}</td>
                <td className="border p-1">{curr.interested}</td>
                <td className="border p-1">{curr.source}</td>
                <td className="border p-1">{curr.status}</td>
                <td className="border p-1">{curr.assignedTo ? curr.assignedTo : " - "}</td>
                <td className="border p-1">{curr.date}</td>
              </tr>
            )
          }) : ""}
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default LeadTable
