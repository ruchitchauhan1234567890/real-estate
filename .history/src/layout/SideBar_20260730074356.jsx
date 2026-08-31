import React from 'react'
import { FaHouse } from "react-icons/fa6";
    import { IoPeopleSharp } from "react-icons/io5";
import { FaHouseFlag } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaFileSignature } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
    return (
        <div className="w-40 h-screen bg-[#1F1F30] text-[#F2E9E9] px-3 flex flex-col x">
            <div>
                <p className="font-bold text-center p-2">Real-Estate</p>
                <hr />
            </div>
            <div className="mb-18">
                <NavLink to="/"  className=" cursor-pointer my-3 flex items-center gap-2 pl-3 rounded-sm p-1 hover:bg-blue-600">
                    <FaHouse />
                    <p>Dashboard</p>
                </NavLink>
                <p className="text-sm text-[#B0A2A2]">MANAGEMENT</p>
                <ul>
                    <NavLink to="/employees" className="rounded-sm  my-3 flex items-center  gap-2 pl-3 p-1 hover:bg-blue-600">
                        <IoPeopleSharp />
                        <p to="/employees">Employee</p>
                    </NavLink>
                    {/* <NavLink to="/properties" className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <FaHouseFlag />
                        <p>Properties</p>
                    </NavLink> */}
                    <NavLink to="/leads" className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <IoPeopleSharp />
                        <p>Leads</p>
                    </NavLink>
                    <NavLink to="/tasks" className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <FaCalendarCheck />
                        <p>Tasks</p>
                    </NavLink>
                    {/* <NavLink to="/customers" className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <IoPeopleSharp />
                        <p>Customer</p>
                    </NavLink> */}
                </ul>
                <p className="text-sm text-[#B0A2A2]">REPORTS</p>
                <ul>
                    <NavLink to="/reports" className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <FaFileSignature />
                        <p>Report</p>
                    </NavLink>
                </ul>
            </div>
            <div className=" mt-25 text-sm ">
                <hr />
                <p>@2026 Real Estate CRM</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}


