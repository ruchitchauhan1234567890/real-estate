import React from "react"
import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"

const MonthlyConversionRate = ({ data = [] }) => {

    return (
        <div className="
            w-full
            h-full
            bg-white
            dark:bg-[#1F1F30]

            border
            border-gray-200
            dark:border-[#353548]

            rounded-lg

            p-3

            flex
            flex-col
        ">

            {/* Header */}

            <div className="mb-2">

                <h2 className="
                    text-[11px]
                    font-semibold

                    text-gray-900
                    dark:text-white
                ">
                    Monthly Conversion Rate
                </h2>

                <p className="
                    text-[9px]

                    text-gray-400
                    dark:text-gray-500

                    mt-0.5
                ">
                    Monthly lead conversion performance
                </p>

            </div>


            {/* Chart */}

            <div className="
                flex-1
                min-h-[140px]
            ">

                {data.length === 0 ? (

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
                            No Conversion Data
                        </p>

                    </div>

                ) : (

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 10,
                                left: -20,
                                bottom: 0
                            }}
                        >

                            {/* Horizontal grid lines */}

                            <CartesianGrid
                                stroke="#f3f4f6"
                                strokeDasharray="4 4"
                                vertical={false}
                                horizontal={true}
                            />


                            {/* X Axis */}

                            <XAxis
                                dataKey="month"
                                tick={{
                                    fontSize: 8,
                                    fill: "#9ca3af"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />


                            {/* Y Axis */}

                            <YAxis
                                domain={[0, 100]}
                                tickFormatter={(value) =>
                                    `${value}%`
                                }
                                tick={{
                                    fontSize: 8,
                                    fill: "#9ca3af"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />


                            {/* Tooltip */}

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

                        </LineChart>

                    </ResponsiveContainer>

                )}

            </div>

        </div>
    )
}

export default MonthlyConversionRate