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

const MonthlyConversionRate = ({ data = [] }) => {

    const sortedData = [...data].sort(
        (a, b) => a.month.localeCompare(b.month)
    )

    return (
        <div className="w-full h-50 p-5 flex flex-col">

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">
                        Monthly Conversion Rate
                    </h2>
                </div>
            </div>

            {/* Chart */}
            <div className="flex-1 min-h-[200px]">

                {sortedData.length === 0 ? (

                    <div className="h-full flex items-center justify-center">
                        <p className="text-sm text-gray-400">
                            No conversion data available
                        </p>
                    </div>

                ) : (

                    <ResponsiveContainer width="100%" height="70%">

                        <AreaChart
                            data={sortedData}
                            margin={{
                                top: 10,
                                right: 10,
                                left: -20,
                                bottom: 0
                            }}
                        >

                            {/* Gradient */}
                            <defs>
                                <linearGradient
                                    id="conversionRateGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#22c55e"
                                        stopOpacity={0.3}
                                    />

                                    <stop
                                        offset="95%"
                                        stopColor="#22c55e"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>

                            {/* Grid */}
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#f3f4f6"
                            />

                            {/* X Axis */}
                            <XAxis
                                dataKey="month"
                                tickFormatter={(month) => {

                                    const date = new Date(`${month}-01`)

                                    return date.toLocaleDateString(
                                        "en-US",
                                        {
                                            month: "short"
                                        }
                                    )
                                }}
                                tick={{
                                    fontSize: 11,
                                    fill: "#9ca3af"
                                }}
                                tickLine={false}
                                axisLine={false}
                                minTickGap={30}
                            />

                            {/* Y Axis */}
                            <YAxis
                                domain={[0, 100]}
                                tickFormatter={(value) => `${value}%`}
                                tick={{
                                    fontSize: 11,
                                    fill: "#9ca3af"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />

                            {/* Tooltip */}
                            <Tooltip
                                contentStyle={{
                                    borderRadius: "8px",
                                    border: "none",
                                    fontSize: "12px",
                                    boxShadow:
                                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                    padding: "12px"
                                }}

                                labelFormatter={(month) => {

                                    const date = new Date(`${month}-01`)

                                    return date.toLocaleDateString(
                                        "en-US",
                                        {
                                            month: "long",
                                            year: "numeric"
                                        }
                                    )
                                }}

                                formatter={(value) => [
                                    `${value}%`,
                                    "Conversion Rate"
                                ]}
                            />

                            {/* Area */}
                            <Area
                                type="monotone"
                                dataKey="conversionRate"
                                name="Conversion Rate"
                                stroke="#22c55e"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#conversionRateGradient)"
                                activeDot={{
                                    r: 6,
                                    fill: "#22c55e",
                                    stroke: "#ffffff",
                                    strokeWidth: 2
                                }}
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                )}

            </div>

        </div>
    )
}

export default MonthlyConversionRate