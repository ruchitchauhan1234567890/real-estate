import React from 'react';
import { IoPeopleSharp } from "react-icons/io5";
import { MdDomain, MdAttachMoney } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { BiTask } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";

const FooterSummary = () => {

    const emp = JSON.parse(localStorage.getItem("employee")) || []
    const task = JSON.parse(localStorage.getItem("tasks")) || []

    const totalEmp = emp.filter(
        (emp) => !emp.isAdmin
    ).length

    const pendingTask = task.filter(
        (task) => task.taskStatus === "Pending"
    ).length

    // Simulated data
    const activeProperties = 90;
    const activeCustomers = 32;
    const totalRevenue = "₹ 2,45,00,000";

    const summaryItems = [
        {
            title: "Total Employees",
            value: totalEmp,
            icon: IoPeopleSharp,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            linkText: "View all employees"
        },
        {
            title: "Active Properties",
            value: activeProperties,
            icon: MdDomain,
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            linkText: "View all properties"
        },
        {
            title: "Active Customers",
            value: activeCustomers,
            icon: HiUsers,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            linkText: "View all customers"
        },
        {
            title: "Pending Tasks",
            value: pendingTask,
            icon: BiTask,
            iconBg: "bg-red-100",
            iconColor: "text-red-600",
            linkText: "View all tasks"
        },
        {
            title: "Total Revenue",
            value: totalRevenue,
            icon: MdAttachMoney,
            iconBg: "bg-yellow-100",
            iconColor: "text-yellow-600",
            linkText: "View full report"
        }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 mb-6">
            {summaryItems.map((item, index) => {
                const Icon = item.icon;
                
                return (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">{item.title}</p>
                                <p className="text-lg font-bold text-gray-900 leading-tight">{item.value}</p>
                                <p className="text-[10px] text-gray-400 mt-0.5 group-hover:text-blue-500 transition-colors">{item.linkText}</p>
                            </div>
                        </div>
                        
                        <FiChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
                    </div>
                );
            })}
        </div>
    );
};

export default FooterSummary;
