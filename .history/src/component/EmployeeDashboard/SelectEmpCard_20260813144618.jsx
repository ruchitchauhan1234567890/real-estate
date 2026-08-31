import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { FaAngleDoubleUp } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";

const SelectEmpCard = ({ hisLeads, selectEmp }) => {
  const lead = JSON.parse(localStorage.getItem("leads"))
  const hisLeads = lead.filter((lead) => lead.assignedTo === selectEmp)
  console.log(hisLeads)
  console.log(selectEmp)
  
  const card = [
    {
      title: "Total Lead",
      value: "",
      icon: IoPeopleSharp
    },
    {
      title: "Converted Lead",
      value: "",
      icon: HiUsers
    },
    {
      title: "Conversion Rate",
      value: "",
      icon: FaAngleDoubleUp
    },
    {
      title: "Total Task",
      value: '',
      icon: IoPeopleCircle
    },
    {
      title: "Task Completed",
      value: "",
      icon: FaRegCheckCircle
    },
    {
      title: "Pending Task",
      value: "",
      icon: MdEmojiPeople
    }
  ]
  return (
    <div>

    </div>
  )
}

export default SelectEmpCard
