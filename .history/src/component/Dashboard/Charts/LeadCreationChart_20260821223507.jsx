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

    const sortedData = [...data].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    )

    return (
        <div className="
            w-full
            h-[320px]
            bg-white
            border
            border-gray-200
            rounded-xl
            p-4
            shadow-sm
        ">

            {/* Header */}
            <div className="flex items-start justify-between mb-2">

                <div>
                    <h2 className="
                        text-sm
                        font-semibold
                        text-gray-800
                    ">
                        Lead Creation Trend
                    </h2>

                    <p className="
                        text-xs
                        text-gray-500
                        mt-1
                    ">
                        Daily leads created in selected month
                    </p>
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
                        px-2.5
                        py-1.5
                        text-xs
                        bg-white
                        text-gray-700
                        outline-none
                        cursor-pointer
                        hover:border-gray-300
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
            <div className="w-full h-[250px]">

                {sortedData.length === 0 ? (

                    <div className="
                        h-full
                        flex
                        items-center
                        justify-center
                    ">
                        <p className="
                            text-xs
                            text-gray-400
                        ">
                            No leads created in this month
                        </p>
                    </div>

                ) : (

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <LineChart
                            data={sortedData}
                            margin={{
                                top: 10,
                                right: 10,
                                left: -15,
                                bottom: 5
                            }}
                        >

                            <CartesianGrid
                                // stroke="#e5e7eb"
                                strokeDasharray="0 0"
                                vertical={false}
                            />

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
                                    fontSize: 10,
                                    fill: "#6b7280"
                                }}
                                tickLine={false}
                                axisLine={false}
                                minTickGap={20}
                            />

                            <YAxis
                                allowDecimals={false}
                                tick={{
                                    fontSize: 10,
                                    fill: "#6b7280"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />

                            <Tooltip
                                contentStyle={{
                                    borderRadius: "8px",
                                    border: "1px solid #e5e7eb",
                                    fontSize: "12px",
                                    boxShadow:
                                        "0 3px 10px rgba(0,0,0,0.08)"
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

                            <Line
                                type="monotone"
                                dataKey="leads"
                                name="New Leads"
                                // stroke="#2563eb"
                                // strokeWidth={2.5}
                                dot={{
                                    r: 3,
                                    strokeWidth: 2,
                                    fill: "#ffffff"
                                }}
                                activeDot={{
                                    r: 5
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