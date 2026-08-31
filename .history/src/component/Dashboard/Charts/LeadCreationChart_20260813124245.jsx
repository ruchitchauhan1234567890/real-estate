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

const LeadCreationChart = ({ data, setSelectedMonth }) => {

    return (
        <div className="w-120 h-100  rounded-xl p-5 shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">

                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        Lead Creation Trend
                    </h2>

                    <p className="text-sm text-gray-500">
                        Daily leads created in selected month
                    </p>
                </div>

                <select
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                >
                    <option value="2026-08">
                        August 2026
                    </option>

                    <option value="2026-09">
                        September 2026
                    </option>
                </select>

            </div>


            {/* Chart */}
            <div className="w-full h-[300px]">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <LineChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 20,
                            left: 0,
                            bottom: 10
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="date"
                        />

                        <YAxis
                            allowDecimals={false}
                        />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="leads"
                            name="New Leads"
                            stroke="#2563eb"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    )
}

export default LeadCreationChart