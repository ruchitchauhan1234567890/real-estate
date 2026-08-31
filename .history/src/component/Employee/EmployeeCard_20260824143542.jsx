import React, { useContext } from "react"
import { IoPeopleSharp } from "react-icons/io5"
import { MdOutlineEmojiPeople } from "react-icons/md"
import { BiSolidUserMinus } from "react-icons/bi"
import { EmployeeContext } from "../../ContextAPI/EmployeeContext"

const EmployeeCard = () => {

    const { data } = useContext(EmployeeContext)

    const employee =
        JSON.parse(localStorage.getItem("employee")) || []

    const employees = employee.filter(
        (curr) => !curr.isAdmin
    )

    const totalEmployee = employees.length

    const inactiveEmp = employees.filter(
        (curr) => curr.status === "Inactive"
    ).length

    const activeEmp = employees.filter(
        (curr) => curr.status === "Active"
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
        <div className="mt-3">

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-3
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
                                rounded-xl
                                px-4
                                py-3
                                flex
                                items-center
                                gap-4
                                shadow-sm
                                hover:shadow-md
                                transition-shadow
                            "
                        >

                            {/* Icon */}
                            <div
                                className={`
                                    ${item.iconBg}
                                    ${item.iconColor}
                                    w-12
                                    h-12
                                    rounded-lg
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                `}
                            >
                                <Icon className="w-6 h-6" />
                            </div>


                            {/* Content */}
                            <div className="flex-1 min-w-0">

                                <p className="
                                    text-xs
                                    text-gray-500
                                    font-medium
                                ">
                                    {item.title}
                                </p>

                                <p className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    mt-1
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