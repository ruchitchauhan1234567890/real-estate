import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHouseFlag } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { ImAddressBook } from "react-icons/im";

export const SideBar = () => {

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

    return (
        <div className="
            w-40
            h-screen
            bg-[#1F1F30]
            text-[#F2E9E9]
            flex
            flex-col
            border-r
            border-[#2B2B40]
        ">

            {/* Logo */}
            <div className="
                h-12
                px-3
                flex
                items-center
                border-b
                border-[#353548]
            ">
                <div className="
                    w-6
                    h-6
                    rounded-md
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    mr-2
                ">
                    <FaHouse className="text-[11px] text-white" />
                </div>

                <div>
                    <p className="
                        text-[12px]
                        font-semibold
                        text-white
                        leading-none
                    ">
                        Real-Estate
                    </p>

                    <p className="
                        text-[8px]
                        text-gray-400
                        mt-1
                    ">
                        CRM
                    </p>
                </div>
            </div>


            {/* Navigation */}
            <div className="flex-1 px-2 py-3 overflow-y-auto">

                {/* Main */}
                <p className="
                    px-2
                    mb-2
                    text-[8px]
                    font-semibold
                    tracking-wider
                    text-gray-500
                ">
                    MAIN
                </p>

                <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) => `
                        flex
                        items-center
                        gap-2
                        px-2.5
                        py-1.5
                        mb-1
                        rounded-md
                        text-[10px]
                        transition-all
                        ${
                            isActive
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                        }
                    `}
                >
                    <FaHouse className="text-[11px]" />
                    <p>Dashboard</p>
                </NavLink>


                {/* Management */}
                <p className="
                    px-2
                    mt-4
                    mb-2
                    text-[8px]
                    font-semibold
                    tracking-wider
                    text-gray-500
                ">
                    MANAGEMENT
                </p>

                <div className="space-y-0.5">

                    {/* Employee */}
                    {
                        loggedUser.isAdmin &&
                        <NavLink
                            to="/dashboard/employees"
                            className={({ isActive }) => `
                                flex
                                items-center
                                gap-2
                                px-2.5
                                py-1.5
                                rounded-md
                                text-[10px]
                                transition-all
                                ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                                }
                            `}
                        >
                            <IoPeopleSharp className="text-[12px]" />
                            <p>Employee</p>
                        </NavLink>
                    }


                    {/* Employee Dashboard */}
                    {
                        loggedUser.isAdmin &&
                        <NavLink
                            to="/dashboard/employeeDashboard"
                            className={({ isActive }) => `
                                flex
                                items-center
                                gap-2
                                px-2.5
                                py-1.5
                                rounded-md
                                text-[10px]
                                transition-all
                                ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                                }
                            `}
                        >
                            <ImAddressBook className="text-[12px]" />
                            <p>Employee Dashboard</p>
                        </NavLink>
                    }


                    {/* Leads */}
                    <NavLink
                        to="/dashboard/leads"
                        className={({ isActive }) => `
                            flex
                            items-center
                            gap-2
                            px-2.5
                            py-1.5
                            rounded-md
                            text-[10px]
                            transition-all
                            ${
                                isActive
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                            }
                        `}
                    >
                        <IoPeopleSharp className="text-[12px]" />
                        <p>Leads</p>
                    </NavLink>


                    {/* Leads Dashboard */}
                    {
                        loggedUser.isAdmin &&
                        <NavLink
                            to="/dashboard/leadDashboard"
                            className={({ isActive }) => `
                                flex
                                items-center
                                gap-2
                                px-2.5
                                py-1.5
                                rounded-md
                                text-[10px]
                                transition-all
                                ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                                }
                            `}
                        >
                            <FaHouseFlag className="text-[11px]" />
                            <p>Leads Dashboard</p>
                        </NavLink>
                    }


                    {/* Tasks */}
                    <NavLink
                        to="/dashboard/tasks"
                        className={({ isActive }) => `
                            flex
                            items-center
                            gap-2
                            px-2.5
                            py-1.5
                            rounded-md
                            text-[10px]
                            transition-all
                            ${
                                isActive
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-gray-300 hover:bg-[#2A2A40] hover:text-white"
                            }
                        `}
                    >
                        <FaCalendarCheck className="text-[11px]" />
                        <p>Tasks</p>
                    </NavLink>

                </div>
            </div>


            {/* Footer */}
            <div className="
                px-3
                py-3
                border-t
                border-[#353548]
            ">

                <p className="
                    text-[8px]
                    font-medium
                    text-gray-400
                ">
                    Real Estate CRM
                </p>

                <p className="
                    text-[7px]
                    text-gray-600
                    mt-0.5
                ">
                    © 2026 All rights reserved
                </p>

            </div>

        </div>
    )
}