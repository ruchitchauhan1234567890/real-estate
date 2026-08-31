import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHouseFlag } from "react-icons/fa6";

const SideBar = () => {
    return (
        <div className="w-40 h-screen bg-amber-200">
            <div>
                <p className="font-bold text-center bg-amber-900">Real-Estate</p>
                <hr />
            </div>
            <div>
                <ul className="border-2  my-3 flex items-center gap-3 pl-3">
                    <FaHouse />
                    <li>DashBoard</li>
                </ul>
                <p className="text-sm">MANAGEMENT</p>
                <ul>
                    <div className="border-2  my-3 flex items-center gap-3 pl-3">
                        <IoPeopleSharp />
                        <li>Employee</li>
                    </div>
                    <div>
                        <FaHouseFlag />
                        <li>Properties</li>
                    </div>
                    <div>
                        <IoPeopleSharp />
                        <li>Leads</li>
                    </div>
                    <div>

                    <li>Task</li>
                    </div>
                    <li>Customer</li>
                </ul>
                <ul>
                    <li>Reports</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
