import React from 'react'
import { MdFactCheck } from "react-icons/md";

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
        }
    ]

    const totalProperties = propertiesData.length
  return (
    <div>
      
    </div>
  )
}

export default PropertiesCard
