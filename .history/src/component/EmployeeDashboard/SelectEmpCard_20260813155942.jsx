import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { FaAngleDoubleUp } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";

const SelectEmpCard = ({ selectEmp }) => {
  const lead = JSON.parse(localStorage.getItem("leads"))
  const task = JSON.parse(localStorage.getItem("tasks"))
  const hisLeads = lead.filter((lead) => lead.assignedTo === selectEmp)
  const hisTasks = task.filter((task) => task.assign === selectEmp)

  const totalLead = hisLeads.length
  const convertedLead = hisLeads.filter((lead) => lead.status === "Converted").length
  const conversionRate = {` (convertedLead / totalLead) * 100 , %`},
  const totalTask = hisTasks.length
  const completedTask = hisTasks.filter((task) => task.taskStatus === "Completed").length
  const pendingTask = hisTasks.filter((task) => task.taskStatus === "Pending").length

  console.log("hiiii")

  const card = [
    {
      title: "Total Lead",
      value: totalLead,
      icon: IoPeopleSharp
    },
    {
      title: "Converted Lead",
      value: convertedLead,
      icon: HiUsers
    },
    {
      title: "Conversion Rate",
      value: conversionRate.toFixed(2),
      icon: FaAngleDoubleUp
    },
    {
      title: "Total Task",
      value: totalTask,
      icon: IoPeopleCircle
    },
    {
      title: "Task Completed",
      value: completedTask,
      icon: FaRegCheckCircle
    },
    {
      title: "Pending Task",
      value: pendingTask,
      icon: MdEmojiPeople
    }
  ]
  return (
    <div className="grid grid-cols-6 gap-2 mt-3 h-auto">
      {card.map((item) => 
        (
          <div className="w-auto gap-2 shadow-sm flex h-auto rounded-lg">
            <div className="my-auto ml-2 py-1  bg-gray-300 rounded-lg">
              <item.icon className="w-9 h-7"/>
            </div>
            <div className="">
              <p>{item.title}</p>
              <p>{item.value}</p>
            </div>
          </div>
        )
      
      )
      }
    </div>
  )
}

export default SelectEmpCard
