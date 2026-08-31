import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";

const LeadTable = ({ leadData, selectedLead, setSelectedLead, selectedEmp, setSelectedEmp }) => {

  const [allLeads, setAllLeads] = useState([])
  const [filters, setFilters] = useState({
    status : "All",
    assigned : "All"

  })

  // const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  // console.log(loggedUser)

  // const lead = JSON.parse(localStorage.getItem("leads"))
  // console.log(lead)

  // const userLead = lead.filter((curr) => curr.assignedTo === loggedUser.name)
  // console.log(userLead)

  // const [selectedLead, setSelectedLead] = useState([])
  console.log(leadData)
  console.log(allLeads)
  const handleCheck = (e, id) => {
    console.log(e)
    const { checked } = e.target
    console.log(checked)
    if (checked) {
      setSelectedLead((prev) => [...prev, id])
    } else {
      if (selectedLead.length == 0) return
      const uncheck = selectedLead.filter((curr) => curr !== id)
      setSelectedLead(uncheck)
    }
    console.log("hello")
  }

  console.log(selectedLead)


  const leads = JSON.parse(localStorage.getItem("leads"))

  useEffect(() => {
    setAllLeads(leads)
  }, [leadData, selectedEmp]);

  console.log(leads)


  const Assigned = leads.filter((curr) => curr.assignedTo)
  console.log(Assigned)
  const unAssigned = leads.filter((curr) => !curr.assignedTo)
  console.log(unAssigned)

  const newLead = leads.filter((curr) => curr.status == "New")
  console.log(newLead)
  const convertedLead = leads.filter((curr) => curr.status == "Converted")
  console.log(convertedLead)
  const connected = leads.filter((curr) => curr.status == "Connected")
  console.log(connected)
  const qualified = leads.filter((curr) => curr.status == "Qualified")
  console.log(qualified)
  const siteVisit = leads.filter((curr) => curr.status == "Site Visit")
  console.log(siteVisit)
  const negotiation = leads.filter((curr) => curr.status == "Negotiation")
  console.log(negotiation)
  const lost = leads.filter((curr) => curr.status == "Lost")
  console.log(lost)


  const handleChange = (e) => {
    const { value } = e.target
    console.log(value)
    // switch (value) {
    //   case "Assigned":
    //     return setAllLeads(Assigned);
    //   case "Un Assigned":
    //     return setAllLeads(unAssigned);
    //   case "All":
    //     return setAllLeads(leads);
    //   case "New":
    //     return setAllLeads(newLead);
    //   case "Connected":
    //     return setAllLeads(connected);
    //   case "Converted":
    //     return setAllLeads(convertedLead);
    //   case "Qualified":
    //     return setAllLeads(qualified);
    //   case "Site Visit":
    //     return setAllLeads(siteVisit);
    //   case "Negotiation":
    //     return setAllLeads(negotiation);
    //   case "Lost":
    //     return setAllLeads(lost);
    //   default:
    //     return null;
    // }
    setFilters((prev) => ({...prev, [name] : value}))
  }
console.log(filters)
  // if (value == "Assigned") {
  //   setAllLeads(Assigned)
  // } else if (value == "Un Assigned") {
  //   setAllLeads(unAssigned)
  // } else {
  //   setAllLeads(leads)
  // }

  console.log(allLeads)

  return (
    <div>
      <div className="flex gap-2">
        <div className="mt-2">
          <input type="text" placeholder='search lead' className="border rounded p-1" />
        </div>
        <form className="flex gap-2">
          <div className="mt-2  border rounded text-center">
            <select name="status" onChange={handleChange}>
              <option value="status" disabled selected>Status</option>
              <option value="new">New</option>
              <option>Connected</option>
              <option>Qualified</option>
              <option>Converted</option>
              <option>Site-Visit</option>
              <option>Lost</option>
              <option>Negotiation</option>
            </select>
          </div>
          <div className="mt-2 border rounded">
            <select name="assigned" className="" onChange={handleChange}>
              <option>All</option>
              <option>Assigned</option>
              <option>Un Assigned</option>
            </select>
          </div>
        </form>
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
          {allLeads ? allLeads.map((curr, index) => {
            return (
              <tr>
                <td className="border items-center pl-7"><input type="checkbox" checked={selectedLead.includes(curr.id)} onChange={(e) => handleCheck(e, curr.id)} className="border-2" /></td>
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
