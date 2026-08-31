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

const MonthlyConversionRate = ({ data = [] }) => {

    return (
        <div className="w-full h-full p-5 flex flex-col">

            {/* Header */}
            <div className="mb-3">
                <h2 className="text-lg font-bold text-gray-900">
                    Monthly Conversion Rate
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                    Monthly lead conversion performance
                </p>
            </div>

            {/* Chart */}
            <div className="flex-1 min-h-[180px]">

                {data.length === 0 ? (

                    <div className="h-full flex items-center justify-center">
                        <p className="text-sm text-gray-400">
                            No Conversion Data
                        </p>
                    </div>

                ) : (

                    <ResponsiveContainer width="100%" height="100%">

                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 15,
                                left: -15,
                                bottom: 5
                            }}
                        >

                            <CartesianGrid
                                stroke="#e5e7eb"
                                vertical={false}
                                horizontal={false}
                            />

                            <XAxis
                                dataKey="month"
                                tick={{
                                    fontSize: 11,
                                    fill: "#6b7280"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />

                            <YAxis
                                domain={[0, 100]}
                                tickFormatter={(value) => `${value}%`}
                                tick={{
                                    fontSize: 11,
                                    fill: "#6b7280"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />

                            <Tooltip
                                formatter={(value) => [
                                    `${value}%`,
                                    "Conversion Rate"
                                ]}
                                contentStyle={{
                                    borderRadius: "8px",
                                    border: "none",
                                    fontSize: "12px",
                                    boxShadow:
                                        "0 4px 12px rgba(0,0,0,0.08)"
                                }}
                            />

                            <Line
                                type="monotone"
                                dataKey="conversionRate"
                                stroke="#2563eb"
                                strokeWidth={2}
                                dot={{
                                    r: 3,
                                    fill: "#ffffff",
                                    strokeWidth: 2
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

export default MonthlyConversionRate