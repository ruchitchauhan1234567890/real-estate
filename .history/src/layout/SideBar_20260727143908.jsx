import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHouseFlag } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaFileSignature } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="w-40 h-screen bg-[#1F1F30] text-[#F2E9E9] px-3">
            <div>
                <p className="font-bold text-center bg-amber-900">Real-Estate</p>
                <hr />
            </div>
            <div>
                <ul className="border-2  my-3 flex items-center gap-2 pl-3 rounded-sm p-3">
                    <FaHouse />
                    <li>DashBoard</li>
                </ul>
                <p className="text-sm">MANAGEMENT</p>
                <ul>
                    <div className="border-2  my-3 flex items-center gap-2 pl-3">
                        <IoPeopleSharp />
                        <li>Employee</li>
                    </div>
                    <div className="border-2  my-3 flex items-center gap-2 pl-3">
                        <FaHouseFlag />
                        <li>Properties</li>
                    </div>
                    <div className="border-2  my-3 flex items-center gap-2 pl-3">
                        <IoPeopleSharp />
                        <li>Leads</li>
                    </div>
                    <div className="border-2  my-3 flex items-center gap-2 pl-3">
                        <FaCalendarCheck />
                        <li>Task</li>
                    </div>
                    <div className="border-2  my-3 flex items-center gap-2 pl-3">
                        <IoPeopleSharp />
                        <li>Customer</li>
                    </div>
                </ul>
                <p className="text-sm">REPORTS</p>
                <ul>
                    <div className="border-2  my-3 flex items-center gap-2 pl-3">
                        <FaFileSignature />
                        <li>Report</li>
                    </div>
                </ul>
            </div>
            <div className="mt-42 text-sm">
                <hr/>
                <p>@2026 Real Estate CRM</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default SideBar
