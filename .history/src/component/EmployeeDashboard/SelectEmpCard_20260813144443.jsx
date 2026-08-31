import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { FaAngleDoubleUp } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

const SelectEmpCard = ({hisLeads}) => {
  const card = [
    {
      title : "Total Lead",
      value : "",
      icon : IoPeopleSharp
    },
    {
      title : "Converted Lead",
      value : "",
      icon : HiUsers
    },
    {
      title : "Conversion Rate",
      value : "",
      icon :FaAngleDoubleUp 
    },
    {
      title : "Total Task",
      value : '',
      icon : IoPeopleCircle
    },
    {
      title : "Task Completed",
      value : "",
      icon :  FaRegCheckCircle
    }
  ]
  return (
    <div>
      
    </div>
  )
}

export default SelectEmpCard
