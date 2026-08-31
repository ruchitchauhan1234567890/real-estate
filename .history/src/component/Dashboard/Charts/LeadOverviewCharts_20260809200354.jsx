import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const LeadOverviewChart = () => {

    const data = [
        {
            date: "01 May",
            newLeads: 23,
            converted: 12,
            lost: 3
        },
        {
            date: "06 May",
            newLeads: 31,
            converted: 18,
            lost: 6
        },
        {
            date: "11 May",
            newLeads: 28,
            converted: 14,
            lost: 2
        },
        {
            date: "16 May",
            newLeads: 35,
            converted: 19,
            lost: 5
        },
        {
            date: "21 May",
            newLeads: 38,
            converted: 25,
            lost: 8
        },
        {
            date: "26 May",
            newLeads: 35,
            converted: 22,
            lost: 5
        },
        {
            date: "31 May",
            newLeads: 43,
            converted: 27,
            lost: 10
        }
    ];

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">

                <h2 className="text-lg font-semibold text-gray-800">
                    Leads Overview
                </h2>

                <select
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
                    defaultValue="This Month"
                >
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>This Year</option>
                </select>

            </div>

            {/* Chart */}
            <div className="w-full h-[150px]">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="date"
                            tick={{ fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{ fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip />

                        <Legend
                            verticalAlign="top"
                            height={40}
                        />

                        {/* New Leads */}
                        <Line
                            type="monotone"
                            dataKey="newLeads"
                            name="New Leads"
                            stroke="#3B82F6"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                            activeDot={{ r: 5 }}
                        />

                        {/* Converted Leads */}
                        <Line
                            type="monotone"
                            dataKey="converted"
                            name="Converted Leads"
                            stroke="#4CAF50"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                            activeDot={{ r: 5 }}
                        />

                        {/* Lost Leads */}
                        <Line
                            type="monotone"
                            dataKey="lost"
                            name="Lost Leads"
                            stroke="#EF4444"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                            activeDot={{ r: 5 }}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default LeadOverviewChart;