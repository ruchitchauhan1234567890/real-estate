import React, { useState } from "react";
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

const LeadCreationChart = ({ data,selectedMonth,setSelectedMonth }) => {
console.log(data)
    return (
        <div className="  border-gray-200 rounded-xl p-1 shadow-sm">

            <div className="flex justify-between items-center mb-2">

                <h2 className="text-lg font-semibold text-gray-800">
                    Leads Overview
                </h2>

                <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    <option value="2026-01">Jan 2026</option>
                    <option value="2026-02">Feb 2026</option>
                    <option value="2026-03">Mar 2026</option>
                    <option value="2026-04">Apr 2026</option>
                    <option value="2026-05">May 2026</option>
                    <option value="2026-06">Jun 2026</option>
                    <option value="2026-07">Jul 2026</option>
                    <option value="2026-08">Aug 2026</option>
                </select>

            </div>

            {/* Chart */}
            <div className="w-[500px] h-[250px]">

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
                            dataKey="displayDate"
                            interval={3}
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
                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default LeadCreationChart;