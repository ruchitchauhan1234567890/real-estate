import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { BiSolidUserMinus } from "react-icons/bi";
import { BsBagCheckFill } from "react-icons/bs";




const EmployeeCard = ({ data, setData }) => {
    const totalEmployee = data.length
    const activeEmployee = data.filter((curr) => curr.status === "active")
    const activeEmp = activeEmployee.length

    const inactiveEmployee = data.filter((curr) => curr.status === "Inactive")
    const inactiveEmp = inactiveEmployee.length

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




    console.log(activeEmployee)
    console.log(totalEmployee)
    console.log(data)
    return (
        <div className="grid grid-cols-3 gap-auto mt-4">
            {cards.map((data,index) => {
                return (
                    <div key={index} className="w-70 h-15 shadow-2xl rounded-sm flex items-center">
                        <div className="w-auto h-auto items-center bg-[#E8DADA] rounded-sm p-1 m-2">
                            <data.icon className="w-10 h-10 bg-[]" />
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
