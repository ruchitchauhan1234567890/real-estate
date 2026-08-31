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
        <div className="w-full h-full bg-white border border-gray-200 rounded-lg p-3 flex flex-col">

            {/* Header */}
            <div className="mb-2">

                <h2 className="text-[11px] font-semibold text-gray-900">
                    Monthly Conversion Rate
                </h2>

                <p className="text-[9px] text-gray-400 mt-0.5">
                    Monthly lead conversion performance
                </p>

            </div>

            {/* Chart */}
            <div className="flex-1 min-h-[140px]">

                {data.length === 0 ? (

                    <div className="h-full flex items-center justify-center">
                        <p className="text-[10px] text-gray-400">
                            No Conversion Data
                        </p>
                    </div>

                ) : (

                    <ResponsiveContainer width="100%" height="100%">

                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 10,
                                left: -20,
                                bottom: 0
                            }}
                        >

                            <CartesianGrid
                                stroke="#f3f4f6"
                                vertical={false}
                                horizontal={true}
                            />

                            <XAxis
                                dataKey="month"
                                tick={{
                                    fontSize: 8,
                                    fill: "#9ca3af"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />

                            <YAxis
                                domain={[0, 100]}
                                tickFormatter={(value) => `${value}%`}
                                tick={{
                                    fontSize: 8,
                                    fill: "#9ca3af"
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
                                    borderRadius: "6px",
                                    border: "1px solid #e5e7eb",
                                    fontSize: "10px",
                                    padding: "6px 8px",
                                    boxShadow:
                                        "0 2px 6px rgba(0,0,0,0.08)"
                                }}
                            />

                            <Line
                                type="monotone"
                                dataKey="conversionRate"
                                stroke="#2563eb"
                                strokeWidth={2}
                                dot={{
                                    r: 2.5,
                                    fill: "#ffffff",
                                    strokeWidth: 1.5
                                }}
                                activeDot={{
                                    r: 4
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