import React, { useState } from 'react'
import EmployeeForm from '../component/Employee/EmployeeForm'
import AddForm from '../component/Employee/AddForm'
import EmployeeCard from '../component/Employee/EmployeeCard'
import EmployeeTable from '../component/Employee/EmployeeTable'

const Employee = () => {

    // const emp = JSON.parse(localStorage.getItem("employee"))

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    return (
        <div>
            { open && <AddForm data={data} setData={setData} open={open} setOpen={setOpen} />}
            <EmployeeForm open={open} setOpen={setOpen} />
            <EmployeeCard data={data} setData={setData} />
            <EmployeeTable data={data} setData={setData} />
        </div>
    )
}

export default Employee
