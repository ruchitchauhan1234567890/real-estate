import React from "react"
import { FaHouse } from "react-icons/fa6"
import { IoPeopleSharp } from "react-icons/io5"
import { FaHouseFlag } from "react-icons/fa6"
import { FaCalendarCheck } from "react-icons/fa6"
import { NavLink, useNavigate } from "react-router-dom"
import { ImAddressBook } from "react-icons/im"
import { IoLogOutOutline } from "react-icons/io5"

export const SideBar = () => {

    const [logoutOpen, setLogoutOpen] = useState(false)


    const navigate = useNavigate()

    const loggedUser =
        JSON.parse(localStorage.getItem("loggedUser")) || {}
    const logout = () => {
        localStorage.removeItem("loggedUser")
        navigate("/")
    }
    return (
        <div
            className="
                w-14
                sm:w-16
                md:w-40
                h-screen
                shrink-0
                bg-[#1F1F30]
                text-[#F2E9E9]
                flex
                flex-col
                border-r
                border-[#2B2B40]
            "
        >

            {/* ================= LOGO ================= */}

            <div
                className="
                    h-12
                    px-2
                    md:px-3
                    flex
                    items-center
                    justify-center
                    md:justify-start
                    border-b
                    border-[#353548]
                    shrink-0
                "
            >

                <div
                    className="
                        w-7
                        h-7
                        md:w-6
                        md:h-6
                        rounded-md
                        bg-blue-600
                        flex
                        items-center
                        justify-center
                        md:mr-2
                        shrink-0
                    "
                >
                    <FaHouse className="text-[11px] text-white" />
                </div>


                {/* Desktop Logo Text */}

                <div className="hidden md:block">

                    <p
                        className="
                            text-[12px]
                            font-semibold
                            text-white
                            leading-none
                        "
                    >
                        Real-Estate
                    </p>

                    <p
                        className="
                            text-[8px]
                            text-gray-400
                            mt-1
                        "
                    >
                        CRM
                    </p>

                </div>

            </div>


            {/* ================= NAVIGATION ================= */}

            <div
                className="
                    flex-1
                    px-1.5
                    md:px-2
                    py-3
                    overflow-y-auto
                    overflow-x-hidden
                "
            >

                {/* Main */}

                <p
                    className="
                        hidden
                        md:block
                        px-2
                        mb-2
                        text-[8px]
                        font-semibold
                        tracking-wider
                        text-gray-500
                    "
                >
                    MAIN
                </p>


                {/* Dashboard */}

                <NavLink
                    to="/dashboard"
                    end
                    title="Dashboard"
                    className={({ isActive }) => `
                        flex
                        items-center
                        justify-center
                        md:justify-start
                        gap-2
                        px-2
                        md:px-2.5
                        py-2
                        md:py-1.5
                        mb-1
                        rounded-md
                        text-[10px]
                        transition-all
                        ${isActive
                            ? "bg-blue-600 text-white shadow-sm"
                            : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                        }
                    `}
                >
                    <FaHouse className="text-[12px] shrink-0" />

                    <p className="hidden md:block">
                        Dashboard
                    </p>
                </NavLink>


                {/* Management */}

                <p
                    className="
                        hidden
                        md:block
                        px-2
                        mt-4
                        mb-2
                        text-[8px]
                        font-semibold
                        tracking-wider
                        text-gray-500
                    "
                >
                    MANAGEMENT
                </p>


                <div className="space-y-0.5">


                    {/* Employee */}

                    {
                        loggedUser.isAdmin &&
                        <NavLink
                            to="/dashboard/employees"
                            title="Employee"
                            className={({ isActive }) => `
                                flex
                                items-center
                                justify-center
                                md:justify-start
                                gap-2
                                px-2
                                md:px-2.5
                                py-2
                                md:py-1.5
                                rounded-md
                                text-[10px]
                                transition-all
                                ${isActive
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                                }
                            `}
                        >
                            <IoPeopleSharp className="text-[13px] shrink-0" />

                            <p className="hidden md:block">
                                Employee
                            </p>
                        </NavLink>
                    }


                    {/* Employee Dashboard */}

                    {
                        loggedUser.isAdmin &&
                        <NavLink
                            to="/dashboard/employeeDashboard"
                            title="Employee Dashboard"
                            className={({ isActive }) => `
                                flex
                                items-center
                                justify-center
                                md:justify-start
                                gap-2
                                px-2
                                md:px-2.5
                                py-2
                                md:py-1.5
                                rounded-md
                                text-[10px]
                                transition-all
                                ${isActive
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                                }
                            `}
                        >
                            <ImAddressBook className="text-[13px] shrink-0" />

                            <p className="hidden md:block">
                                Employee Dashboard
                            </p>
                        </NavLink>
                    }


                    {/* Leads */}

                    <NavLink
                        to="/dashboard/leads"
                        title="Leads"
                        className={({ isActive }) => `
                            flex
                            items-center
                            justify-center
                            md:justify-start
                            gap-2
                            px-2
                            md:px-2.5
                            py-2
                            md:py-1.5
                            rounded-md
                            text-[10px]
                            transition-all
                            ${isActive
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                            }
                        `}
                    >
                        <IoPeopleSharp className="text-[13px] shrink-0" />

                        <p className="hidden md:block">
                            Leads
                        </p>
                    </NavLink>


                    {/* Leads Dashboard */}

                    {
                        loggedUser.isAdmin &&
                        <NavLink
                            to="/dashboard/leadDashboard"
                            title="Leads Dashboard"
                            className={({ isActive }) => `
                                flex
                                items-center
                                justify-center
                                md:justify-start
                                gap-2
                                px-2
                                md:px-2.5
                                py-2
                                md:py-1.5
                                rounded-md
                                text-[10px]
                                transition-all
                                ${isActive
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                                }
                            `}
                        >
                            <FaHouseFlag className="text-[12px] shrink-0" />

                            <p className="hidden md:block">
                                Leads Dashboard
                            </p>
                        </NavLink>
                    }


                    {/* Tasks */}

                    <NavLink
                        to="/dashboard/tasks"
                        title="Tasks"
                        className={({ isActive }) => `
                            flex
                            items-center
                            justify-center
                            md:justify-start
                            gap-2
                            px-2
                            md:px-2.5
                            py-2
                            md:py-1.5
                            rounded-md
                            text-[10px]
                            transition-all
                            ${isActive
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                            }
                        `}
                    >
                        <FaCalendarCheck className="text-[12px] shrink-0" />

                        <p className="hidden md:block">
                            Tasks
                        </p>
                    </NavLink>

                </div>

            </div>


            {/* ================= FOOTER ================= */}

            <div
                className="
        px-2
        md:px-3
        py-2
        border-t
        border-[#353548]
        shrink-0
    "
            >

                {/* Logout */}

                <button
                    onClick={logout}
                    title="Logout"
                    className="
            w-full
            flex
            items-center
            justify-center
            md:justify-start
            gap-2
            px-2
            md:px-2.5
            py-2
            rounded-md
            text-[10px]
            text-gray-300
            hover:bg-red-500/10
            hover:text-red-400
            transition-all
        "
                >
                    <IoLogOutOutline className="text-[14px] shrink-0" />

                    <span className="hidden md:block">
                        Logout
                    </span>
                </button>


                {/* Footer Info */}

                <div className="hidden md:block mt-2">

                    <p
                        className="
                text-[8px]
                font-medium
                text-gray-400
            "
                    >
                        Real Estate CRM
                    </p>

                    <p
                        className="
                text-[7px]
                text-gray-600
                mt-0.5
            "
                    >
                        © 2026 All rights reserved
                    </p>

                </div>

            </div>

        </div>
    )
}