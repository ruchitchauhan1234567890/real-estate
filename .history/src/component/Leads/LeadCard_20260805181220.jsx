import React, { useContext } from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiChat } from "react-icons/hi";
import { AiFillTag } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaThumbsDown } from "react-icons/fa";
import { MdAccessibilityNew } from "react-icons/md";
import { LeadContext } from '../../ContextAPI/LeadContext';

const LeadCard = () => {

    const {leadData} = useContext(LeadContext)
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    const leads = JSON.parse(localStorage.getItem("leads"))
    console.log(leads)
    const myLead = leads.filter((lead) => lead.assignedTo === loggedUser.name)
    console.log(myLead)

    console.log(leadData)
    const totalLead = leads.length
    const connected = leads.filter((curr,index) => curr.status === "Connected").length
    const qualified = leads.filter((curr,index) => curr.status === "Qualified").length
    const converted = leads.filter((curr,index) => curr.status === "Converted").length
    const lost = leads.filter((curr,index) => curr.status === "Lost").length
    const newLead = leads.filter((curr,index) => curr.status === "New").length

    const cards = [
        {
            id: 1,
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp
        },
        {
            id: 2,
            title: "Connected",
            value: connected,
            icon: HiChat
        },
        {
            id: 3,
            title: "Qualified",
            value: qualified,
            icon: AiFillTag
        },
        {
            id: 4,
            title: "Converted",
            value: converted,
            icon: HiUsers
        },
        {
            id: 5,
            title: "Lost",
            value: lost,
            icon: FaThumbsDown
        },
        {
            id : 6,
            title :"New",
            value : newLead,
            icon : MdAccessibilityNew 
        }
    ]
    return (
        <div className="grid grid-cols-6 gap-3  mt-3">
            {cards.map((curr, index) => {
                return (
                    <div className="shadow-sm w-full h-15 flex items-center px-2 rounded-sm">
                        <curr.icon className="w-10 h-10 bg-[#E8DADA] m-2 p-1 rounded-sm"/>
                        <div className="px-2">
                            <p>{curr.title}</p>
                            <p>{curr.value}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LeadCard
