import React from "react"
import { IoPeopleSharp } from "react-icons/io5"
import { MdOutlineEmojiPeople } from "react-icons/md"
import { BiSolidUserMinus } from "react-icons/bi"

const EmployeeCard = () => {

    const employee =
        JSON.parse(localStorage.getItem("employee")) || []

    const employees = employee.filter(
        (curr) => !curr.isAdmin
    )

    const totalEmployee = employees.length

    const activeEmp = employees.filter(
        (curr) => curr.status === "Active"
    ).length

    const inactiveEmp = employees.filter(
        (curr) => curr.status === "Inactive"
    ).length


    const cards = [
        {
            title: "All Employees",
            value: totalEmployee,
            icon: IoPeopleSharp,
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            title: "Active Employees",
            value: activeEmp,
            icon: MdOutlineEmojiPeople,
            iconBg: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            title: "Inactive Employees",
            value: inactiveEmp,
            icon: BiSolidUserMinus,
            iconBg: "bg-red-100",
            iconColor: "text-red-500"
        }
    ]


    return (
        <div className="mt-2">

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-2
            ">

                {cards.map((item, index) => {

                    const Icon = item.icon

                    return (
                        <div
                            key={index}
                            className="
                                bg-white
                                border
                                border-gray-200
                                rounded-lg
                                px-3
                                py-2
                                flex
                                items-center
                                gap-2.5
                                shadow-sm
                                hover:shadow
                                transition
                            "
                        >

                            {/* Icon */}
                            <div
                                className={`
                                    ${item.iconBg}
                                    ${item.iconColor}
                                    w-9
                                    h-9
                                    rounded-md
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                `}
                            >
                                <Icon className="w-5 h-5" />
                            </div>


                            {/* Content */}
                            <div className="min-w-0">

                                <p className="
                                    text-[10px]
                                    text-gray-500
                                    font-medium
                                    truncate
                                ">
                                    {item.title}
                                </p>

                                <p className="
                                    text-lg
                                    font-bold
                                    text-gray-900
                                    mt-0.5
                                    leading-none
                                ">
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

export default EmployeeCard