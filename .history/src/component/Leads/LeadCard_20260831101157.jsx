import React, {
    useContext,
    useEffect,
    useState
} from "react"

import { IoPeopleSharp } from "react-icons/io5"
import { HiChat, HiUsers } from "react-icons/hi"
import { AiFillTag } from "react-icons/ai"
import { FaThumbsDown } from "react-icons/fa"
import { MdAccessibilityNew } from "react-icons/md"

import { LeadContext } from "../../ContextAPI/LeadContext"
import { ThemeContext } from "../../ContextAPI/ThemeContext"


const LeadCard = () => {

    const { leadData = [] } =
        useContext(LeadContext)

    const { theme } =
        useContext(ThemeContext)

    const [localLeads, setLocalLeads] =
        useState(() => {

            try {

                return (
                    JSON.parse(
                        localStorage.getItem("leads")
                    ) || []
                )

            } catch {

                return []

            }

        })
 

    useEffect(() => {

        const loadLeads = () => {

            try {

                const storedLeads =
                    JSON.parse(
                        localStorage.getItem("leads")
                    ) || []

                setLocalLeads(
                    Array.isArray(storedLeads)
                        ? storedLeads
                        : []
                )

            } catch {

                setLocalLeads([])

            }

        }


        loadLeads()


        window.addEventListener(
            "storage",
            loadLeads
        )


        return () => {

            window.removeEventListener(
                "storage",
                loadLeads
            )

        }

    }, [])


    const loggedUser =
        JSON.parse(
            localStorage.getItem("loggedUser")
        ) || {}

    

    const leads =
        Array.isArray(leadData) &&
        leadData.length > 0

            ? leadData

            : localLeads


    // =====================================================
    // NORMALIZE NAME
    // =====================================================

    const normalizeName = (name) => {

        return String(name || "")
            .trim()
            .toLowerCase()

    }


    // =====================================================
    // ADMIN CHECK
    // =====================================================

    const isAdmin =
        loggedUser.isAdmin === true ||
        loggedUser.role?.toLowerCase() === "admin"


    // =====================================================
    // EMPLOYEE LEADS
    // =====================================================

    const myLead =
        leads.filter(
            (lead) => {

                return (
                    normalizeName(
                        lead.assignedTo
                    ) ===
                    normalizeName(
                        loggedUser.name
                    )
                )

            }
        )


    // =====================================================
    // ADMIN -> ALL LEADS
    // EMPLOYEE -> ASSIGNED LEADS
    // =====================================================

    const data =
        isAdmin
            ? leads
            : myLead


    // =====================================================
    // LEAD COUNTS
    // =====================================================

    const totalLead =
        data.length


    const connected =
        data.filter(
            (lead) =>
                lead.status === "Connected"
        ).length


    const qualified =
        data.filter(
            (lead) =>
                lead.status === "Qualified"
        ).length


    const converted =
        data.filter(
            (lead) =>
                lead.status === "Converted"
        ).length


    const lost =
        data.filter(
            (lead) =>
                lead.status === "Lost"
        ).length


    const newLead =
        data.filter(
            (lead) =>
                lead.status === "New"
        ).length


    // =====================================================
    // CARDS
    // =====================================================

    const cards = [

        {
            id: 1,

            title: "Total Leads",

            value: totalLead,

            icon: IoPeopleSharp,

            bg: `
                bg-purple-50
                dark:bg-purple-500/10
            `,

            color: `
                text-purple-600
                dark:text-purple-400
            `
        },


        {
            id: 2,

            title: "Connected",

            value: connected,

            icon: HiChat,

            bg: `
                bg-blue-50
                dark:bg-blue-500/10
            `,

            color: `
                text-blue-600
                dark:text-blue-400
            `
        },


        {
            id: 3,

            title: "Qualified",

            value: qualified,

            icon: AiFillTag,

            bg: `
                bg-orange-50
                dark:bg-orange-500/10
            `,

            color: `
                text-orange-500
                dark:text-orange-400
            `
        },


        {
            id: 4,

            title: "Converted",

            value: converted,

            icon: HiUsers,

            bg: `
                bg-green-50
                dark:bg-green-500/10
            `,

            color: `
                text-green-600
                dark:text-green-400
            `
        },


        {
            id: 5,

            title: "Lost",

            value: lost,

            icon: FaThumbsDown,

            bg: `
                bg-red-50
                dark:bg-red-500/10
            `,

            color: `
                text-red-500
                dark:text-red-400
            `
        },


        {
            id: 6,

            title: "New",

            value: newLead,

            icon: MdAccessibilityNew,

            bg: `
                bg-cyan-50
                dark:bg-cyan-500/10
            `,

            color: `
                text-cyan-600
                dark:text-cyan-400
            `
        }

    ]


    // =====================================================
    // UI
    // =====================================================

    return (

        <div
            className="
                grid
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-6

                gap-2

                mt-2
            "
        >

            {cards.map((item) => {

                const Icon =
                    item.icon


                return (

                    <div
                        key={item.id}

                        className="
                            bg-white
                            dark:bg-[#1f1f2b]

                            border
                            border-gray-200
                            dark:border-[#303044]

                            rounded-lg

                            px-2.5
                            py-2

                            flex
                            items-center
                            gap-2

                            shadow-sm
                            dark:shadow-black/20

                            hover:shadow-md
                            dark:hover:shadow-black/30

                            transition-colors
                            duration-200

                            min-w-0
                        "
                    >

                        {/* ================= ICON ================= */}

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

                                transition-colors
                                duration-200
                            `}
                        >

                            <Icon
                                className="
                                    w-4
                                    h-4
                                "
                            />

                        </div>


                        {/* ================= CONTENT ================= */}

                        <div className="min-w-0">

                            <p
                                className="
                                    text-[10px]
                                    font-medium

                                    text-gray-500
                                    dark:text-gray-400

                                    truncate

                                    transition-colors
                                    duration-200
                                "
                            >
                                {item.title}
                            </p>


                            <p
                                className="
                                    text-base
                                    font-bold

                                    text-gray-900
                                    dark:text-white

                                    leading-tight

                                    mt-0.5

                                    transition-colors
                                    duration-200
                                "
                            >
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