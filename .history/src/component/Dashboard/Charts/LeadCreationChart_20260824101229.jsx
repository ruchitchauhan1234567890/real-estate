import React from "react"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"

const LeadCreationChart = ({ data = [], setSelectedMonth }) => {

    const sortedData = [...data].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    )

    return (
        <div className="w-full h-50 p-5 flex flex-col">

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">
                        Leads Overview
                    </h2>
                </div>

                {/* Month Select */}
                <select
                    onChange={(e) =>
                        setSelectedMonth(e.target.value)
                    }
                    defaultValue="2026-08"
                    className="
                        border
                        border-gray-200
                        rounded-md
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        bg-white
                        text-gray-700
                        outline-none
                        cursor-pointer
                        hover:bg-gray-50
                        focus:ring-2
                        focus:ring-blue-500
                        focus:border-blue-500
                    "
                >
                    <option value="2026-05">May 2026</option>
                    <option value="2026-06">June 2026</option>
                    <option value="2026-07">July 2026</option>
                    <option value="2026-08">August 2026</option>
                    <option value="2026-09">September 2026</option>
                    <option value="2026-10">October 2026</option>
                </select>
            </div>

            {/* Chart */}
            <div className="flex-1 min-h-[200px]">

                {sortedData.length === 0 ? (
                    <div className="h-full flex items-center justify-center">
                        <p className="text-sm text-gray-400">
                            No leads created in this month
                        </p>
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height="70%">
                        <AreaChart
                            data={sortedData}
                            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#f3f4f6"
                            />

                            <XAxis
                                dataKey="date"
                                tickFormatter={(date) => {
                                    const d = new Date(date)
                                    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
                                }}
                                tick={{ fontSize: 11, fill: "#9ca3af" }}
                                tickLine={false}
                                axisLine={false}
                                minTickGap={30}
                            />

                            <YAxis
                                allowDecimals={false}
                                tick={{ fontSize: 11, fill: "#9ca3af" }}
                                tickLine={false}
                                axisLine={false}
                            />

                            <Tooltip
                                contentStyle={{
                                    borderRadius: "8px",
                                    border: "none",
                                    fontSize: "12px",
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                    padding: "12px"
                                }}
                                labelFormatter={(date) => {
                                    const d = new Date(date)
                                    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
                                }}
                                formatter={(value) => [value, "New Leads"]}
                            />

                            <Area
                                type="monotone"
                                dataKey="leads"
                                name="New Leads"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorLeads)"
                                activeDot={{ r: 6, fill: "#3b82f6", stroke: "#ffffff", strokeWidth: 2 }}
                            />

                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>

        </div>
    )
}

export default LeadCreationChart