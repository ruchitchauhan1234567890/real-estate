import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { BiSolidUserMinus } from "react-icons/bi";
import { BsBagCheckFill } from "react-icons/bs";




const EmployeeCard = ({ data, setData }) => {

    const cards = [
    {
        title: "All Employee",
        value: totalEmployee,
        icon: <IoPeopleSharp />
    },
    {
        title : "Active Employee",
        value : 23,
        icon : <MdOutlineEmojiPeople />
    },
    {
        title: "Inactive Employee",
        value : 12,
        icon :<BiSolidUserMinus />
    },
    {
        title: "Department",
        value: 3,
        icon :<BsBagCheckFill />
    }
]

    console.log(data)

    const totalEmployee = data.length
    const activeEmployee = data.filter((curr) => curr.status == active)
    console.log(activeEmployee)
    console.log(totalEmployee)
    console.log(data)
    return (
        <div>

        </div>
    )
}

export default EmployeeCard
