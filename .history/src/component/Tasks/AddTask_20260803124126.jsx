import React, { useEffect, useState } from 'react'

const AddTask = () => {

    const [inputData, setInputData] = useState({
        title: "",
        description: "",
        lead: "",
        assign: ""
    })

    const [selectEmployee, setSelectEmployee] = useState("")
    const leads = JSON.parse(localStorage.getItem("leads"))
    const emp = JSON.parse(localStorage.getItem("employee"))
    console.log(emp)


    // const selectedEmployee = (e,leadName) => {
    //     const leadData = leads.find((lead) => lead.name === leadName)
    //     console.log(leadData)
    //     const employee = emp.find((emp) => emp.name === leadData.assignedTo)
    //     setSelectEmployee(employee)
    //     console.log(employee)
    // }

    useEffect(() => {
        if(!inputData.lead) return 

        const leadData = leads.find((lead) => lead.name === inputData.lead)

        const employee = emp.find((emp) => emp.name === leadData.assignedTo)

        setSelectEmployee(employee)
    },[inputData.lead])

    console.log(selectEmployee)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData((prev) => ({ ...prev, [name]: value }))
    }
    console.log(inputData)
    return (
        <div>
            <div>
                <form>
                    <div className="border grid grid-cols-3 p-2 ">
                        <div className="border flex flex-col gap-2 m-2">
                            <label>Title :</label>
                            <input name="title" className="border rounded" onChange={handleChange} type="text" placeholder="enter task title" />
                        </div>

                        <div className="border flex flex-col gap-2 m-2">
                            <label>Description</label>
                            <input name="description" className="border rounded" onChange={handleChange} type="text" placeholder='enter task description' />
                        </div>

                        <div className="border flex flex-col gap-2 m-2">
                            <label>Lead</label>
                            <select name="lead" className="border rounded" onChange={(e) => { handleChange(e), selectedEmployee() }}>
                                <option disabled selected>Select Lead</option>
                                {leads.map((lead) => {
                                    return (
                                        <option>{lead.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <label>Assign</label>
                            <div>{selectedEmployee.name}</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask
