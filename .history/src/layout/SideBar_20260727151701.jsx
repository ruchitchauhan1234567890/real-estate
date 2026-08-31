import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHouseFlag } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaFileSignature } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="w-40 h-screen bg-[#1F1F30] text-[#F2E9E9] px-3 flex flex-col justify-between">
            <div>
                <p className="font-bold text-center p-2">Real-Estate</p>
                <hr />
            </div>
            <div>
                <ul className=" my-3 flex items-center gap-2 pl-3 rounded-sm p-1 hover:bg-blue-600">
                    <FaHouse />
                    <li>Dashboard</li>
                </ul>
                <p className="text-sm text-[#B0A2A2]">MANAGEMENT</p>
                <ul>
                    <div className="rounded-sm  my-3 flex items-center  gap-2 pl-3 p-1 hover:bg-blue-600">
                        <IoPeopleSharp />
                        <li>Employee</li>
                    </div>
                    <div className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <FaHouseFlag />
                        <li>Properties</li>
                    </div>
                    <div className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <IoPeopleSharp />
                        <li>Leads</li>
                    </div>
                    <div className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <FaCalendarCheck />
                        <li>Task</li>
                    </div>
                    <div className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <IoPeopleSharp />
                        <li>Customer</li>
                    </div>
                </ul>
                <p className="text-sm text-[#B0A2A2]">REPORTS</p>
                <ul>
                    <div className="rounded-sm  my-3 flex items-center gap-2 pl-3 p-1 hover:bg-blue-600">
                        <FaFileSignature />
                        <li>Report</li>
                    </div>
                </ul>
            </div>
            <div className=" text-sm ">
                <hr/>
                <p>@2026 Real Estate CRM</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default SideBar
