import React from "react"
import { IoPeopleSharp } from "react-icons/io5"
import { HiUsers } from "react-icons/hi"
import { FaAngleDoubleUp } from "react-icons/fa"
import { IoPeopleCircle } from "react-icons/io5"
import { FaRegCheckCircle } from "react-icons/fa"
import { MdEmojiPeople } from "react-icons/md"

const SelectEmpCard = ({ selectEmp }) => {

  const lead =
    JSON.parse(localStorage.getItem("leads")) || []

  const task =
    JSON.parse(localStorage.getItem("tasks")) || []

  const hisLeads = lead.filter(
    (lead) => lead.assignedTo === selectEmp
  )

  const hisTasks = task.filter(
    (task) => task.assign === selectEmp
  )

  const totalLead = hisLeads.length

  const convertedLead = hisLeads.filter(
    (lead) => lead.status === "Converted"
  ).length

  const conversionRate =
    totalLead > 0
      ? ((convertedLead / totalLead) * 100).toFixed(1)
      : 0

  const totalTask = hisTasks.length

  const completedTask = hisTasks.filter(
    (task) => task.taskStatus === "Completed"
  ).length

  const pendingTask = hisTasks.filter(
    (task) => task.taskStatus === "Pending"
  ).length


  const card = [
    {
      title: "Total Leads",
      value: totalLead,
      icon: IoPeopleSharp,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Converted Leads",
      value: convertedLead,
      icon: HiUsers,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Conversion Rate",
      value: `${conversionRate}%`,
      icon: FaAngleDoubleUp,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500"
    },
    {
      title: "Total Tasks",
      value: totalTask,
      icon: IoPeopleCircle,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500"
    },
    {
      title: "Tasks Completed",
      value: completedTask,
      icon: FaRegCheckCircle,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Pending Tasks",
      value: pendingTask,
      icon: MdEmojiPeople,
      iconBg: "bg-red-100",
      iconColor: "text-red-500"
    }
  ]


  return (
    <div className="mt-2">

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-2
        "
      >

        {card.map((item, index) => {

          const Icon = item.icon

          return (
            <div
              key={index}
              className="
                bg-white
                border
                border-gray-200
                rounded-lg
                px-2.5
                py-2
                flex
                items-center
                gap-2
                shadow-sm
                hover:shadow-md
                transition-shadow
                min-w-0
              "
            >

              {/* Icon */}
              <div
                className={`
                  ${item.iconBg}
                  ${item.iconColor}
                  w-8
                  h-8
                  rounded-md
                  flex
                  items-center
                  justify-center
                  shrink-0
                `}
              >
                <Icon className="w-4 h-4" />
              </div>


              {/* Content */}
              <div className="min-w-0">

                <p
                  className="
                    text-[9px]
                    text-gray-500
                    font-medium
                    truncate
                    leading-tight
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    text-sm
                    font-bold
                    text-gray-900
                    mt-0.5
                    leading-none
                  "
                >
                  {item.value}
                </p>

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default SelectEmpCard