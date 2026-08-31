import React from 'react'
import { MdFactCheck } from "react-icons/md";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";

const PropertiesCard = ({ propertiesData }) => {
    const totalProperties = propertiesData.length

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
            value: 12,
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
        <div className="grid grid-cols-4 gap-3">
            {cards.map((curr) => {
                return (
                    <div className="w-full h-15 border-1 flex items-center px-2">
                        <curr.icon className="w-10 h-10 bg-amber-300 m-2" />
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
