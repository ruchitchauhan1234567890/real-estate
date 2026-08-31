import React from 'react'
import { MdFactCheck } from "react-icons/md";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";

const PropertiesCard = ({propertiesData}) => {

    const cards = [
        {
            id:1,
            title : "Total Properties",
            value : totalProperties,
            icon : FaHouseUser
        },
        {
            id:2,
            title : "Available",
            value : 12,
            icon : MdFactCheck
        },
        {
            id:3,
            title : "Sold",
            value: 12,
            icon : FaHouseCircleCheck 
        },
        {
            id :4,
            title : "Rented",
            value :1,
            icon : FaKey 
        }
    ]

    const totalProperties = propertiesData.length
  return (
    <div>
      
    </div>
  )
}

export default PropertiesCard
