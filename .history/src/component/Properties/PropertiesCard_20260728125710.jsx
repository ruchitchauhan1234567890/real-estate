import React from 'react'
import { MdFactCheck } from "react-icons/md";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";

const PropertiesCard = ({ propertiesData }) => {
    const totalProperties = propertiesData.length
    const available = propertiesData.filter((curr) => curr.status === "Available")
    const availableLength = available.length

    const cards = [
        {
            id: 1,
            title: "Total Properties",
            value: totalProperties,
            icon: FaHouseUser
        },
        {
            id: 2,
            title: "Available",
            value: availableLength,
            icon: MdFactCheck
        },
        {
            id: 3,
            title: "Sold",
            value: 12,
            icon: FaHouseCircleCheck
        },
        {
            id: 4,
            title: "Rented",
            value: 1,
            icon: FaKey
        }
    ]

    return (
        <div className="grid grid-cols-4 gap-3 mt-3">
            {cards.map((curr) => {
                return (
                    <div className="w-full h-15 shadow-sm flex items-center rounded-sm px-2">
                        <curr.icon className="w-10 h-10 bg-[#E8DADA] m-2 p-1 rounded-sm" />
                        <div>
                            <p>{curr.title}</p>
                            <p>{curr.value}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PropertiesCard
