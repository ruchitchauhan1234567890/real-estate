import React, { useContext } from "react"
import EmployeeForm from "../component/Employee/EmployeeForm"
import AddForm from "../component/Employee/AddForm"
import EmployeeCard from "../component/Employee/EmployeeCard"
import EmployeeTable from "../component/Employee/EmployeeTable"
import { EmployeeContext } from "../ContextAPI/EmployeeContext"

const Employee = () => {

    const { open } = useContext(EmployeeContext)

    return (
        <div className="
            w-full
            min-w-0
            px-0
            sm:px-1
            lg:px-0
        ">

            {open && <AddForm />}

            {/* Page Header / Filters */}
            <div className="w-full min-w-0">
                <EmployeeForm />
            </div>

            {/* Employee Statistics */}
            <div className="
                w-full
                min-w-0
                mt-2
            ">
                <EmployeeCard />
            </div>

            {/* Employee Table */}
            <div className="
                w-full
                min-w-0
                mt-2
                overflow-hidden
            ">
                <EmployeeTable />
            </div>

        </div>
    )
}

export default Employee