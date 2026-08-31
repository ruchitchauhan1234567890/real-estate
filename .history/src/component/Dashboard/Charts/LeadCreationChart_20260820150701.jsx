import React from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"

const LeadCreationChart = ({ data = [], setSelectedMonth }) => {

    // Make sure dates are sequential
    const sortedData = [...data].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    )

    return (
        <div className="w-full h-[330px]   p-5 shadow-sm rounded-2xl">

            {/* Header */}
            <div className="flex items-start justify-between mb-4">

                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        Lead Creation Trend
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Daily leads created in selected month
                    </p>
                </div>

                <select
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    defaultValue="2026-08"
                    className="
                        border border-gray-300
                        rounded-lg
                        px-3 py-2
                        text-sm
                        bg-white
                        text-gray-700
                        outline-none
                        cursor-pointer
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-100
                    "
                >
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
            <div className="w-full h-[330px]">
                {sortedData.length === 0 ? (
                    <div className="h-full flex items-center justify-center">
                        <p className="text-sm text-gray-400">
                            No leads created in this month
                        </p>
                    </div>
                ) : (

                    <ResponsiveContainer
                        width="100%"
                        height="70%"
                    >

                        <LineChart
                            data={sortedData}
                            margin={{
                                top: 10,
                                right: 20,
                                left: -10,
                                bottom: 5
                            }}
                        >

                            <CartesianGrid
                                stroke="#e5e7eb"
                                strokeDasharray="4 4"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="date"
                                tickFormatter={(date) => {
                                    const d = new Date(date)

                                    return d.toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric"
                                    })
                                }}
                                tick={{
                                    fontSize: 12,
                                    fill: "#6b7280"
                                }}
                                tickLine={false}
                                axisLine={false}
                                minTickGap={25}
                            />

                            <YAxis
                                allowDecimals={false}
                                tick={{
                                    fontSize: 12,
                                    fill: "#6b7280"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />

                            <Tooltip
                                contentStyle={{
                                    borderRadius: "10px",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                                }}
                                labelFormatter={(date) => {
                                    const d = new Date(date)

                                    return d.toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric"
                                    })
                                }}
                                formatter={(value) => [
                                    value,
                                    "New Leads"
                                ]}
                            />

                            <Line
                                type="monotone"
                                dataKey="leads"
                                name="New Leads"
                                stroke="#2563eb"
                                strokeWidth={3}
                                dot={{
                                    r: 4,
                                    strokeWidth: 2,
                                    fill: "#ffffff"
                                }}
                                activeDot={{
                                    r: 6,
                                    strokeWidth: 2
                                }}
                            />

                        </LineChart>

                    </ResponsiveContainer>

                )}

            </div>

        </div>
    )
}

export default LeadCreationChart