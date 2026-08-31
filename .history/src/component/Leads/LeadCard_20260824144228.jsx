import React, { useContext } from "react"
import { IoPeopleSharp } from "react-icons/io5"
import { HiChat, HiUsers } from "react-icons/hi"
import { AiFillTag } from "react-icons/ai"
import { FaThumbsDown } from "react-icons/fa"
import { MdAccessibilityNew } from "react-icons/md"
import { LeadContext } from "../../ContextAPI/LeadContext"

const LeadCard = () => {

    const { leadData } = useContext(LeadContext)

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}

    const leads =
        JSON.parse(localStorage.getItem("leads")) || []

    const myLead = leads.filter(
        (lead) => lead.assignedTo === loggedUser.name
    )

    const data = loggedUser.isAdmin ? leads : myLead

    const totalLead = data.length

    const connected = data.filter(
        (lead) => lead.status === "Connected"
    ).length

    const qualified = data.filter(
        (lead) => lead.status === "Qualified"
    ).length

    const converted = data.filter(
        (lead) => lead.status === "Converted"
    ).length

    const lost = data.filter(
        (lead) => lead.status === "Lost"
    ).length

    const newLead = data.filter(
        (lead) => lead.status === "New"
    ).length


    const cards = [
        {
            id: 1,
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp,
            bg: "bg-purple-50",
            color: "text-purple-600"
        },
        {
            id: 2,
            title: "Connected",
            value: connected,
            icon: HiChat,
            bg: "bg-blue-50",
            color: "text-blue-600"
        },
        {
            id: 3,
            title: "Qualified",
            value: qualified,
            icon: AiFillTag,
            bg: "bg-orange-50",
            color: "text-orange-500"
        },
        {
            id: 4,
            title: "Converted",
            value: converted,
            icon: HiUsers,
            bg: "bg-green-50",
            color: "text-green-600"
        },
        {
            id: 5,
            title: "Lost",
            value: lost,
            icon: FaThumbsDown,
            bg: "bg-red-50",
            color: "text-red-500"
        },
        {
            id: 6,
            title: "New",
            value: newLead,
            icon: MdAccessibilityNew,
            bg: "bg-cyan-50",
            color: "text-cyan-600"
        }
    ]


    return (
        <div className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-2
            mt-2
        ">

            {cards.map((item) => {

                const Icon = item.icon

                return (
                    <div
                        key={item.id}
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
                            transition
                            min-w-0
                        "
                    >

                        {/* Icon */}
                        <div
                            className={`
                                ${item.bg}
                                ${item.color}
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

                            <p className="
                                text-[10px]
                                font-medium
                                text-gray-500
                                truncate
                            ">
                                {item.title}
                            </p>

                            <p className="
                                text-base
                                font-bold
                                text-gray-900
                                leading-tight
                                mt-0.5
                            ">
                                {item.value}
                            </p>

                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default LeadCard