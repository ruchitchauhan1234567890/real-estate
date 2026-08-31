import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { BiSolidUserMinus } from "react-icons/bi";
import { BsBagCheckFill } from "react-icons/bs";




const EmployeeCard = ({ data, setData }) => {
    const employee = JSON.parse(localStorage.getItem("employee"))
    console.log(employee)


    // const totalEmployee = data.length
    // const activeEmployee = data.filter((curr) => curr.status === "Active")
    // const activeEmp = activeEmployee.length

    // const inactiveEmployee = data.filter((curr) => curr.status === "Inactive")
    // const inactiveEmp = inactiveEmployee.length

    const totalEmployee = employee.length
    const inactiveEmp = employee.filter((curr) => curr.status === "Inactive").length
    const activeEmp = employee.filter((curr) => curr.status === "Active").length

    const cards = [
        {
            title: "All Employee",
            value: totalEmployee,
            icon: IoPeopleSharp 
        },
        {
            title: "Active Employee",
            value: activeEmp,
            icon: MdOutlineEmojiPeople 
        },
        {
            title: "Inactive Employee",
            value: inactiveEmp,
            icon: BiSolidUserMinus
        }
    ]

    console.log(data)

    
    console.log(totalEmployee)
    console.log(data)
    return (
        <div className="grid grid-cols-3 gap-3 mt-3  place-items-center">
            {cards.map((data,index) => {
                return (
                    <div key={index} className="w-full h-15 shadow-sm rounded-sm px-2  flex items-center">
                        <div className="w-auto h-auto items-center bg-[#E8DADA] rounded-sm p-1 mr-7 m-2">
                            <data.icon className="w-8 h-8 bg-[]  " />
                        </div>
                        <div>
                            <p>{data.title}</p>
                            <p>{data.value}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default EmployeeCard
