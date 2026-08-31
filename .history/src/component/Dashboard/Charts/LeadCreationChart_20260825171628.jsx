import React, { useContext } from "react"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"
import { ThemeContext } from "../../ContextAPI/ThemeContext"

const LeadCreationChart = ({
    data = [],
    setSelectedMonth,
    selectedMonth
}) => {

    const { theme } = useContext(ThemeContext)

    const sortedData = [...data].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    )

    const isDark = theme === "dark"

    return (
        <div className="
            w-full
            h-64
            p-3
            flex
            flex-col
            bg-white
            dark:bg-[#1F1F30]
        ">

            {/* Header */}

            <div className="
                flex
                items-start
                justify-between
                mb-2
            ">

                <div>

                    <h2 className="
                        text-sm
                        font-semibold
                        text-gray-900
                        dark:text-white
                    ">
                        Leads Overview
                    </h2>

                    <p className="
                        text-[9px]
                        text-gray-400
                        dark:text-gray-500
                        mt-0.5
                    ">
                        Lead creation overview
                    </p>

                </div>


                {/* Month Select */}

                <select
                    onChange={(e) =>
                        setSelectedMonth(e.target.value)
                    }
                    value={selectedMonth}
                    defaultValue="2026-08"
                    className="
                        h-7
                        border
                        border-gray-200
                        dark:border-[#45455A]

                        rounded-md

                        px-2

                        text-[10px]
                        font-medium

                        bg-white
                        dark:bg-[#2A2A40]

                        text-gray-600
                        dark:text-gray-200

                        outline-none
                        cursor-pointer

                        hover:bg-gray-50
                        dark:hover:bg-[#353548]

                        focus:ring-1
                        focus:ring-blue-500

                        focus:border-blue-500
                    "
                >

                    <option value="2026-05">
                        May 2026
                    </option>

                    <option value="2026-06">
                        June 2026
                    </option>

                    <option value="2026-07">
                        July 2026
                    </option>

                    <option value="2026-08">
                        August 2026
                    </option>

                    <option value="2026-09">
                        September 2026
                    </option>

                    <option value="2026-10">
                        October 2026
                    </option>

                </select>

            </div>


            {/* Chart */}

            <div className="flex-1 min-h-0">

                {sortedData.length === 0 ? (

                    <div className="
                        h-full
                        flex
                        items-center
                        justify-center
                    ">

                        <p className="
                            text-[10px]
                            text-gray-400
                            dark:text-gray-500
                        ">
                            No leads created in this month
                        </p>

                    </div>

                ) : (

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <AreaChart
                            data={sortedData}
                            margin={{
                                top: 5,
                                right: 5,
                                left: -25,
                                bottom: 0
                            }}
                        >

                            <defs>

                                <linearGradient
                                    id="colorLeads"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >

                                    <stop
                                        offset="5%"
                                        stopColor="#3b82f6"
                                        stopOpacity={0.25}
                                    />

                                    <stop
                                        offset="95%"
                                        stopColor="#3b82f6"
                                        stopOpacity={0}
                                    />

                                </linearGradient>

                            </defs>


                            {/* Grid */}

                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke={
                                    isDark
                                        ? "#353548"
                                        : "#f3f4f6"
                                }
                            />


                            {/* X Axis */}

                            <XAxis
                                dataKey="date"

                                tickFormatter={(date) => {

                                    const d = new Date(date)

                                    return d.toLocaleDateString(
                                        "en-US",
                                        {
                                            month: "short",
                                            day: "numeric"
                                        }
                                    )
                                }}

                                tick={{
                                    fontSize: 9,
                                    fill: isDark
                                        ? "#9ca3af"
                                        : "#9ca3af"
                                }}

                                tickLine={false}
                                axisLine={false}
                                minTickGap={25}
                            />


                            {/* Y Axis */}

                            <YAxis
                                allowDecimals={false}

                                tick={{
                                    fontSize: 9,
                                    fill: isDark
                                        ? "#9ca3af"
                                        : "#9ca3af"
                                }}

                                tickLine={false}
                                axisLine={false}
                            />


                            {/* Tooltip */}

                            <Tooltip
                                contentStyle={{
                                    borderRadius: "6px",
                                    border: isDark
                                        ? "1px solid #45455A"
                                        : "none",
                                    backgroundColor: isDark
                                        ? "#2A2A40"
                                        : "#ffffff",
                                    color: isDark
                                        ? "#ffffff"
                                        : "#111827",
                                    fontSize: "10px",
                                    boxShadow:
                                        "0 2px 5px rgba(0,0,0,0.08)",
                                    padding: "7px"
                                }}

                                labelStyle={{
                                    color: isDark
                                        ? "#ffffff"
                                        : "#111827"
                                }}

                                itemStyle={{
                                    color: isDark
                                        ? "#93c5fd"
                                        : "#2563eb"
                                }}

                                labelFormatter={(date) => {

                                    const d = new Date(date)

                                    return d.toLocaleDateString(
                                        "en-US",
                                        {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric"
                                        }
                                    )
                                }}

                                formatter={(value) => [
                                    value,
                                    "New Leads"
                                ]}
                            />


                            {/* Area */}

                            <Area
                                type="monotone"
                                dataKey="leads"
                                name="New Leads"

                                stroke="#3b82f6"

                                strokeWidth={2}

                                fillOpacity={1}

                                fill="url(#colorLeads)"

                                activeDot={{
                                    r: 4,
                                    fill: "#3b82f6",
                                    stroke: "#ffffff",
                                    strokeWidth: 1
                                }}
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                )}

            </div>

        </div>
    )
}

export default LeadCreationChart